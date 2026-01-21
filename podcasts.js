// Podcast episodes data from Money Well Studio
const episodes = [
    {
        id: 1,
        title: "Dry January, Messy Resolutions & the Art of the Reset",
        date: "Jan 16, 2026",
        duration: "21 min",
        description: "Hosts Jennifer and Julie discuss New Year's resolutions, exploring the origins of Dry January and mindful habit formation. They challenge the punitive approach to resolutions and embrace 'a very normal, very human experiment' in self-improvement.",
        cocktail: "The Nanus",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 2,
        title: "The Two Faces of New Years",
        date: "Jan 1, 2026",
        duration: "15 min",
        description: "Drawing inspiration from Roman mythology and the god Janus, the hosts explore why our January resolutions often fail by February. This episode examines the dual nature of new beginnings - looking back while moving forward.",
        cocktail: "The Janus",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 3,
        title: "The Cautionary Gospel of Cousin Eddie",
        date: "Dec 22, 2025",
        duration: "15 min",
        description: "Financial lessons drawn from the beloved film 'National Lampoon's Christmas Vacation.' The hosts use Cousin Eddie as a lens to examine financial decision-making, family dynamics, and the economics of the holidays.",
        cocktail: "The Burnt Toupee",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 4,
        title: "Miami Vice and the Price of the Fantasy",
        date: "Dec 12, 2025",
        duration: "30 min",
        description: "An analysis of how 1980s excess imagery parallels modern social media comparison culture. The hosts explore how the fantasy lifestyles we see - from Miami Vice to Instagram influencers - impact our financial psychology and spending habits.",
        cocktail: "The Mojito",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 5,
        title: "The Economics of Christmas",
        date: "Nov 28, 2025",
        duration: "25 min",
        description: "A deep dive into seasonal spending and its relationship to global economics. From Black Friday psychology to the emotional weight of gift-giving, Jennifer and Julie unpack the true cost of the holiday season.",
        cocktail: "The Sid - Eggnog Deluxe",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 6,
        title: "The Home Buying Series: The Home is Yours! Now What?",
        date: "Nov 14, 2025",
        duration: "34 min",
        description: "Post-closing homeownership responsibilities and property management. The final episode in the home buying series covers what happens after you get the keys - maintenance, budgeting for repairs, and building equity.",
        cocktail: "La Belle Demenage",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 7,
        title: "The Daylight Savings Conundrum Continues",
        date: "Oct 31, 2025",
        duration: "25 min",
        description: "Jennifer and Julie examine the historical context and economic implications of Daylight Saving Time. Why do we still change our clocks? What does this seemingly arbitrary practice reveal about our relationship with time and productivity?",
        cocktail: "The Arbitrary Nature of Time",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 8,
        title: "The Home Buying Series: Finding Your Home",
        date: "Oct 17, 2025",
        duration: "55 min",
        description: "Special guest Charles Runnels from Compass Real Estate joins the conversation to discuss house hunting strategies, the emotional journey of finding your perfect home, and negotiation tactics that work in today's market.",
        cocktail: "The Negotiator",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 9,
        title: "Special Edition: The Federal Reserve & You",
        date: "Oct 3, 2025",
        duration: "17 min",
        description: "A topical exploration of the Federal Reserve's structure and economic function. The hosts break down how the Fed's decisions impact your personal finances, from mortgage rates to savings account interest.",
        cocktail: "None",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 10,
        title: "The Home Buying Series: Finding Your Agent",
        date: "Sep 19, 2025",
        duration: "27 min",
        description: "A deep dive into real estate agents' historical roles and modern commission challenges. Learn what to look for in an agent, how commission structures work, and why representation matters in your home buying journey.",
        cocktail: "None",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 11,
        title: "The Home Buying Series: Are You Ready?",
        date: "Sep 5, 2025",
        duration: "39 min",
        description: "The kickoff episode of the home buying series addresses both emotional and financial considerations for purchasing your first home. Are you really ready? Jennifer and Julie help you figure it out.",
        cocktail: "None",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 12,
        title: "The Investing Series: Risky Business",
        date: "Aug 22, 2025",
        duration: "21 min",
        description: "The final investing installment covers risk management in personal finance and strategies for navigating market volatility. How much risk should you take? The hosts break down risk tolerance and smart investing strategies.",
        cocktail: "None",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 13,
        title: "The Investing Series: Bond, Not James Bond",
        date: "Aug 8, 2025",
        duration: "21 min",
        description: "Demystifying bonds and fixed income strategies for retirement planning. Jennifer and Julie explain how bonds work, why they matter, and how to incorporate them into your investment portfolio.",
        cocktail: "None",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 14,
        title: "The Investing Series: Take Stock in This",
        date: "Jul 25, 2025",
        duration: "31 min",
        description: "Stock market fundamentals explained with historical context and an accessibility focus. What is a stock? How does the market actually work? This episode makes investing approachable for everyone.",
        cocktail: "None",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    },
    {
        id: 15,
        title: "Credit: Friend or Foe?",
        date: "Jul 11, 2025",
        duration: "30 min",
        description: "An exploration of credit history, modern credit implications, and debt trap prevention strategies. The hosts discuss credit scores, how to build credit responsibly, and when debt can work for you.",
        cocktail: "None",
        listen: "https://podcasts.apple.com/us/podcast/money-well-studio/id1804189491"
    }
];

// Load episodes on page load
document.addEventListener('DOMContentLoaded', function() {
    loadLatestEpisode();
    loadAllEpisodes();
});

function loadLatestEpisode() {
    const latestContent = document.getElementById('latest-episode-content');
    const latest = episodes[0]; // First episode is the most recent

    latestContent.innerHTML = `
        <div class="latest-card">
            <div class="latest-header">
                <h3>${latest.title}</h3>
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
            <a href="${latest.listen}" target="_blank" class="listen-button">Listen Now</a>
        </div>
    `;
}

function loadAllEpisodes() {
    const episodeList = document.getElementById('episode-list');

    episodes.forEach(episode => {
        const card = createEpisodeCard(episode);
        episodeList.appendChild(card);
    });
}

function createEpisodeCard(episode) {
    const card = document.createElement('div');
    card.className = 'episode-card';

    card.innerHTML = `
        <div class="episode-number">Episode ${episode.id}</div>
        <h4>${episode.title}</h4>
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
        <a href="${episode.listen}" target="_blank" class="episode-link">Listen</a>
    `;

    return card;
}
