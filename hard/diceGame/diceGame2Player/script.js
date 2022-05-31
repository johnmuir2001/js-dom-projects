const diceImage = document.getElementById('diceImage');
const rollButton = document.getElementById('rollDice');
const restartButton = document.getElementById('restart');
const holdButton = document.getElementById('holdScore');
const currentPlayer = document.getElementById('currentPlayer');

const playerSections = document.getElementsByClassName('gameStats');


const score = document.getElementById('score');
const curScore = document.getElementById('curScore');

const scoreP2 = document.getElementById('scorePlayer2');
const curScoreP2 = document.getElementById('curScorePlayer2');

let totalScore = 0;
let currentScore = 0;

let player1 = false;

let totalScoreP2 = 0;
let currentScoreP2 = 0;


const updateStats = () => {
    score.textContent = totalScore;
    curScore.textContent = currentScore;

    scoreP2.textContent = totalScoreP2;
    curScoreP2.textContent = currentScoreP2;
}

const switchPlayer = () => {
    player1 = !player1;
    if(player1) {
        playerSections[0].style.backgroundColor = '#a6e7ff';
        playerSections[1].style.backgroundColor = 'white';
        currentPlayer.textContent = "Player 1 to Roll";
    } else {
        playerSections[0].style.backgroundColor = 'white';
        playerSections[1].style.backgroundColor = '#a6e7ff';
        currentPlayer.textContent = "Player 2 to Roll";
    }
    currentScore = 0;
    currentScoreP2 = 0;
    updateStats();
}
switchPlayer();

const handleWinner = (winner) => {
    (winner === "player1") ? currentPlayer.textContent = "Player 1 WINS!" : currentPlayer.textContent = "Player 2 WINS!"
    currentScore = 0;
    currentScoreP2 = 0;
    updateStats();
    rollButton.disabled = true;
    holdButton.disabled = true;
} 

const handleHold = () => {
    if(player1){
        totalScore += currentScore
        if(totalScore >= 20){
            handleWinner("player1");
            return;
        }
    } else { 
        totalScoreP2 += currentScoreP2
        if(totalScoreP2 >= 20){
            handleWinner("player2");
            return;
        }
    }
    switchPlayer();
}


const rollDice = () => {
    let randomNumber = Math.ceil( Math.random() * 6);
    diceImage.src = `./images/dice${randomNumber}.png`;

    if(randomNumber === 1){
        switchPlayer();
        return;
    }

    player1 ? currentScore += randomNumber : currentScoreP2 += randomNumber
    updateStats();
}

const handleReset = () => {
    rollButton.disabled = false;
    holdButton.disabled = false;
    totalScore = 0;
    currentScore = 0;
    player1 = false;
    totalScoreP2 = 0;
    currentScoreP2 = 0;
    updateStats();
    switchPlayer();
}

rollButton.addEventListener('click', rollDice)
holdButton.addEventListener('click', handleHold)
restartButton.addEventListener('click', handleReset)