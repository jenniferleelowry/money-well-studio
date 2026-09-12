/*
 * Money Well Studio newsletter popup
 *
 * The popup is shown when EITHER:
 *   1) the visitor has been on the page for 10 seconds, OR
 *   2) the visitor has scrolled 40% down the page,
 * whichever happens first.
 *
 * A visitor who closes it will not see it again for 30 days.
 * A visitor who subscribes will not see it again on that browser.
 */

const NEWSLETTER_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwMEZ81D8ojsgcva0DSGihRSAmb7pLRYm-6Xj9QRMYUem9Nwqds_Vm8AMI7LeN1xWssdA/exec';

const NEWSLETTER_CONFIG = {
    delayMs: 10000,
    scrollPercent: 40,
    dismissDays: 30
};

document.addEventListener('DOMContentLoaded', () => {
    const popup = ensureNewsletterPopup();
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

        const percent = (window.scrollY / scrollableHeight) * 100;

        if (percent >= NEWSLETTER_CONFIG.scrollPercent) {
            showPopup();
        }
    }

    timer = setTimeout(showPopup, NEWSLETTER_CONFIG.delayMs);
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

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && popup.classList.contains('show')) {
            closeButton.click();
        }
    });

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
            message.textContent = 'Mailing-list signup is not connected yet.';
            return;
        }

        submitButton.disabled = true;
        message.textContent = 'Adding you...';

        try {
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

            localStorage.setItem('moneyWellNewsletterSubscribed', 'true');

            message.textContent = "You're in. Welcome to Money Well Studio.";

            setTimeout(hidePopup, 1800);
        } catch (error) {
            console.error('Newsletter signup failed:', error);
            message.textContent = 'Something went wrong. Please try again.';
            submitButton.disabled = false;
        }
    });
});

function ensureNewsletterPopup() {
    const existingPopup = document.getElementById('newsletter-popup');

    if (existingPopup) return existingPopup;

    const popup = document.createElement('div');
    popup.id = 'newsletter-popup';
    popup.className = 'newsletter-popup';
    popup.setAttribute('aria-hidden', 'true');

    popup.innerHTML = `
        <div class="newsletter-dialog" role="dialog" aria-modal="true" aria-labelledby="newsletter-title">
            <button id="newsletter-close" class="newsletter-close" type="button" aria-label="Close newsletter signup">&times;</button>
            <p class="newsletter-eyebrow">Money Well Studio</p>
            <h2 id="newsletter-title">Join us for money, life, and the occasional cocktail.</h2>
            <p class="newsletter-copy">Get new episodes, resources, and notes from Jennifer and Julie in your inbox.</p>
            <form id="newsletter-form" class="newsletter-form">
                <label for="newsletter-first-name">First name</label>
                <input id="newsletter-first-name" name="firstName" type="text" autocomplete="given-name">
                <label for="newsletter-email">Email</label>
                <input id="newsletter-email" name="email" type="email" autocomplete="email" required>
                <button type="submit">Join the list</button>
                <p id="newsletter-message" class="newsletter-message" role="status" aria-live="polite"></p>
            </form>
        </div>
    `;

    document.body.appendChild(popup);

    return popup;
}
