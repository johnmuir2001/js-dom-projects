const heading = document.getElementById('heading');
const info = document.getElementById('info');

let isWaiting = false;
let playingGame = false;
let randTimer, startTime, endTime;

document.addEventListener("click", () => {
    if(!playingGame){
        // start the game and enter the waiting phase
        playingGame = true;
        isWaiting = true;
        document.body.style.backgroundColor = '#E80000';
        heading.textContent = 'Wait for green';
        info.textContent = '...';
        startGame()
    } else if(isWaiting && playingGame){
        // if the player clicks during the waiting phase
        document.body.style.backgroundColor = '#03bafc';
        heading.textContent = 'Too soon!';
        info.textContent = 'Click to try again.';
        clearTimeout(randTimer);
        isWaiting = false;
        playingGame = false;
    }

    // when the waiting phase is over and the player hasnt clciked yet
    if(!isWaiting && playingGame){
        endTime = new Date().getTime();
        document.body.style.backgroundColor = '#03bafc';
        heading.textContent = (endTime - startTime) + ' ms';
        info.textContent = 'Click to try again.';
        playingGame = false;
    }
})

const startGame = () => {
    randTimer = setTimeout(() => {
        isWaiting = false;
        startTime = new Date().getTime();
        document.body.style.backgroundColor = '#79CF19';
        heading.textContent = 'Click';
        info.textContent = '...';
    }, (Math.random() * 5000) + 500);
}