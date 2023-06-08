let topText = document.getElementById("heading")
let keyValue = document.getElementById("keyValue")
let keyCode = document.getElementById("keyCode")
let charCode = document.getElementById("charCode")
let key = document.getElementById("key")

document.addEventListener("keypress", (event) => {
    topText.textContent = event.keyCode;
    keyValue.textContent = event.key;
    keyCode.textContent = event.code;
    charCode.textContent = event.charCode;
})