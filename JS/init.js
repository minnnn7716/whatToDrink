let navBarSection = document.querySelector("#navBarSection");
let footer = document.querySelector("#footerSecrion");
let pageName = document.querySelector("body").getAttribute("id");

function innerNavbar() {
    let navbarStatus = "";

    if (pageName === "index") {
        navbarStatus = `navBar navBar-hide`;
    } else {
        navbarStatus = `navBar navBar-show`;
    }

    let content = `
    <div id="navBar" class="${navbarStatus}">
    <a class="logo">
        <h1 class="logo-text">What <br> to Drink</h1>
    </a>
    <ul class="navBar-link">
        <li><a href="#" class="btn">全部店家</a>
        <li><a href="#" class="btn">四大類類</a>
        <li><a href="#" class="btn">轉吧轉吧</a>
    </ul>
    <ul class="navBar-funcBtn">
        <li>
            <a href="#" class="heartBtn funcBtn-hover">
                <i class="fa-regular fa-heart funcBtn-outline"></i>
                <i class="fa-sharp fa-solid fa-heart funcBtn-solid"></i>
            </a>
        </li>
        <li>
            <a href="#" class="bellBtn funcBtn-hover">
                <i class="fa-regular fa-bell funcBtn-outline"></i>
                <i class="fa-solid fa-bell funcBtn-solid"></i>
            </a>
        </li>
        <li>
            <a href="#" class="userBtn"><i class="fa-solid fa-circle-user"></i></a>
        </li>
    </ul>
    </div>
    `;
    navBarSection.innerHTML = content;
}

function innerFooter() {
    footer.innerHTML = `
    <div id="footer">
    <div class="footer-container">
        <a href="#" class="topBtn">TOP</a>
        <ul class="footer-list">
            <li><a href="#">首頁搜尋</a></li>
            <li><a href="#">全部店家</a></li>
            <li><a href="#">四大飲類</a></li>
            <li><a href="#">轉吧轉吧</a></li>
        </ul>
        <h2 class="logo-text">
            <a href="#">What <br> to Drink
        </h2></a>
        <p class="footer-infor">資料、圖片來源皆來自網路，僅用來做為學習用途</p>
    </div>
    </div>
    `;
}

function scrollChangeNavbar() {
    let navBar = document.querySelector("#navBar");

    window.addEventListener("scroll", e => {
        if (window.scrollY > 450) {
            navBar.classList.remove("navBar-hide");
            navBar.classList.add("navBar-show");
        } else {
            navBar.classList.remove("navBar-show");
            navBar.classList.add("navBar-hide");
        }
    })
}

innerNavbar();
innerFooter();
scrollChangeNavbar();