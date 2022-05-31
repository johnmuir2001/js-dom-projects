let dice1 = document.getElementById("dice");

let score1 = document.getElementById("score");
let count1 = document.getElementById("count");
let win1 = document.getElementById("win");

let player1 = document.getElementsByClassName("player")[0];
let button = document.getElementById("button");

let score = 0;
let count = 0;
let win = 0;

button.addEventListener("click", () => {
    let num = Math.ceil(Math.random()*6);
    count++;
    count1.textContent = count;

    // add score or set to 0 if 1 is roled
    (num === 1) ? score = 0 : score += num;
    score1.textContent = score

    // animate 3d dice
    if(num === 1){
        dice1.style.transform = "translateZ(-100px) rotateY(0deg)"
    } else if(num === 2){
        dice1.style.transform = "translateZ(-100px) rotateY(90deg)"
    } else if(num === 3){
        dice1.style.transform = "translateZ(-100px) rotateX(-90deg)"
    } else if(num === 4){
        dice1.style.transform = "translateZ(-100px) rotateX(90deg)"
    } else if(num === 5){
        dice1.style.transform = "translateZ(-100px) rotateY(-90deg)"
    } else if(num === 6){
        dice1.style.transform = "translateZ(-100px) rotateY(-180deg)"
    }

    // check for win
    if(score >= 20){
        win++;
        win1.textContent = win;
        score1.textContent = "YOU WON";
        score = 0;
        count = 0;
    }
})