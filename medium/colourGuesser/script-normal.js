let boxes = document.querySelectorAll('.box')
let newColour = null;
let guessing = false;
let score = 0;

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        if(guessing){
            (e.target.style.backgroundColor === newColour) ? correct(e.target.style.backgroundColor) : e.target.style.opacity = 0;
        }
        
    })
});

const correct = (col) => {
    guessing = false;
    score++;
    document.getElementById('score').textContent = score;
    document.getElementById('isCorrect').textContent = 'Correct!';
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = col;
        boxes[i].style.opacity = 1;
    }
}

const resetGame = () => {
    guessing = true;
    document.getElementById('isCorrect').textContent = '';
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1},${Math.floor(Math.random() * 255) + 1})`;
        boxes[i].style.opacity = 1;
    }
    let item = boxes[Math.floor(Math.random() * boxes.length)]
    newColour = item.style.backgroundColor;
    document.getElementById('colorToGuess').innerHTML = newColour;
}

resetGame()