const buttons = document.querySelectorAll('.drum')

buttons.forEach((buttonType) => { //loops through all buttons with drum class
    buttonType.addEventListener('click', () => { //adds event listener to each button
        const drumAudio = document.querySelector(`audio[data-drumsound="${buttonType.dataset.drumsound}"]`) //gets that buttons audio
        playSound(drumAudio, buttonType)
    })
})

window.addEventListener('keypress', (e) => {
    const key = document.querySelector(`audio[data-key="${e.code}"]`);
    const button = document.querySelector(`button[data-key="${e.code}"]`);
    playSound(key, button)
})

const playSound = (input, correspondingButton) => {
    correspondingButton.classList.add('animation');
    setTimeout(() => {
        correspondingButton.classList.remove('animation');
    }, 100);
    input.pause()
    input.currentTime = 0
    input.play() // plays audio and allows for overlapped audio
}