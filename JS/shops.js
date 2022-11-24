const shopsList = document.querySelectorAll("[data-title]");

for (let i = 0; i < shopsList.length; i++) {
    shopsList[i].addEventListener("mouseenter", addHover);
    shopsList[i].addEventListener("mouseleave", removeHover);
}

function addHover(e) {
    for (let i = 0; i < shopsList.length; i++) {
        shopsList[i].classList.add("nonHover");

    }
    e.target.classList.remove("nonHover");
    e.target.classList.add("hover");
}

function removeHover() {
    for (let i = 0; i < shopsList.length; i++) {
        shopsList[i].classList.remove("hover");
        shopsList[i].classList.remove("nonHover");
    }
}