switchBar();

function switchBar() {
    const switchBar = document.querySelector("#switchBtn");
    const switchBtn = document.querySelectorAll("#switchBtn a");

    switchBar.addEventListener("click", e => {
        e.preventDefault();

        if (e.target.nodeName === "A") {
            switchBtn.forEach(item => {
                item.classList.remove("switch-active");
            })

            e.target.classList.add("switch-active");
        }
    })
}