const url = location.href;
let keyword = decodeURIComponent(url.split("=")[1].split("&")[0]);

let shopsData;
let singleShopsData;
let shopId;
let commentData;
let shopRate = 0;

getShops();

function getShops() {
    const apiPath = "shops";
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            shopsData = response.data;
            getShopId();
            getComments();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getShopId() {
    singleShopsData = shopsData.filter(item => item.name === keyword)[0];
    shopId = singleShopsData.id;
}

function renderHeader() {
    const headerInfor = document.querySelector("#menuBanner");
    const headerImg = document.querySelector(".shops-menu-banner");

    let imgStr = `<img src="${singleShopsData.photoUrl}" alt="${singleShopsData.name}">`

    let inforStr = `
    <div class="menu-title col-12 flex justify-between">
    <h2 class="menu-title-text">${singleShopsData.name}</h2>
    <a href="#" class="menu-title-rate">
        <div class="rateSection">
        <p class="score mr-1">${shopRate}</p>
        <div class="starSection mb-1">
            ${renderStar(shopRate)}
        </div>
        </div>
        <p class="rate-num">${singleShopsData.rateNum} 則評論</p>
    </a>
    </div>
    `;

    headerImg.style.background = `${singleShopsData.background}`
    headerInfor.innerHTML = inforStr;
    headerImg.innerHTML = imgStr;
    popupEvent();
}

function renderMenu() {

}

function popupEvent() {
    const shopRateSection = document.querySelector(".menu-title-rate");
    const popupBG = document.querySelector(".popupBG");

    shopRateSection.addEventListener("click", e => {
        e.preventDefault();

        popupBG.style.display = "block";

        renderPopupRate();
    })

    popupBG.addEventListener("click", e => {
        e.preventDefault();

        if (e.target.dataset.func === "close") {
            popupBG.style.display = "none";
        }
    })
}

function getComments() {
    const apiPath = `shops/${shopId}/comments`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            commentData = response.data;
            getShopRate();
            renderHeader();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getShopRate() {
    commentData.forEach(item => {
        shopRate += + item.rate;
    });
    shopRate = (shopRate / commentData.length).toFixed(1);
}

function renderPopupRate() {
    const popSideTitle = document.querySelector("#popSideTitle");
    const scoreSection = document.querySelector(".scoreSection");

    popSideTitle.textContent = singleShopsData.name;

    let totalStr = `
    <h2 class="num">${shopRate}</h2>
    <div class="starSection mb-1">${renderStar(shopRate)}</div>
    <p class="rateNum">${singleShopsData.rateNum} 則評論</p>`;

    scoreSection.innerHTML = totalStr;
}

function renderPopupComment() {

}

function renderStar(rate) {
    let score = `${rate}`.split(".");
    let total = [];
    let l = total.length;

    while (total.length < 5) {
        if (score[0] > l) {
            total.push(`<span class="star"></span>`);
        } else if (score[0] == l && score[1] > 5) {
            total.push(`<span class="starHalf"></span>`);
        } else {
            total.push(`<span class="starEmpty"></span>`);
        }

        l++;
    }

    return total.join("");
}