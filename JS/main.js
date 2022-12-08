const searchbarInput = document.querySelector(".searchBar-input");

searchfunc();

function searchfunc() {
    const searchbarBtn = document.querySelector(".searchbarBtn");
    const kindBtn = document.querySelectorAll("[data-kind]");
    let keyword;

    searchbarBtn.addEventListener("click", searchKeyWord);
    searchbarInput.addEventListener("keyup", e => {
        e.addEventListener("")
        if (e.key === "Enter") { searchKeyWord(e) };
    });
    kindBtn.forEach(i => {
        i.addEventListener("click", searchKind);
    })
}

function searchKeyWord(e) {
    e.preventDefault();

    if (searchbarInput.value.trim() !== "") {
        keyword = searchbarInput.value.trim();
    } else {
        alert("你沒有說要喝什麼捏～");
    }

    window.location.assign(`./search.html?word=${keyword}`);
}

function searchKind(e) {
    e.preventDefault();

    if (e.target.nodeName === "A") {
        keyword = e.target.dataset.kind;
    }

    window.location.assign(`./search.html?kind=${keyword}`);
}