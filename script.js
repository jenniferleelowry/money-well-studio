// Cocktail data from Money Well Studio podcast episodes
const cocktails = [
    {
        id: 1,
        name: "The Nanus",
        episode: "Episode 1: Dry January, Messy Resolutions & the Art of the Reset",
        preview: "Two versions for different mindsets - a refreshing pomegranate reset or a mindful tap water edition.",
        ingredients: [
            "Pomegranate juice",
            "Simple syrup",
            "Ice",
            "Lemon twist",
            "Optional club soda",
            "OR: Water, ice, lemon twist (Tap Water Edition)"
        ],
        story: "The Nanus celebrates Dry January as 'a very normal, very human experiment' rather than a punitive practice. This cocktail explores habit replacement and mindful drinking, offering both an alcohol-free pomegranate reset and a simple tap water edition. It's about being intentional with your choices."
    },
    {
        id: 2,
        name: "The Janus",
        episode: "Episode 2: The Two Faces of New Years",
        preview: "A layered drink symbolizing past and future, inspired by the Roman god of thresholds.",
        ingredients: [
            "Bottom Layer (Past): Aged rum or bourbon, pomegranate liqueur, bitters",
            "Top Layer (Future): Prosecco, elderflower liqueur"
        ],
        story: "Named after Janus, the Roman god of beginnings and transitions, this cocktail features two distinct layers. The darker bottom layer with aged spirits and pomegranate represents reflection on the past, while the lighter top layer of prosecco and elderflower symbolizes fresh beginnings and optimism for the future."
    },
    {
        id: 3,
        name: "The Burnt Toupee",
        episode: "Episode 3: The Cautionary Gospel of Cousin Eddie",
        preview: "A theatrical hot chocolate cocktail with a flaming presentation, inspired by Christmas Vacation.",
        ingredients: [
            "Hot chocolate base",
            "Bourbon or dark rum",
            "Crème de cacao",
            "Heavy cream",
            "Flaming rosemary sprig (garnish)",
            "Toasted marshmallow (garnish)"
        ],
        story: "This cocktail references the classic film Christmas Vacation and its financial cautionary tales through Cousin Eddie. The dramatic flaming rosemary garnish and toasted marshmallow create a memorable presentation while the rich, warming flavors make it perfect for holiday gatherings."
    },
    {
        id: 4,
        name: "The Mojito",
        episode: "Episode 4: Miami Vice and the Price of the Fantasy",
        preview: "The classic Cuban cocktail connecting 1980s excess to modern comparison culture.",
        ingredients: [
            "2 oz white rum",
            "1 oz fresh lime juice",
            "2 tsp sugar",
            "Fresh mint leaves",
            "Soda water",
            "Crushed ice"
        ],
        story: "The Mojito connects the imagery of 1980s Miami excess to today's comparison culture. This traditional Cuban cocktail became synonymous with the glamorous lifestyle depicted in Miami Vice, reminding us of the fantasy versus reality of keeping up appearances and the financial pressures of comparison."
    },
    {
        id: 5,
        name: "The Sid - Eggnog Deluxe",
        episode: "Episode 5: The Economics of Christmas",
        preview: "A rich family recipe combining the best of holiday traditions.",
        ingredients: [
            "Eggs (separated)",
            "Sugar",
            "Whole milk",
            "Heavy cream",
            "Bourbon",
            "Rum",
            "Cognac",
            "Fresh nutmeg (for topping)"
        ],
        story: "The Sid is a cherished family recipe that represents the richness and tradition of the holiday season. This deluxe eggnog combines multiple spirits with carefully separated eggs and cream, creating a luxurious drink that's perfect for discussing the economics and emotions of Christmas spending."
    },
    {
        id: 6,
        name: "La Belle Demenage",
        episode: "Episode 6: Home Buying Series - The Home is Yours! Now What?",
        preview: "A refreshing gin cocktail to celebrate your new beginning.",
        ingredients: [
            "Gin",
            "Fresh lime juice",
            "St-Germain (elderflower liqueur)",
            "Tonic water",
            "Ice",
            "Stir 15-20 times"
        ],
        story: "'La Belle Demenage' translates to 'the beautiful move' in French, making it the perfect cocktail to toast your new home. Light, refreshing, and celebratory, this gin-based drink with elderflower and lime represents new beginnings and the exciting journey of homeownership."
    },
    {
        id: 7,
        name: "The Arbitrary Nature of Time",
        episode: "Episode 7 & 8: The Daylight Savings Conundrum",
        preview: "A bold whiskey cocktail questioning our relationship with time itself.",
        ingredients: [
            "1 oz rye whiskey",
            "1 oz maraschino liqueur",
            "1 oz Cointreau",
            "2 large ice cubes",
            "Orange wheel (garnish)",
            "Bourbon cherry (garnish)"
        ],
        story: "This cocktail examines humanity's complex relationship with time through the lens of Daylight Saving Time. The balanced combination of rye whiskey, maraschino liqueur, and Cointreau creates a sophisticated drink that's as thought-provoking as the arbitrary practice of changing our clocks twice a year."
    },
    {
        id: 8,
        name: "The Negotiator",
        episode: "Episode 9: The Home Buying Series - Finding Your Home",
        preview: "A classic Manhattan variation for those who know how to make a deal.",
        ingredients: [
            "2.5 oz rye whiskey",
            "3/4 oz sweet vermouth",
            "2 dashes Angostura bitters",
            "Brandied cherry (garnish)"
        ],
        story: "Featured in the episode with guest Charles Runnels from Compass Real Estate, The Negotiator is a sophisticated twist on the Manhattan. This cocktail represents the art of negotiation in home buying - bold, balanced, and refined. It's the perfect drink for discussing strategy, wish lists, and the emotional journey of finding your perfect home."
    }
];

// Load cocktails on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCocktails();
    setupModal();
});

function loadCocktails() {
    const cocktailList = document.getElementById('cocktail-list');

    cocktails.forEach(cocktail => {
        const card = createCocktailCard(cocktail);
        cocktailList.appendChild(card);
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
                <textarea id="comment-text" placeholder="Share your thoughts about this cocktail..." required></textarea>
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

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}

function addComment(cocktailId) {
    const name = document.getElementById('comment-name').value.trim();
    const text = document.getElementById('comment-text').value.trim();

    if (!name || !text) {
        alert('Please fill in both your name and comment.');
        return;
    }

    const comment = {
        name: name,
        text: text,
        date: new Date().toISOString()
    };

    // Get existing comments from localStorage
    let comments = JSON.parse(localStorage.getItem('cocktailComments')) || {};

    if (!comments[cocktailId]) {
        comments[cocktailId] = [];
    }

    comments[cocktailId].push(comment);

    // Save to localStorage
    localStorage.setItem('cocktailComments', JSON.stringify(comments));

    // Clear form
    document.getElementById('comment-name').value = '';
    document.getElementById('comment-text').value = '';

    // Reload comments
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
