/*
【變數】
- pageType 抓取預設的頁面類型，以判定需不需在 nav 跟內容間先推出 spacing
- baseUrl 宣告 api 的根網址
- local 系列宣告使用者登入的資訊
- token 將 axios 需要的使用者憑證先行帶入

【函式】
- innerNavbar()
  寫入 navbar
  判斷非 index 寫入 navbar-show 有白底的樣式，
  且將 body 加入 pushSpace 的 class 將被遮蓋的區域推出

- scrollChangeNavbar()
  在 index，滾動到指定位置將 navbar 改為 navbar-show

- innerFooter()
  寫入 footer

- setlogStatus()
  內含 logoutAction() 為了可以監聽登出按鈕
  判斷登入狀態，更改 nav 上的姓名與按鈕

- logoutAction()
  內含 setlogStatus() 為了在登出時改變狀態
  監聽登出按鈕，點擊時跳出確認視窗，確認登出後清除 local 的資訊

- clickNavbtn()
  點擊「收藏列表」、「通知列表」按鈕時，判斷是否登入
  登入才能取得個人列表
*/

let pageType = document.querySelector("body").getAttribute("data-pageType");
const baseUrl = "https://what-to-drink-api-vercel.vercel.app/";
// const baseUrl = "http://localhost:3000/";
const localUserId = localStorage.getItem("id");
const localUserToken = localStorage.getItem("token");
const localUserName = localStorage.getItem("name");
const token = {
    headers: {
        "authorization": `Bearer ${localUserToken}`
    }
}

// ----------------------

innerNavbar();
innerFooter();
scrollChangeNavbar();
setlogStatus();
clickNavbtn();

// ----------------------

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
        <li><a href="./index.html#inedx-shops-anchor" class="btn">四大類類</a>
        <li><a href="./wheel.html" class="btn">轉吧轉吧</a>
    </ul>
    <ul class="navbar-funcBtn">
        <li>
            <a href="./favorite.html" class="heartBtn funcBtn-hover" data-nav="funcBtn" data-href="favorite">
                <i class="fa-regular fa-heart funcBtn-outline pointer-none"></i>
                <i class="fa-sharp fa-solid fa-heart funcBtn-solid pointer-none"></i>
            </a>
        </li>
        <li>
            <a href="#" class="bellBtn funcBtn-hover" data-nav="funcBtn" data-href="bell">
                <i class="fa-regular fa-bell funcBtn-outline pointer-none"></i>
                <i class="fa-solid fa-bell funcBtn-solid pointer-none"></i>
            </a>
        </li>
        <li class="logSection">
            <a href="./login.html" class="userBtn"><i class="fa-solid fa-circle-user"></i></a>
        </li>
    </ul>
    </div>
    `;
    navbarSection.innerHTML = content;

}

function innerFooter() {
    let footer = document.querySelector("#footerSecrion");

    if (footer.dataset.footer === "nonInfor") {
        footer.innerHTML = `
        <div id="footer">
            <div class="footer-container nonInfor"></div>
        </div>
        `;
    } else {
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

function setlogStatus() {
    const logSection = document.querySelector(".logSection");
    let localName = localStorage.getItem("name");

    if (localName) {
        logSection.innerHTML = `
        <li class="logSection flex align-center">
            <span>嗨，${localName}</span>
            <a href="./login.html" class="outBtn"><i class="fa-solid fa-person-through-window"></i></a>
        </li>
        `;

        logoutAction();
    } else {
        logSection.innerHTML = `
        <li class="logSection">
            <a href="./login.html" class="userBtn"><i class="fa-solid fa-circle-user"></i></a>
        </li>`;
    }
}

function logoutAction() {
    const outBtn = document.querySelector(".outBtn");

    outBtn.addEventListener("click", e => {
        e.preventDefault();

        const logout = confirm('確定要登出嗎？');

        if (logout) {
            localStorage.setItem("token", "");
            localStorage.setItem("name", "");
            localStorage.setItem("id", "");
            localStorage.setItem("favorite", "");

            setlogStatus();
            alert("登出成功！將轉跳回首頁");
            location.href = "./index.html"
        }

        setlogStatus();
    })
}

function clickNavbtn() {
    const navFuncBtn = document.querySelectorAll("[data-nav]");
    let hrefKeyword;
    let href;

    navFuncBtn.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            hrefKeyword = e.target.dataset.href;
            href = `./${hrefKeyword}.html`;

            if (!localUserToken) {
                alert("請先登入");

                localStorage.setItem("loginStatus", "back");
                localStorage.setItem("backHref", href);
                location.href = "./login.html";
            } else {
                location.href = href;
            }
        })
    })
}