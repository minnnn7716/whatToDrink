/*

- innerNavbar()
  寫入 navbar
  判斷非 index 寫入 navbar-show 有白底的樣式，
  且將 body 加入 pushSpace 的 class 將被遮蓋的區域推出

- scrollChangeNavbar()
  在 index，滾動到指定位置將 navbar 改為 navbar-show

- innerFooter()
  寫入 footer

*/

let navbarSection = document.querySelector("#navbarSection");
let footer = document.querySelector("#footerSecrion");
let pageName = document.querySelector("body").getAttribute("id");

function innerNavbar() {
    let navbarStatus = "";

    if (pageName === "index") {
        navbarStatus = `navbar navbar-hide`;
    } else {
        navbarStatus = `navbar navbar-show`;
        document.querySelector("body").classList.add("pushSpace")
    }

    let content = `
    <div id="navbar" class="${navbarStatus}">
    <a class="logo"  href="./index.html">
        <h1 class="logo-text">What <br> to Drink</h1>
    </a>
    <ul class="navbar-link">
        <li><a href="./shops_all.html" class="btn">全部店家</a>
        <li><a href="./index.html#inedx-shops" class="btn">四大類類</a>
        <li><a href="./wheel.html" class="btn">轉吧轉吧</a>
    </ul>
    <ul class="navbar-funcBtn">
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
    navbarSection.innerHTML = content;

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
    if (pageName === "index") {
        let navbar = document.querySelector("#navbar");

        window.addEventListener("scroll", e => {
            if (window.scrollY > 450) {
                navbar.classList.remove("navbar-hide");
                navbar.classList.add("navbar-show");
            } else {
                navbar.classList.remove("navbar-show");
                navbar.classList.add("navbar-hide");
            }
        })
    }
}

innerNavbar();
innerFooter();
scrollChangeNavbar()