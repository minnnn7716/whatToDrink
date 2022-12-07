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


let pageType = document.querySelector("body").getAttribute("data-pageType");
console.log(pageType)

function innerNavbar() {
    let navbarSection = document.querySelector("#navbarSection");
    let navbarStatus;
    let logoStatus;

    if (pageType === "index") {
        navbarStatus = `navbar navbar-hide`;
        logoStatus = `logo`;
    } else if (pageType === "noGutterPage") {
        navbarStatus = `navbar navbar-show`;
        logoStatus = `logo-outline`;
    } else if ((pageType === "normalPage")) {
        navbarStatus = `navbar navbar-show`;
        logoStatus = `logo-outline`;
        document.querySelector("body").classList.add("pushSpace");
    }

    let content = `
    <div id="navbar" class="${navbarStatus}">
    <a id="logo" class="${logoStatus}"  href="./index.html">
        <h1 class="logo-text">What <br> to Drink</h1>
    </a>
    <ul class="navbar-link">
        <li><a href="./shops_all.html" class="btn">全部店家</a>
        <li><a href="./index.html#inedx-shops" class="btn">四大類類</a>
        <li><a href="./wheel.html" class="btn">轉吧轉吧</a>
    </ul>
    <ul class="navbar-funcBtn">
        <li>
            <a href="./favorite.html" class="heartBtn funcBtn-hover">
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
    let footer = document.querySelector("#footerSecrion");

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
    if (pageType === "index") {
        let navbar = document.querySelector("#navbar");
        let logo = document.querySelector("#logo");

        window.addEventListener("scroll", e => {
            if (window.scrollY > 450) {
                navbar.classList.remove("navbar-hide");
                navbar.classList.add("navbar-show");
                logo.classList.remove("logo");
                logo.classList.add("logo-outline");
            } else {
                navbar.classList.remove("navbar-show");
                navbar.classList.add("navbar-hide");
                logo.classList.remove("logo-outline");
                logo.classList.add("logo");
            }
        })
    }
}


innerNavbar();
innerFooter();
scrollChangeNavbar();