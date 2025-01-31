// script.js

const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let deck = [];

// Generate deck
function createDeck() {
    deck = [];
    suits.forEach(suit => {
        values.forEach(value => {
            deck.push(`${value} ${suit}`);
        });
    });
}

// Shuffle deck
function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }
}

// Render cards on the page
function renderDeck() {
    const deckContainer = document.getElementById('deck');
    deckContainer.innerHTML = ''; // Clear the deck
    deck.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card;
        deckContainer.appendChild(cardElement);
    });
}

// Initialize game
function initializeGame() {
    createDeck();
    shuffleDeck();
    renderDeck();
}

// Shuffle button functionality
document.getElementById('shuffle-btn').addEventListener('click', () => {
    shuffleDeck();
    renderDeck();
});

// Start the game by initializing
initializeGame();
