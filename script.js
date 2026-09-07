// Cocktail and drink-pairing data from Money Well Studio show notes
// Site data version: 20260907-final1
const cocktails = [
    {
        id: 1,
        name: "Dirt Road Martini",
        episode: "Season 2 • Episode 18: Dolly Parton, Dirty Martinis, and the Fed’s Jackson Hole Getaway",
        preview: "A briny gin-and-tea martini inspired by Dolly Parton and a very Money Well trip to Jackson Hole.",
        ingredients: [
            "2 oz gin",
            "2 oz unsweetened tea",
            "1/4 oz olive or cornichon brine",
            "Ice",
            "Pickled onion, jalapeño, olive, or other briny garnish",
        ],
        story: "The Dirt Road Martini is the Dolly-inspired pairing for the Jackson Hole and Federal Reserve episode: a little polished, a little country, and unapologetically briny."
    },
    {
        id: 2,
        name: "The FAFSA Fizz",
        episode: "Season 2 • Episode 17: College Series — The Real Cost of Choosing the “Dream School”",
        preview: "Gin, elderflower and lemon for the episode where the dream-school math gets real.",
        ingredients: [
            "1 1/2 oz gin",
            "3/4 oz elderflower liqueur",
            "3/4 oz fresh lemon juice",
            "1/2 oz simple syrup",
            "2 oz club soda",
            "Lemon twist",
        ],
        story: "A bright gin fizz paired with the college-cost episode. It is substantially more pleasant than filling out actual financial-aid paperwork."
    },
    {
        id: 3,
        name: "Duchman Dry Rosé Spritz",
        episode: "Season 2 • Episode 16: The Person You Marry Isn’t the Person You Divorce",
        preview: "A simple Texas rosé spritz for a conversation about prenups, independence and staying financially involved.",
        ingredients: [
            "4 oz dry rosé",
            "2 oz sparkling water",
            "1/2 oz fresh grapefruit juice",
            "Ice",
            "Grapefruit slice",
        ],
        story: "The episode featured Duchman Family Winery Dry Rosé, served chilled or turned into this simple grapefruit rosé spritz."
    },
    {
        id: 4,
        name: "The Shrinkflation Sour",
        episode: "Season 2 • Episode 15: Inflation’s Winners, Losers, and the Hidden Risk to Your Retirement",
        preview: "A bourbon sour served in a smaller glass — and yes, the cherry has been cut from the budget.",
        ingredients: [
            "1 1/2 oz bourbon",
            "3/4 oz fresh lemon juice",
            "1/2 oz simple syrup",
            "1 egg white",
            "Ice",
            "Absolutely no maraschino cherry",
        ],
        story: "A deliberately downsized sour for an episode about inflation, purchasing power and the quiet ways rising prices change our lives."
    },
    {
        id: 5,
        name: "Patriotic Pepper Punch",
        episode: "Season 2 • Episode 14: Trump Accounts Update",
        preview: "Watermelon, rum and a pinch of cayenne for a July 4th conversation about taxes and new child investment accounts.",
        ingredients: [
            "2 oz rum",
            "1 oz triple sec",
            "1 oz lime juice",
            "1/2 oz simple syrup",
            "1/2 cup seedless watermelon",
            "Pinch of cayenne",
            "1 cup ice",
            "Blueberry garnish",
        ],
        story: "A red-white-and-blue-adjacent frozen punch for a very American conversation: taxes, public policy and investing."
    },
    {
        id: 6,
        name: "The Paper Plane",
        episode: "Season 2 • Episode 13: AI Series, Part 4 — What Parents Should Tell Kids About AI",
        preview: "A modern classic for an episode about helping kids prepare to launch into an AI-shaped future.",
        ingredients: [
            "3/4 oz bourbon",
            "3/4 oz Aperol",
            "3/4 oz Amaro Nonino",
            "3/4 oz fresh lemon juice",
            "Ice",
            "Optional lemon twist",
        ],
        story: "Bright, bitter, sweet and balanced, the Paper Plane was an easy match for an episode about launching young adults into a changing world."
    },
    {
        id: 7,
        name: "The Classic Martini",
        episode: "Season 2 • Episode 12: AI Series, Part 3 — Your AI Starter Kit for Your First Real Job",
        preview: "A clean, classic martini for an episode about first jobs, judgment and learning the fundamentals.",
        ingredients: [
            "2 to 2 1/2 oz gin",
            "1/2 oz dry vermouth",
            "Ice",
            "Green olive or lemon twist",
        ],
        story: "The fundamentals still matter. That is true for early-career skills, and it is true for a martini."
    },
    {
        id: 8,
        name: "Mai Tai",
        episode: "Season 2 • Episode 11: AI Series, Part 2 — AI Is Coming for the Work That Made Us Look Busy",
        preview: "A tropical nod to Office Space for the mid-career episode about automation and staying useful.",
        ingredients: [
            "2 oz aged rum",
            "3/4 oz fresh lime juice",
            "1/2 oz orange curaçao",
            "1/2 oz orgeat",
            "1/4 oz simple syrup, optional",
            "Crushed ice",
            "Mint and lime wheel",
        ],
        story: "A playful Office Space pairing for a not-so-playful question: which parts of your job are about to be automated?"
    },
    {
        id: 9,
        name: "Dark ’n Stormy",
        episode: "Season 2 • Episode 10: AI Series, Part 1 — Who Survives a Revolution?",
        preview: "Dark rum floated over ginger beer for an episode about technological upheaval, uncertainty and adaptation.",
        ingredients: [
            "2 oz Goslings Black Seal Rum",
            "5 oz ginger beer",
            "Optional 1/2 oz fresh lime juice",
            "Ice",
            "Lime wedge or wheel",
        ],
        story: "The drink mirrors the episode: dark, stormy and ultimately navigable. Ginger beer goes in first, with the dark rum floated on top."
    },
    {
        id: 10,
        name: "The Dividend’s Tale",
        episode: "Season 2 • Episode 9: Paid in Spices?! The Secret to Getting Paid Just for Owning Stocks",
        preview: "A bourbon riff on a Lion’s Tail — steady, layered and designed to reward patience.",
        ingredients: [
            "2 oz bourbon",
            "1/2 oz apple-ginger shrub",
            "1/2 oz fresh lime or lemon juice",
            "1/2 oz simple syrup",
            "2 dashes Angostura bitters",
            "Apple peel twist",
        ],
        story: "A cocktail for dividends: not flashy, surprisingly powerful, and better when you appreciate what compounds over time."
    },
    {
        id: 11,
        name: "The Cubicle Liberator",
        episode: "Season 2 • Episode 8: Retirement 101 & the Move to Make Before Tax Day",
        preview: "Bourbon and gin in the same glass, because retirement planning should at least be less dry.",
        ingredients: [
            "1 oz bourbon",
            "1 oz London Dry gin",
            "1/2 oz fresh lime juice",
            "2 dashes Angostura bitters",
            "Club soda",
            "Orange slice",
        ],
        story: "A spirited pairing for the episode about 401(k)s, IRAs, HSAs and eventually liberating yourself from the cubicle."
    },
    {
        id: 12,
        name: "The Michael Dell 503A",
        episode: "Season 2 • Episode 7: From $1,000 to $1M? Raising Kids and Securing Their Financial Future",
        preview: "Bourbon, fig and honey for a conversation about giving compounding a very long runway.",
        ingredients: [
            "2 oz bourbon",
            "1/2 oz fig syrup",
            "1/4 oz honey syrup",
            "2 dashes walnut bitters",
            "1 dash orange bitters",
            "Orange peel",
            "Optional dried fig",
        ],
        story: "A rich, patient cocktail for an episode built around one of investing’s most powerful ingredients: time."
    },
    {
        id: 13,
        name: "The Saramago",
        episode: "Season 2 • Episode 6: Fair Share for the Ladies — Part 2",
        preview: "A tequila martini variation with elderflower and a mezcal rinse, selected with guest Vasu Reddy.",
        ingredients: [
            "2 oz blanco tequila",
            "3/4 oz blanc or dry vermouth",
            "1/2 oz elderflower liqueur",
            "1 dash orange bitters",
            "Mezcal for rinsing the glass",
            "Grapefruit twist",
        ],
        story: "Smoky, floral and a little unexpected, the Saramago accompanied the second half of the pay-gap series."
    },
    {
        id: 14,
        name: "The Fair Share",
        episode: "Season 2 • Episode 5: Fair Share for the Ladies — Part 1",
        preview: "Gin, amaro and pomegranate: tart, layered and quietly assertive.",
        ingredients: [
            "1 1/2 oz gin",
            "3/4 oz amaro",
            "1 oz pomegranate juice",
            "1/2 oz fresh lemon juice",
            "1/4 oz honey syrup",
            "2 dashes orange bitters",
            "Lemon twist or pomegranate arils",
        ],
        story: "Created for the episode, The Fair Share is deliberately layered — much like the long history behind the gender pay gap."
    },
    {
        id: 15,
        name: "Cupid’s Arrow Lemon Drop",
        episode: "Season 2 • Episode 4: The Economics of Love",
        preview: "A bright raspberry-pomegranate lemon drop for an episode about love, expectations and expensive February decisions.",
        ingredients: [
            "2 oz vodka",
            "1 oz fresh lemon juice",
            "3/4 oz simple syrup",
            "1/2 oz raspberry or pomegranate juice",
            "Ice",
            "Optional sugar rim",
            "Lemon twist and raspberry",
        ],
        story: "Valentine’s Day is complicated enough. The cocktail is not."
    },
    {
        id: 16,
        name: "Thin Mint–Inspired Martini",
        episode: "Season 2 • Episode 3: Scarcity, Sugar, and Selling",
        preview: "A shamelessly dessert-like homage to cookie season, with an equally unserious milk option.",
        ingredients: [
            "3/4 oz Irish cream",
            "1 1/2 oz green crème de menthe",
            "3 oz clear crème de cacao",
            "3 oz vanilla vodka",
            "Ice",
            "Chocolate-mint cookie garnish",
        ],
        story: "A playful pairing for the economics of Girl Scout cookie season. The official non-alcoholic alternate in the show notes: milk over ice."
    },
    {
        id: 17,
        name: "The Nanus",
        episode: "Season 2 • Episode 2: Dry January, Messy Resolutions & the Art of the Reset",
        preview: "A non-alcoholic pomegranate reset — or, if you are truly committed, the tap-water edition.",
        ingredients: [
            "Pomegranate juice",
            "A touch of simple syrup",
            "Ice",
            "Lemon twist",
            "Optional club soda",
            "Alternate edition: water",
        ],
        story: "The Nanus treats Dry January as a reset rather than a punishment, with ritual intact and alcohol optional."
    },
    {
        id: 18,
        name: "The Janus",
        episode: "Season 2 • Episode 1: The Two Faces of New Years",
        preview: "A two-layer cocktail representing the year behind you and the year ahead.",
        ingredients: [
            "1 oz aged rum or bourbon",
            "1/2 oz pomegranate liqueur or juice",
            "2 dashes Angostura bitters",
            "1 oz prosecco or champagne",
            "1/2 oz elderflower liqueur or Grand Marnier",
            "Lemon twist",
        ],
        story: "A two-faced drink for Janus, the Roman god of beginnings, endings and thresholds."
    },
    {
        id: 19,
        name: "The Burnt Toupee",
        episode: "Season 1 • Episode 24: The Cautionary Gospel of Cousin Eddie",
        preview: "A theatrical hot chocolate cocktail inspired by Christmas Vacation.",
        ingredients: [
            "Hot chocolate",
            "Bourbon or dark rum",
            "Crème de cacao",
            "Heavy cream",
            "Toasted marshmallow",
            "Rosemary garnish",
        ],
        story: "A holiday drink for the ultimate financial cautionary tale: Cousin Eddie."
    },
    {
        id: 20,
        name: "The Mojito",
        episode: "Season 1 • Episode 23: Miami Vice and the Price of the Fantasy",
        preview: "The Cuban classic for a pastel-soaked conversation about image, luxury and comparison.",
        ingredients: [
            "2 oz white rum",
            "3/4 oz fresh lime juice",
            "2 tsp sugar or 1/2 oz simple syrup",
            "Fresh mint",
            "Soda water",
            "Crushed ice",
        ],
        story: "A refreshing counterpoint to an episode about the very expensive fantasy of keeping up appearances."
    },
    {
        id: 21,
        name: "The Sid — Eggnog Deluxe",
        episode: "Season 1 • Episode 22: The Economics of Christmas",
        preview: "A rich holiday eggnog built for a conversation about seasonal spending and tradition.",
        ingredients: [
            "Eggs",
            "Sugar",
            "Whole milk",
            "Heavy cream",
            "Bourbon",
            "Rum",
            "Cognac",
            "Fresh nutmeg",
        ],
        story: "A family-style holiday classic for the economics, emotions and excess of Christmas."
    },
    {
        id: 22,
        name: "La Belle Demenage",
        episode: "Season 1 • Episode 21: The Home Buying Series — The Home Is Yours! Now What?",
        preview: "Gin, lime and elderflower to toast the beautiful move.",
        ingredients: [
            "Gin",
            "Fresh lime juice",
            "St-Germain",
            "Tonic water",
            "Ice",
        ],
        story: "A light celebratory drink for the moment the closing is done and homeownership actually begins."
    },
    {
        id: 23,
        name: "The Arbitrary Nature of Time",
        episode: "Season 1 • Episode 20: The Daylight Savings Conundrum Continues",
        preview: "Rye, maraschino and Cointreau for the annual ritual of questioning why our clocks are doing this.",
        ingredients: [
            "1 oz rye whiskey",
            "1 oz maraschino liqueur",
            "1 oz Cointreau",
            "Ice",
            "Orange wheel",
            "Bourbon cherry",
        ],
        story: "A bold drink for an episode about our surprisingly arbitrary relationship with time."
    },
    {
        id: 24,
        name: "The Negotiator",
        episode: "Season 1 • Episode 19: The Home Buying Series — Finding Your Home",
        preview: "A Manhattan-style drink for the art of offers, inspections and getting to yes.",
        ingredients: [
            "2 1/2 oz rye whiskey",
            "3/4 oz sweet vermouth",
            "2 dashes Angostura bitters",
            "Brandied cherry",
        ],
        story: "Bold, balanced and strategic — much like a good real-estate negotiation."
    },
    {
        id: 25,
        name: "The Open House Spritz",
        episode: "Season 1 • Episode 17: The Home Buying Series — Finding Your Agent",
        preview: "Aperol, elderflower and Prosecco for the episode about finding the person who will guide the deal.",
        ingredients: [
            "1 1/2 oz Aperol",
            "1 oz elderflower liqueur",
            "3 oz Prosecco",
            "1 oz soda water",
            "Cucumber ribbon",
            "Orange twist",
        ],
        story: "An easy, bright spritz for open houses, agent interviews and the start of the home-buying process."
    },
    {
        id: 26,
        name: "East India Gimlet",
        episode: "Season 1 • Episode 13: The Investing Series — Take Stock in This",
        preview: "A Dishoom-inspired gin gimlet with lime, dill and celery bitters.",
        ingredients: [
            "London Dry gin",
            "Lime cordial",
            "Lime wedge",
            "Small sprig of dill",
            "2 dashes celery bitters",
            "Ice",
        ],
        story: "A sharp, refreshing gin cocktail paired with the first episode in the investing series."
    },
    {
        id: 27,
        name: "The Tequila Sunrise",
        episode: "Season 1: Predicting a Recession — with a Side of Tequila",
        preview: "A sunny drink with a dramatic gradient, just like the signals economists try to read before a downturn.",
        ingredients: [
            "2 oz tequila",
            "4 oz orange juice",
            "1/2 oz grenadine",
            "Ice",
            "Orange slice",
            "Maraschino cherry",
        ],
        story: "The visual gradient made the Tequila Sunrise a natural pairing for an episode about the inverted yield curve."
    },
    {
        id: 28,
        name: "The Greenback",
        episode: "Season 1: The Currency",
        preview: "A bright green-blue vodka drink for a history of what makes money money.",
        ingredients: [
            "2 oz sweet-and-sour mix",
            "1 1/2 oz vodka",
            "1/2 oz blue curaçao",
            "Lemonade",
            "Ice",
            "Lemon wedge",
        ],
        story: "The Greenback accompanies a tour from cowrie shells to fiat currency and the central role of trust."
    },
    {
        id: 29,
        name: "Nick & Nora Dry Gin Martini",
        episode: "Season 1: Cents & Sensibility — With a Budget Built to Last",
        preview: "A crisp dry martini for an episode about giving every dollar a job.",
        ingredients: [
            "2 1/2 oz London Dry gin",
            "1/2 oz dry vermouth",
            "Optional orange bitters",
            "Lemon twist or olive",
        ],
        story: "A disciplined classic for a disciplined topic: building a budget you can actually live with."
    },
    {
        id: 30,
        name: "Battle of Toro",
        episode: "Season 1: Now Here’s Something of Interest…",
        preview: "A bold Texas red wine pairing for a tour through the strange history of interest.",
        ingredients: [
            "Battle of Toro red wine from Spicewood Vineyards",
            "Wine glass",
        ],
        story: "Not every episode needs a mixed drink. This one paired the history of interest with a bold Texas red."
    },
    {
        id: 31,
        name: "Milk Punch",
        episode: "Season 1: Investing in Your Children’s Future with UTMA Accounts",
        preview: "A rich bourbon-and-cognac milk punch for a conversation about putting money to work for kids.",
        ingredients: [
            "Bourbon",
            "Cognac",
            "Crème de cacao",
            "Jamaican rum",
            "Half-and-half",
            "Whole milk",
            "Maple syrup",
            "Vanilla paste",
            "Crushed ice",
        ],
        story: "A luxurious pairing for an episode about custodial investing and giving children a financial head start."
    },
    {
        id: 32,
        name: "The Credit Score Cocktail",
        episode: "Season 1: Credit Score and Cocktails",
        preview: "Gin, pomegranate, egg white and cava — dressed in green for a conversation about your financial reputation.",
        ingredients: [
            "2 oz gin",
            "2 oz pomegranate juice",
            "1/2 oz lemon juice",
            "1/2 oz simple syrup",
            "1 egg white",
            "1 oz cava",
            "Ice",
            "Green herb garnish",
        ],
        story: "A foamy, celebratory drink for the very unglamorous but important subject of credit scores."
    }
];

document.addEventListener('DOMContentLoaded', function() {
    loadCocktails();
    setupModal();
});

function loadCocktails() {
    const cocktailList = document.getElementById('cocktail-list');
    if (!cocktailList) return;
    cocktailList.innerHTML = '';

    cocktails.forEach(cocktail => {
        cocktailList.appendChild(createCocktailCard(cocktail));
    });
}

function createCocktailCard(cocktail) {
    const card = document.createElement('div');
    card.className = 'cocktail-card';
    card.onclick = () => openModal(cocktail);

    card.innerHTML = `
        <h3>${cocktail.name}</h3>
        <p class="episode-title">${cocktail.episode}</p>
        <p class="cocktail-preview">${cocktail.preview}</p>
        <span class="view-details">View Recipe & Comment</span>
    `;

    return card;
}

function openModal(cocktail) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${cocktail.name}</h2>
            <p class="modal-episode">${cocktail.episode}</p>
        </div>

        <div class="story-section">
            <p>${cocktail.story}</p>
        </div>

        <div class="recipe-section">
            <h3>Ingredients</h3>
            <ul>
                ${cocktail.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>

        <div class="comments-section">
            <h3>Comments</h3>
            <div class="comment-form">
                <input type="text" id="comment-name" placeholder="Your name" required>
                <textarea id="comment-text" placeholder="Share your thoughts about this drink..." required></textarea>
                <button onclick="addComment(${cocktail.id})">Post Comment</button>
            </div>
            <div id="comments-list-${cocktail.id}" class="comments-list">
                ${loadComments(cocktail.id)}
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

function addComment(cocktailId) {
    const name = document.getElementById('comment-name').value.trim();
    const text = document.getElementById('comment-text').value.trim();

    if (!name || !text) {
        alert('Please fill in both your name and comment.');
        return;
    }

    const comment = {
        name,
        text,
        date: new Date().toISOString()
    };

    let comments = JSON.parse(localStorage.getItem('cocktailComments')) || {};
    if (!comments[cocktailId]) comments[cocktailId] = [];
    comments[cocktailId].push(comment);
    localStorage.setItem('cocktailComments', JSON.stringify(comments));

    document.getElementById('comment-name').value = '';
    document.getElementById('comment-text').value = '';
    document.getElementById(`comments-list-${cocktailId}`).innerHTML = loadComments(cocktailId);
}

function loadComments(cocktailId) {
    const comments = JSON.parse(localStorage.getItem('cocktailComments')) || {};
    const cocktailComments = comments[cocktailId] || [];

    if (cocktailComments.length === 0) {
        return '<p class="no-comments">No comments yet. Be the first to share your thoughts!</p>';
    }

    return cocktailComments.map(comment => {
        const date = new Date(comment.date);
        const formattedDate = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        return `
            <div class="comment">
                <div class="comment-header">
                    <span class="comment-author">${escapeHtml(comment.name)}</span>
                    <span class="comment-date">${formattedDate}</span>
                </div>
                <p class="comment-text">${escapeHtml(comment.text)}</p>
            </div>
        `;
    }).reverse().join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
