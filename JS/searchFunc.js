const searchbarInput = document.querySelector(".searchBar-input");

searchfunc();

function searchfunc() {
    const searchbarBtn = document.querySelector(".searchbarBtn");

    searchbarBtn.addEventListener("click", searchKeyword);

    searchbarInput.addEventListener("keydown", e => {
        if (e.key === "Enter") { searchKeyword(e) }
    })
}

function searchKeyword(e) {
    e.preventDefault();
    let keyword;
    let inputKind = document.querySelector(".switch-active").dataset.input;

    if (searchbarInput.value.trim() !== "") {
        keyword = searchbarInput.value.trim();
        window.location.assign(`./search.html?${inputKind}=${keyword}`);
    } else {
        alert("你沒有說要喝什麼捏～");
    }
}