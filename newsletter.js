/*
 * Money Well Studio newsletter popup
 *
 * SETUP:
 * Replace YOUR_GOOGLE_APPS_SCRIPT_URL_HERE below with the /exec URL
 * from your deployed Google Apps Script web app.
 *
 * The popup is shown when EITHER:
 *   1) the visitor has been on the page for 10 seconds, OR
 *   2) the visitor has scrolled 40% down the page,
 * whichever happens first.
 *
 * A visitor who closes it will not see it again for 30 days.
 * A visitor who subscribes will not see it again on that browser.
 */

const NEWSLETTER_ENDPOINT = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

const NEWSLETTER_CONFIG = {
    delayMs: 10000,       // 10 seconds
    scrollPercent: 40,    // show after 40% page scroll
    dismissDays: 30       // wait 30 days after dismissal
};

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('newsletter-popup');
    const closeButton = document.getElementById('newsletter-close');
    const form = document.getElementById('newsletter-form');
    const message = document.getElementById('newsletter-message');
    const firstNameInput = document.getElementById('newsletter-first-name');
    const emailInput = document.getElementById('newsletter-email');

    if (!popup || !closeButton || !form || !emailInput) return;

    let popupShown = false;
    let timer = null;

    const alreadySubscribed =
        localStorage.getItem('moneyWellNewsletterSubscribed') === 'true';

    const dismissedUntil =
        Number(localStorage.getItem('moneyWellNewsletterDismissedUntil') || 0);

    const currentlyDismissed = Date.now() < dismissedUntil;

    if (alreadySubscribed || currentlyDismissed) return;

    function showPopup() {
        if (popupShown) return;

        popupShown = true;
        popup.classList.add('show');
        popup.setAttribute('aria-hidden', 'false');

        if (timer) clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);

        // Put keyboard focus in the first field when possible.
        setTimeout(() => {
            if (firstNameInput) firstNameInput.focus();
        }, 100);
    }

    function hidePopup() {
        popup.classList.remove('show');
        popup.setAttribute('aria-hidden', 'true');
    }

    function handleScroll() {
        const scrollableHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        if (scrollableHeight <= 0) return;

        const percent =
            (window.scrollY / scrollableHeight) * 100;

        if (percent >= NEWSLETTER_CONFIG.scrollPercent) {
            showPopup();
        }
    }

    // Trigger 1: elapsed time.
    timer = setTimeout(showPopup, NEWSLETTER_CONFIG.delayMs);

    // Trigger 2: scroll depth.
    window.addEventListener('scroll', handleScroll, { passive: true });

    closeButton.addEventListener('click', () => {
        hidePopup();

        const dismissUntil =
            Date.now() +
            NEWSLETTER_CONFIG.dismissDays * 24 * 60 * 60 * 1000;

        localStorage.setItem(
            'moneyWellNewsletterDismissedUntil',
            String(dismissUntil)
        );
    });

    // Close with Escape.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && popup.classList.contains('show')) {
            closeButton.click();
        }
    });

    // Close by clicking outside the dialog.
    popup.addEventListener('click', (event) => {
        if (event.target === popup) {
            closeButton.click();
        }
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const firstName = firstNameInput ? firstNameInput.value.trim() : '';
        const email = emailInput.value.trim();
        const submitButton = form.querySelector('button[type="submit"]');

        if (!email) return;

        if (
            !NEWSLETTER_ENDPOINT ||
            NEWSLETTER_ENDPOINT.includes('YOUR_GOOGLE_APPS_SCRIPT_URL_HERE')
        ) {
            message.textContent =
                'Mailing-list signup is not connected yet.';
            return;
        }

        submitButton.disabled = true;
        message.textContent = 'Adding you...';

        try {
            /*
             * Google Apps Script cross-origin forms work most simply with
             * no-cors. The request is sent successfully, but the browser
             * cannot read the returned response body.
             */
            await fetch(NEWSLETTER_ENDPOINT, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain'
                },
                body: JSON.stringify({
                    firstName,
                    email,
                    source: window.location.pathname
                })
            });

            localStorage.setItem(
                'moneyWellNewsletterSubscribed',
                'true'
            );

            message.textContent =
                'You’re in. Welcome to Money Well Studio.';

            setTimeout(hidePopup, 1800);

        } catch (error) {
            console.error('Newsletter signup failed:', error);
            message.textContent =
                'Something went wrong. Please try again.';
            submitButton.disabled = false;
        }
    });
});
