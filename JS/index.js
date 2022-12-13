kindCilck();

function kindCilck() {
    const kindBtn = document.querySelectorAll("[data-kind]");

    kindBtn.forEach(i => {
        i.addEventListener("click", searchKind);
    })
}

function searchKind(e) {
    e.preventDefault();

    if (e.target.nodeName === "A") {
        keyword = e.target.dataset.kind;
    }

    window.location.assign(`./search.html?kind=${keyword}`);
    localStorage.setItem("listType", "table");
}