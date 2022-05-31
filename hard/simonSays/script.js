const startBtn = document.getElementById('start');
let simonOrder = [];
let click = 0;
let playable = false;

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    simon();
})

for (let i = 0; i < document.getElementsByClassName('button').length; i++) {
    document.getElementsByClassName('button')[i].disabled = true;
    document.getElementsByClassName('button')[i].style.cursor = 'default';
}

const simon = () => {
    playable = false;
    for (let i = 0; i < document.getElementsByClassName('button').length; i++) {
        document.getElementsByClassName('button')[i].disabled = true;
        document.getElementsByClassName('button')[i].style.cursor = 'default';
    }
    simonOrder.push(Math.floor(Math.random() * 4));
    document.getElementById('title').textContent = `Level ${simonOrder.length}`;

    simonOrder.forEach((color, index) => {
        setTimeout(() => {
            document.getElementsByClassName('button')[color].classList.add('active');
            setTimeout(() => {
                document.getElementsByClassName('button')[color].classList.remove('active');
            }, 200);
        }, (index + 1) * 600);
        
    })

    setTimeout(() => {
        playable = true
        for (let i = 0; i < document.getElementsByClassName('button').length; i++) {
            document.getElementsByClassName('button')[i].disabled = false;
            document.getElementsByClassName('button')[i].style.cursor = 'cursor';
        }
    }, simonOrder.length * 600);
}

const player = (index) => {
    if(playable){
        if(click <= 18){
            if(index != simonOrder[click]){
                alert('WRONG!');
                reset();
                return;
            } else if(click == (simonOrder.length - 1)){
                click = 0;
                simon();
                return;
            }
        } else {
            alert('YOU WIN');
        }
    }
    click++;
}

const reset = () => {
    document.getElementById('title').textContent = `Simon Says`;
    startBtn.disabled = false;
    click = 0;
    simonOrder = [];
    playable = false;

    for (let i = 0; i < document.getElementsByClassName('button').length; i++) {
        document.getElementsByClassName('button')[i].disabled = true;
    }
}