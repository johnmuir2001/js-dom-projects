let acc = document.getElementsByClassName("accordion");
let allPanels = document.getElementsByClassName("panel");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", (e) => { 
        if (e.target.nextElementSibling.style.height) {
            hidePanels();     
         } else {
            showPanel(e.target);
         } 
    });
}

const showPanel = (elem) => {
    hidePanels();
    elem.classList.add("active");
    elem.nextElementSibling.style.height = elem.nextElementSibling.scrollHeight + "px";
}

const hidePanels = () => {
    for (let i = 0; i < allPanels.length; i++) {
        allPanels[i].style.height = null;
        acc[i].classList.remove("active");
    }
  }