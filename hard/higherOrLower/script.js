let suits = ["spades", "diamonds", "clubs", "hearts"];
let suitIcons = {diamonds: '♦', clubs: '♣', hearts: '♥', spades: '♠'};
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];
let score = 0;

// --- GAME SETUP ---

// creates deck of cards
const makeCards = () => {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push({suit: suits[i], value: values[j]});  
        }
    }
}

// shuffles array of cards
const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

// renders the cards
const renderCards = (cardInfo, hand, isItHidden) => {
    let card = document.createElement("div");
    (cardInfo.suit === "diamonds" || cardInfo.suit === "hearts") ? card.setAttribute("class", "card red") : card.setAttribute("class", "card black")

    if(isItHidden){
        card.innerHTML = `<div class="front"><div class="top-left"> <div class="value">${cardInfo.value}</div> <div class="suit">${suitIcons[cardInfo.suit]}</div> </div> <div class="bottom-right"> <div class="value">${cardInfo.value}</div> <div class="suit">${suitIcons[cardInfo.suit]}</div> </div></div><div class="back"></div>`;
    } else{
        //flipped card
        card.innerHTML = `<div class="front"><div class="top-left"> <div class="value">${cardInfo.value}</div> <div class="suit">${suitIcons[cardInfo.suit]}</div> </div> <div class="bottom-right"> <div class="value">${cardInfo.value}</div> <div class="suit">${suitIcons[cardInfo.suit]}</div> </div></div><div class="back"></div>`;
    }
    hand.appendChild(card);
}

// --- GAME Functionality ---

const guess = (choice) => {
    document.getElementById("nextCard").getElementsByClassName("card")[0].style.transform = 'rotateY(0deg)';
    setTimeout(() => {
        if(deck[0].value === deck[1].value){
            gameOver(false);
            return;
        } else if(choice === "higher"){
            (values.indexOf(deck[0].value) + 1 < values.indexOf(deck[1].value) + 1) ? nextCard(): gameOver(false); 
        } else {
            (values.indexOf(deck[0].value) + 1 > values.indexOf(deck[1].value) + 1) ? nextCard(): gameOver(false); 
        }
    }, 1400);
}

const nextCard = () => {
    score += 1;
    deck.shift();
    if(deck.length < 2){
        
        gameOver(true)
        return;
    }
    reRenderCards();
}

const reRenderCards = () => {
    document.getElementById("currentCard").innerHTML = '';
    document.getElementById("nextCard").innerHTML = '';
    document.getElementById("score").textContent = score;
    renderCards(deck[0], document.getElementById("currentCard"), false);
    renderCards(deck[1], document.getElementById("nextCard"), true);
    document.getElementById("nextCard").getElementsByClassName("card")[0].style.transform = 'rotateY(180deg)';
}

const gameOver = (didWin) => {
    (didWin) ? alert(`YOU WON\nYou got all of them right!`) : alert(`YOU LOSE\nYou got ${score} right!`)
    deck = [];
    score = 0;
    makeCards();
    shuffle(deck);
    reRenderCards();
}

// first loads game
makeCards();
shuffle(deck);
reRenderCards();