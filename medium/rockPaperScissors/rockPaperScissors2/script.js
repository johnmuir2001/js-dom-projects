let choices = ['rock', 'paper', 'scissors']

// win conditions - true means player won and computer lost
let conditions = {
    rock: {
        rock: 'draw',
        paper: false,
        scissors: true
    },
    paper: {
        rock: true,
        paper: 'draw',
        scissors: false
    },
    scissors: {
        rock: false,
        paper: true,
        scissors: 'draw'
    }
}

let playerScore = 0
let computerScore = 0
let ties = 0

function play(playerChoice){
    let computerChoice = choices[Math.floor(Math.random() * 3)]; // generates computers choice
    
    document.getElementById('playerImage').classList.add("handLeftAnimation");
    document.getElementById('computerImage').classList.add("handRightAnimation"); // adds the animation classes to the images

    setTimeout(() => {
        document.getElementById('playerImage').src = `./images/${playerChoice}Hand.png`
        document.getElementById('computerImage').src = `./images/${computerChoice}Hand.png`
        document.getElementById('playerImage').classList.remove("handLeftAnimation");
        document.getElementById('computerImage').classList.remove("handRightAnimation");

        // finds out who wins
        if(conditions[playerChoice][computerChoice] === 'draw'){
            ties++
            document.getElementById('ties').textContent = ties
            document.getElementById('outcome').textContent = "It's a Draw"
        } else if (conditions[playerChoice][computerChoice]){
            playerScore++
            document.getElementById('playerScore').textContent = playerScore
            document.getElementById('outcome').textContent = 'You Won'
        } else {
            computerScore++
            document.getElementById('computerScore').textContent = computerScore
            document.getElementById('outcome').textContent = 'You Lost'
        }
        document.getElementById('rounds').textContent = computerScore + playerScore + ties

    }, 250); // after 0.25 seconds it removes the animation classes and changes the images as well as updates the scores
}