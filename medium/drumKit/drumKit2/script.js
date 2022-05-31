// SONUDS
let boom = document.getElementById("boom");
let clap = document.getElementById("clap");
let hihat = document.getElementById("hihat");
let kick = document.getElementById("kick");
let openhat = document.getElementById("openhat");
let ride = document.getElementById("ride");
let snare = document.getElementById("snare");
let tink = document.getElementById("tink");
let tom = document.getElementById("tom");

// ANIMATIONS
let main = document.getElementById("main");
let tomDrum = document.getElementById("tomDrum");
let snareDrum = document.getElementById("snareDrum");
let mainCymbal = document.getElementById("mainCymbal");
let openhatCymbal = document.getElementById("hihatCymbal");
let hihatCymbal = document.getElementById("hihatCymbalContainer");

document.addEventListener('keypress', (keyValue) => {
    if (keyValue.keyCode == 97) {
        main.style.animation = "mainDrum 0.1s linear"
        setTimeout(() => {
            main.style.removeProperty('animation')
        }, 100)
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if (keyValue.keyCode == 115) {
        clap.pause()
        clap.currentTime = 0
        clap.play();
    } else if (keyValue.keyCode == 100) {
        hihatCymbal.style.animation = "hihatCymbal 0.1s linear"
        setTimeout(() => {
            hihatCymbal.style.removeProperty('animation')
        }, 100)
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
    } else if (keyValue.keyCode == 102) {
        main.style.animation = "mainDrum 0.1s linear"
        setTimeout(() => {
            main.style.removeProperty('animation')
        }, 100)
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if (keyValue.keyCode == 103) {
        openhatCymbal.style.animation = "openHihat 0.1s linear"
        setTimeout(() => {
            openhatCymbal.style.removeProperty('animation')
        }, 100)
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
    } else if (keyValue.keyCode == 104) {
        mainCymbal.style.animation = "mainCymbal 0.1s linear"
        setTimeout(() => {
            mainCymbal.style.removeProperty('animation')
        }, 100)
        ride.pause()
        ride.currentTime = 0
        ride.play();
    } else if (keyValue.keyCode == 106) {
        snareDrum.style.animation = "snareDrum 0.1s linear"
        setTimeout(() => {
            snareDrum.style.removeProperty('animation')
        }, 100)
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if (keyValue.keyCode == 107) {
        tink.pause()
        tink.currentTime = 0
        tink.play();
    } else if (keyValue.keyCode == 108) {
        tomDrum.style.animation = "tomDrum 0.25s linear"
        setTimeout(() => {
            tomDrum.style.removeProperty('animation')
        }, 250)
        tom.pause()
        tom.currentTime = 0
        tom.play();
    }
  })

let count = 0

main.addEventListener("click", () => {
    count++
if(count%2 == 0){
    main.style.animation = "mainDrum 0.1s linear"
    setTimeout(() => {
        main.style.removeProperty('animation')
    }, 100)
    boom.pause()
    boom.currentTime = 0
    boom.play();
} else{
    main.style.animation = "mainDrum 0.1s linear"
        setTimeout(() => {
            main.style.removeProperty('animation')
        }, 100)
        kick.pause()
        kick.currentTime = 0
        kick.play();
}
})

tomDrum.addEventListener("click", () => {
    tomDrum.style.animation = "tomDrum 0.25s linear"
        setTimeout(() => {
            tomDrum.style.removeProperty('animation')
        }, 250)
        tom.pause()
        tom.currentTime = 0
        tom.play();
})

document.getElementsByClassName("hihatContainer")[0].addEventListener("click", () => {
    count++
if(count%5 == 0){
    openhatCymbal.style.animation = "openHihat 0.1s linear"
        setTimeout(() => {
            openhatCymbal.style.removeProperty('animation')
        }, 100)
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
} else{
    hihatCymbal.style.animation = "hihatCymbal 0.1s linear"
        setTimeout(() => {
            hihatCymbal.style.removeProperty('animation')
        }, 100)
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
}
})

document.getElementsByClassName("snareContainer")[0].addEventListener("click", () => {
    snareDrum.style.animation = "snareDrum 0.1s linear"
        setTimeout(() => {
            snareDrum.style.removeProperty('animation')
        }, 100)
        snare.pause()
        snare.currentTime = 0
        snare.play();
})

document.getElementsByClassName("cymbalContainer")[0].addEventListener("click", () => {
    mainCymbal.style.animation = "mainCymbal 0.1s linear"
        setTimeout(() => {
            mainCymbal.style.removeProperty('animation')
        }, 100)
        ride.pause()
        ride.currentTime = 0
        ride.play();
})