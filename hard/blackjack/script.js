let suits = ["spades", "diamonds", "clubs", "hearts"];
let suitIcons = {diamonds: '♦', clubs: '♣', hearts: '♥', spades: '♠'};
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];

let practiceDeck = [{ suit: 'spades', value: "2" },{ suit:'spades', value: "A" },{ suit: 'clubs', value: "8" },{ suit: 'clubs', value: "K" },{ suit: 'clubs', value: "2" },{ suit: 'diamonds', value: "2" },{ suit: 'diamonds', value: "8" }]


// --- GAME SETUP ---

// creates deck of cards
const makeCards = () => {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
                deck.push({suit: suits[i], value: values[j]});  
        }
    }
}
makeCards();

// shuffles array of cards
const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}

shuffle(deck);

// renders the cards
const makeCard = (cardInfo, hand, isItHidden) => {
    let card = document.createElement("div");
    (cardInfo.suit === "diamonds" || cardInfo.suit === "hearts") ? card.setAttribute("class", "card red") : card.setAttribute("class", "card black")

    if(isItHidden){
        card.innerHTML = `<div class="back"></div> <div class="top-left"> <div class="value">${cardInfo.value}</div> <div class="suit">${suitIcons[cardInfo.suit]}</div> </div> <div class="bottom-right"> <div class="value">${cardInfo.value}</div> <div class="suit">${suitIcons[cardInfo.suit]}</div> </div>`;
    } else{
        card.innerHTML = `<div class="back hidden"></div> <div class="top-left"> <div class="value">${cardInfo.value}</div> <div class="suit">${suitIcons[cardInfo.suit]}</div> </div> <div class="bottom-right"> <div class="value">${cardInfo.value}</div> <div class="suit">${suitIcons[cardInfo.suit]}</div> </div>`;
    }
    hand.appendChild(card);
}

// --- GAME FUNCTIONALITY ---

const hitButton = document.getElementById('hit');
const standButton = document.getElementById('stand');
const newGameButton = document.getElementById('newGame');
const playerStatus = document.getElementById('status');

const moneyDisplay = document.getElementById('money');
const betAmount = document.getElementById('betAmount');

hitButton.disabled = true;
standButton.disabled = true;

let dealersHand = [];
let playersHand = [];
let dealer = document.getElementById('dealersHand');
let player = document.getElementById('playersHand');

let playerScoreHigh = 0;
let playerScoreLow = 0;

let computerScoreHigh = 0;
let computerScoreLow = 0;

let money = 100;

moneyDisplay.textContent = money;

const renderCards = (whosCard) => {
    if(whosCard === "dealer"){
        makeCard(dealersHand[dealersHand.length - 1], dealer, false);
    } else if(whosCard === "hiddenDealer"){
        makeCard(dealersHand[dealersHand.length - 1], dealer, true);
    } else {
        makeCard(playersHand[playersHand.length - 1], player, false);
    }
}

const calculatePlayerScore = () => {
    playerScoreHigh = 0;
    playerScoreLow = 0;
    playersHand.forEach((card) => {
        if(card.value === "A"){
            playerScoreHigh += 11;
            playerScoreLow += 1;
        } else if(card.value === "J" || card.value === "Q"|| card.value === "K"){
            playerScoreHigh += 10;
            playerScoreLow += 10;
        } else{
            playerScoreHigh += parseInt(card.value);
            playerScoreLow += parseInt(card.value);
        }
    })

    if(playerScoreHigh <= 21){
        playerStatus.textContent = `You have ${playerScoreHigh}. Hit or Stand?`;
    } else{
        playerStatus.textContent = `You have ${playerScoreLow}. Hit or Stand?`;
    }
}

const calculateDealerScore = () => {
    computerScoreHigh = 0;
    computerScoreLow = 0;

    dealersHand.forEach((card) => {
        if(card.value === "A"){
            computerScoreHigh += 11;
            computerScoreLow += 1;
        } else if(card.value === "J" || card.value === "Q"|| card.value === "K"){
            computerScoreHigh += 10;
            computerScoreLow += 10;
        } else{
            computerScoreHigh += parseInt(card.value);
            computerScoreLow += parseInt(card.value);
        }
    })
}


const newGame = () => {
    // check bet amount has been entered and is less than money available
    if(money === 0){
        playerStatus.textContent = "You don't have any money left. When the fun stops. Stop.";
        return;
    } else if(betAmount.value === ""){
        playerStatus.textContent = "Please enter your bet.";
        return;
    } else if(betAmount.value > money){
        playerStatus.textContent = "You don't have enough money. Please make a lower bet.";
        return;
    }
    betAmount.disabled = true;
    newGameButton.disabled = true;
    hitButton.disabled = false;
    standButton.disabled = false;
    // removes deck and creates anew deck of cards and shuffles them
    deck = [];
    dealersHand = [];
    playersHand = [];
    dealer.innerHTML = '';
    player.innerHTML = '';

    makeCards();
    shuffle(deck);

    for (let i = 0; i < 4; i++) {
        if(i%2 === 0){
            playersHand.push(deck.shift());
            renderCards("player");
        } else if(i === 3){
            dealersHand.push(deck.shift());
            renderCards("hiddenDealer");
        } else {
            dealersHand.push(deck.shift());
            renderCards("dealer");
        }
    }
    // renderCards();
    calculatePlayerScore();
}

const hit = () => {
    // add and render card to player array
    playersHand.push(deck.shift());
    renderCards("player");
    calculatePlayerScore();

    // check if player score is over 21
    if(playerScoreLow > 21){
        stand();
    }
}

const stand = () => {
    hitButton.disabled = true;
    standButton.disabled = true;

    // show the hidden dealers card
    let DealerCards = document.getElementsByClassName('back');
    for (let i = 0; i < DealerCards.length; i++) {
        if(DealerCards[i].className == "back"){
            DealerCards[i].classList.add("hidden");
        }
    }

    calculateDealerScore();

    if(playerScoreLow < 21 && computerScoreHigh != 21){
        while (computerScoreHigh <= 16 || computerScoreLow <= 16) {
            if(computerScoreHigh === 21){
                break;
            }
            dealersHand.push(deck.shift());
            renderCards("dealer");
            calculateDealerScore();
        }
    }

    let finalComputerScore = 0;
    let finalPlayerScore = 0;

    if(computerScoreHigh <= 21){
        finalComputerScore = computerScoreHigh;
    } else {
        finalComputerScore = computerScoreLow;
    }

    if(playerScoreHigh <= 21){
        finalPlayerScore = playerScoreHigh;
    } else {
        finalPlayerScore = playerScoreLow;
    }

    // compare scores and find winner
    if(finalComputerScore == 21){
        money -= parseInt(betAmount.value);
        playerStatus.textContent = `You Lose. You have ${finalPlayerScore}. Dealer has ${finalComputerScore}`;
    } else if(finalPlayerScore > 21){
        money -= parseInt(betAmount.value);
        playerStatus.textContent = `You Lose. You have gone over 21`;
    } else if(finalComputerScore > 21 && finalPlayerScore <= 21){
        money += parseInt(betAmount.value);
        playerStatus.textContent = `You Win. Dealer has gone over 21`;
    } else if(finalPlayerScore > finalComputerScore){
        money += parseInt(betAmount.value);
        playerStatus.textContent = `You Win. You have ${finalPlayerScore}. Dealer has ${finalComputerScore}`;
    } else{
        money -= parseInt(betAmount.value);
        playerStatus.textContent = `You Lose. You have ${finalPlayerScore}. Dealer has ${finalComputerScore}`;
    }

    newGameButton.disabled = false;
    betAmount.disabled = false;
    moneyDisplay.textContent = money;
}