const suits = ['♠', '♥', '♦', '♣'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

let deck = [];
let playerHand = [];
let selectedCard = null;

function createDeck() {
    deck = [];
    suits.forEach(suit => {
        values.forEach(value => {
            deck.push({ value, suit });
        });
    });
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; 
    }
}

function dealHand() {
    playerHand = [];
    for (let i = 0; i < 5; i++) {
        playerHand.push(deck.pop()); 
    }
}

function renderPlayerHand() {
    const handContainer = document.getElementById('player-hand');
    handContainer.innerHTML = ''; 
    playerHand.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = `${card.value} ${card.suit}`;
        cardElement.addEventListener('click', () => handleCardClick(card));
        handContainer.appendChild(cardElement);
    });
}

function handleCardClick(card) {
    selectedCard = card;
    document.getElementById('message').textContent = `You selected: ${card.value} ${card.suit}`;
}

function initializeGame() {
    createDeck();
    shuffleDeck();
    dealHand();
    renderPlayerHand();
    document.getElementById('message').textContent = 'Select a card!';
}

document.getElementById('shuffle-btn').addEventListener('click', () => {
    createDeck();
    shuffleDeck();
    dealHand();
    renderPlayerHand();
    document.getElementById('message').textContent = 'Cards shuffled. Select a card!';
});

initializeGame();
