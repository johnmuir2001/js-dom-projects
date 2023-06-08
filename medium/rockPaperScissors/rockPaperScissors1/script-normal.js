const availableChoices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
const result = document.getElementById('result');

const play = (playerChoice) => {
    let computerChoice = availableChoices[Math.floor(Math.random() * 3)];

    document.getElementById('playerIcon').src = `./images/${playerChoice}Icon.png`;
    document.getElementById('computerIcon').src = `./images/${computerChoice}Icon.png`;
    
    switch (true) {
        case (playerChoice == 'rock' && computerChoice == 'scissors'):
        case (playerChoice == 'scissors' && computerChoice == 'paper'):
        case (playerChoice == 'paper' && computerChoice == 'rock'):
            playerScore++
            document.getElementById('playerScore').textContent = `You: ${playerScore}`;
            result.textContent = 'You Won';
            break;
        case (playerChoice == 'rock' && computerChoice == 'paper'):
        case (playerChoice == 'scissors' && computerChoice == 'rock'):
        case (playerChoice == 'paper' && computerChoice == 'scissors'):
            computerScore++
            document.getElementById('computerScore').textContent = `Computer: ${computerScore}`;
            result.textContent = 'You Lost';
            break;
        default:
            console.log('draw');
            result.textContent = 'Its a Draw';
            break;
    }
}