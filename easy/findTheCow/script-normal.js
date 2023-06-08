const cow = document.getElementById("cow");
const message = document.getElementById("message");

const spawnCow = () => {
    let x = Math.round(Math.random() * (innerWidth - 70));
    let y = Math.round(Math.random() * (innerHeight - 80));
    cow.style.left = `${x}px`;
    cow.style.top = `${y}px`;
}

cow.addEventListener('mouseover', () => {
    message.textContent = "Catch the cow by clicking on him before he runs away.";
    setTimeout(() => {
        spawnCow();
    }, 150);
})
cow.addEventListener('click', () => {
    message.textContent = "You caught the cow";
})

spawnCow();