const input = document.getElementById('guessInput');
const button = document.getElementById('submitButton');
const message = document.getElementById('message');
let randNumber = 0;
let guesses = 0;

const generateNumber = () => {
    randNumber = Math.ceil(Math.random() * 99);
}
generateNumber();

button.addEventListener('click', () => {
    if(input.value === ""){
        message.innerHTML = 'Please guess a number';
        return
    }
    guesses++
    if(parseInt(input.value) === randNumber){
        message.innerHTML = 'CONGRATULATIONS! You guessed the number in ' + guesses + ' tries. A new number has been generated.';
        generateNumber();
        guesses = 0;
    } else if (parseInt(input.value) > randNumber){
        message.innerHTML = 'Try a LOWER NUMBER.';
    } else if (parseInt(input.value) < randNumber) {
        message.innerHTML = 'Try a HIGHER NUMBER.';
    }
    
})