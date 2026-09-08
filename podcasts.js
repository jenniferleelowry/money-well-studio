// Podcast episodes data from Money Well Studio
const episodes = [
    {
        season: 2,
        episode: 18,
        title: "Dolly Parton, Dirty Martinis, and the Fed’s Jackson Hole Getaway",
        date: "Aug 31, 2026",
        duration: "27 min",
        description: "Dolly Parton, dirty martinis, and the Federal Reserve meet in a conversation about women, generosity, ambition, Jackson Hole, and what the Fed’s annual gathering means for money.",
        cocktail: "Dirt Road Martini",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-dolly-parton-fed-jackson-hole.html"
    },
    {
        season: 2,
        episode: 17,
        title: "College Series: The Real Cost of Choosing the “Dream School”",
        date: "Aug 17, 2026",
        duration: "26 min",
        description: "Jennifer and Julie take an analytical look at one of the biggest financial decisions families make: how to compare colleges based on price, outcomes, debt, graduation rates, earnings, and what a school is actually worth for a particular student.",
        cocktail: "The FAFSA Fizz",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-college-dream-school-cost.html"
    },
    {
        season: 2,
        episode: 16,
        title: "The Person You Marry Isn’t the Person You Divorce: Need to Knows About Prenups",
        date: "Aug 3, 2026",
        duration: "33 min",
        description: "A practical conversation about trust, financial independence, caregiving, prenups, and why staying informed and involved in the household finances matters even in a strong marriage.",
        cocktail: "Duchman Dry Rosé",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-prenups-financial-independence.html"
    },
    {
        season: 2,
        episode: 15,
        title: "Inflation’s Winners, Losers, and the Hidden Risk to Your Retirement",
        date: "Jul 20, 2026",
        duration: "30 min",
        description: "Why does the Fed target inflation at all? This episode covers CPI, PCE, purchasing power, Social Security, healthcare costs, and how decades of inflation can reshape a retirement plan.",
        cocktail: "The Shrinkflation Sour",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-inflation-retirement-risk.html"
    },
    {
        season: 2,
        episode: 14,
        title: "Trump Accounts Update: A $1,000 Baby Investment Account? There's a Catch",
        date: "Jul 2, 2026",
        duration: "29 min",
        description: "Jennifer and Julie connect America’s long history of tax policy to the new child investment accounts known as Trump Accounts or Section 530A accounts, including eligibility, the federal pilot contribution, taxes, and investment restrictions.",
        cocktail: "Patriotic Pepper Punch",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-trump-accounts-530a.html"
    },
    {
        season: 2,
        episode: 13,
        title: "AI Series, Part 4: The Old Career Advice Has Expired: What Parents Should Tell Kids About AI",
        date: "Jun 19, 2026",
        duration: "31 min",
        description: "The final AI and work episode brings the conversation home to parents and students: what skills matter, how AI changes career preparation, and why adaptability, judgment, communication, and AI literacy matter across majors.",
        cocktail: "The Paper Plane",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-ai-parenting-career-advice.html"
    },
    {
        season: 2,
        episode: 12,
        title: "AI Series, Part 3: Your AI Starter Kit for Your First Real Job",
        date: "Jun 5, 2026",
        duration: "30 min",
        description: "A starter kit for new graduates and early-career workers navigating a tighter job market where AI can already handle many traditional entry-level tasks.",
        cocktail: "The Classic Martini",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-ai-first-job-starter-kit.html"
    },
    {
        season: 2,
        episode: 11,
        title: "AI Series, Part 2: AI Is Coming for the Work That Made Us Look Busy",
        date: "May 22, 2026",
        duration: "36 min",
        description: "A mid-career guide to figuring out which parts of your job AI can do, which parts it can assist with, and where human judgment, context, trust, and accountability still create value.",
        cocktail: "Mai Tai",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-ai-mid-career-work.html"
    },
    {
        season: 2,
        episode: 10,
        title: "AI Series, Part 1: Who Survives a Revolution? Lessons for the Age of AI",
        date: "May 8, 2026",
        duration: "26 min",
        description: "The first episode in the AI series looks backward at industrial revolutions, technological displacement, productivity, and who benefits from major economic transitions to better understand the current AI moment.",
        cocktail: "Dark ’n Stormy",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-ai-industrial-revolution-lessons.html"
    },
    {
        season: 2,
        episode: 9,
        title: "Paid in Spices?! The $1.75 Trillion Secret to Getting Paid Just for Owning Stocks",
        date: "Apr 24, 2026",
        duration: "22 min",
        description: "A plain-English look at dividends: where they came from, what they say about a company, why yield can mislead, how dividends are taxed, and how reinvestment can contribute to long-term wealth.",
        cocktail: "The Dividend’s Tale",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-dividends-investing.html"
    },
    {
        season: 2,
        episode: 8,
        title: "Retirement 101 & the move to make Before Tax Day (That Most People Don’t)",
        date: "Apr 10, 2026",
        duration: "30 min",
        description: "A tour through the evolution of retirement and the modern tools that put more responsibility on individuals, including 401(k)s, traditional and Roth IRAs, HSAs, and the tax-day IRA contribution deadline.",
        cocktail: "The Cubicle Liberator",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-retirement-101-before-tax-day.html"
    },
    {
        season: 2,
        episode: 7,
        title: "From $1,000 to $1M? Raising Kids and Securing Their Financial Future with 530A Accounts",
        date: "Mar 27, 2026",
        duration: "30 min",
        description: "Jennifer and Julie explore the new government-backed investment accounts for children, the power of starting early, and what families should understand about contributions, compounding, and long-term outcomes.",
        cocktail: "The Michael Dell 503A",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-530a-kids-financial-future.html"
    },
    {
        season: 2,
        episode: 6,
        title: "Fair Share for the Ladies - Part 2 (With Special Guest: Vasu Reddy from National Women's Law Center)",
        date: "Mar 13, 2026",
        duration: "30 min",
        description: "Part 2 moves from the history of the gender pay gap to the policy architecture behind women’s earnings, with Vasu Reddy of the National Women’s Law Center discussing measurement, caregiving penalties, occupational segregation, and pay transparency.",
        cocktail: "The Saramago",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-gender-pay-gap-part-2-vasu-reddy.html"
    },
    {
        season: 2,
        episode: 5,
        title: "Fair Share for the Ladies - Part 1",
        date: "Feb 27, 2026",
        duration: "29 min",
        description: "A historical look at how women’s labor, wages, and economic value developed over time, and why the gender pay gap has proved so persistent.",
        cocktail: "The Fair Share",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-gender-pay-gap-part-1.html"
    },
    {
        season: 2,
        episode: 4,
        title: "The Economics of Love: Why Valentine's Day Makes Us Spend, Stress, and Sometimes Break Up",
        date: "Feb 13, 2026",
        duration: "26 min",
        description: "Valentine’s Day becomes a case study in commercialization, social expectations, relationship pressure, and why money conversations matter more than performative spending.",
        cocktail: "Cupid’s Arrow Lemon Drop",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-economics-of-love-valentines-day.html"
    },
    {
        season: 2,
        episode: 3,
        title: "Scarcity, Sugar, and Selling: What Girl Scout Cookies Teach Us About Money",
        date: "Jan 30, 2026",
        duration: "21 min",
        description: "Girl Scout Cookie season becomes a lesson in scarcity marketing, sales, goal-setting, resilience, teamwork, and the economics behind one of America’s best-known seasonal products.",
        cocktail: "Thin Mint–Inspired Martini",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-girl-scout-cookies-economics.html"
    },
    {
        season: 2,
        episode: 2,
        title: "Dry January, Messy Resolutions & the Art of the Reset",
        date: "Jan 16, 2026",
        duration: "21 min",
        description: "Hosts Jennifer and Julie discuss New Year's resolutions, the origins of Dry January, and a more forgiving approach to habit formation and self-improvement.",
        cocktail: "The Nanus",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-dry-january-resolutions-reset.html"
    },
    {
        season: 2,
        episode: 1,
        title: "The Two Faces of New Years",
        date: "Jan 1, 2026",
        duration: "15 min",
        description: "Drawing inspiration from Janus, the Roman god of beginnings and endings, the hosts explore why resolutions often fail and how looking backward can help us move forward.",
        cocktail: "The Janus",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE",
        page: "episode-two-faces-of-new-years.html"
    },
    {
        season: 1,
        episode: 24,
        title: "The Cautionary Gospel of Cousin Eddie",
        date: "Dec 22, 2025",
        duration: "15 min",
        description: "Financial lessons drawn from National Lampoon's Christmas Vacation, with Cousin Eddie as the ultimate example of what not to do with money during the holidays.",
        cocktail: "The Burnt Toupee",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 23,
        title: "Miami Vice and the Price of the Fantasy",
        date: "Dec 12, 2025",
        duration: "30 min",
        description: "An analysis of how 1980s excess imagery parallels modern social media comparison culture and how aspirational lifestyles influence spending and financial psychology.",
        cocktail: "The Mojito",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 22,
        title: "The Economics of Christmas",
        date: "Nov 28, 2025",
        duration: "25 min",
        description: "A deep dive into seasonal spending, Black Friday psychology, gift-giving, and the relationship between holiday joy and the broader economy.",
        cocktail: "The Sid - Eggnog Deluxe",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 21,
        title: "The Home Buying Series: The Home is Yours! Now What?",
        date: "Nov 14, 2025",
        duration: "34 min",
        description: "The final home-buying episode covers what happens after closing: maintenance, paperwork, mortgage management, property taxes, repairs, and building equity.",
        cocktail: "La Belle Demenage",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 20,
        title: "The Daylight Savings Conundrum Continues",
        date: "Oct 31, 2025",
        duration: "25 min",
        description: "Jennifer and Julie examine the history and economic implications of Daylight Saving Time and ask why we still change our clocks.",
        cocktail: "The Arbitrary Nature of Time",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 19,
        title: "The Home Buying Series: Finding Your Home",
        date: "Oct 17, 2025",
        duration: "55 min",
        description: "Special guest Charles Runnels from Compass Real Estate joins the conversation about house hunting, negotiation, inspections, contracts, escrow, and the emotional journey of finding a home.",
        cocktail: "The Negotiator",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 18,
        title: "Special Edition: The Federal Reserve & You",
        date: "Oct 3, 2025",
        duration: "17 min",
        description: "A topical exploration of the Federal Reserve, how it works, and how Fed decisions affect mortgages, savings, interest rates, and personal finances.",
        cocktail: "None",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 17,
        title: "The Home Buying Series: Finding Your Agent",
        date: "Sep 19, 2025",
        duration: "27 min",
        description: "A look at the role of real estate agents, changing commission structures, what to look for in representation, and why a good agent matters.",
        cocktail: "The Open House Spritz",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 16,
        title: "The Home Buying Series: Are You Ready?",
        date: "Sep 5, 2025",
        duration: "39 min",
        description: "The kickoff to the home-buying series covers the emotional and financial questions to answer before deciding whether you're actually ready to buy.",
        cocktail: "None",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 15,
        title: "The Investing Series: Risky Business",
        date: "Aug 22, 2025",
        duration: "21 min",
        description: "The final investing installment covers risk tolerance, volatility, and strategies for managing investment risk over time.",
        cocktail: "None",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 14,
        title: "The Investing Series: Bond, Not James Bond",
        date: "Aug 8, 2025",
        duration: "21 min",
        description: "Jennifer and Julie demystify bonds, fixed income, and how bonds can fit into an investment or retirement portfolio.",
        cocktail: "None",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 13,
        title: "The Investing Series: Take Stock in This",
        date: "Jul 25, 2025",
        duration: "31 min",
        description: "Stock-market fundamentals explained with historical context and an accessible look at what stocks are and how markets work.",
        cocktail: "East India Gimlet",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    },
    {
        season: 1,
        episode: 12,
        title: "Credit: Friend or Foe?",
        date: "Jul 11, 2025",
        duration: "30 min",
        description: "An exploration of credit history, credit scores, debt traps, and when borrowing can help or hurt your finances.",
        cocktail: "None",
        listen: "https://open.spotify.com/show/38ZOTHwMXiRPQtSWMQK1oE"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    loadLatestEpisode();
    loadAllEpisodes();
});

function loadLatestEpisode() {
    const latestContent = document.getElementById('latest-episode-content');
    if (!latestContent || !episodes.length) return;

    const latest = episodes[0];
    const titleMarkup = latest.page
        ? `<a class="episode-title-link" href="${latest.page}">${latest.title}</a>`
        : latest.title;

    latestContent.innerHTML = `
        <div class="latest-card">
            <div class="latest-header">
                <h3>${titleMarkup}</h3>
                <div class="episode-meta">
                    <span class="episode-date">${latest.date}</span>
                    <span class="meta-divider">•</span>
                    <span class="episode-duration">${latest.duration}</span>
                </div>
            </div>
            <p class="latest-description">${latest.description}</p>
            ${latest.cocktail !== 'None' ? `<div class="cocktail-pairing">
                <span class="pairing-icon">🍸</span>
                <span>Paired with: <strong>${latest.cocktail}</strong></span>
            </div>` : ''}
            <div class="episode-card-actions">
                ${latest.page ? `<a href="${latest.page}" class="episode-link">Episode Notes & Resources</a>` : ''}
                <a href="${latest.listen}" target="_blank" rel="noopener noreferrer" class="listen-button">Listen on Spotify</a>
            </div>
        </div>
    `;
}

function loadAllEpisodes() {
    const episodeList = document.getElementById('episode-list');
    if (!episodeList) return;

    episodes.forEach(episode => {
        episodeList.appendChild(createEpisodeCard(episode));
    });
}

function createEpisodeCard(episode) {
    const card = document.createElement('div');
    card.className = 'episode-card';
    if (episode.page) card.classList.add('has-episode-page');

    const titleMarkup = episode.page
        ? `<a class="episode-title-link" href="${episode.page}">${episode.title}</a>`
        : episode.title;

    card.innerHTML = `
        <div class="episode-number">Season ${episode.season} • Episode ${episode.episode}</div>
        <h4>${titleMarkup}</h4>
        <div class="episode-meta">
            <span class="episode-date">${episode.date}</span>
            <span class="meta-divider">•</span>
            <span class="episode-duration">${episode.duration}</span>
        </div>
        <p class="episode-description">${episode.description}</p>
        ${episode.cocktail !== 'None' ? `<div class="cocktail-tag">
            <span class="tag-icon">🍸</span>
            <span>${episode.cocktail}</span>
        </div>` : ''}
        <div class="episode-card-actions">
            ${episode.page ? `<a href="${episode.page}" class="episode-link">Episode Notes & Resources</a>` : ''}
            <a href="${episode.listen}" target="_blank" rel="noopener noreferrer" class="episode-link spotify-link">Listen on Spotify</a>
        </div>
    `;

    if (episode.page) {
        card.addEventListener('click', function(event) {
            if (event.target.closest('a')) return;
            window.location.href = episode.page;
        });
        card.setAttribute('role', 'link');
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') window.location.href = episode.page;
        });
    }

    return card;
}
