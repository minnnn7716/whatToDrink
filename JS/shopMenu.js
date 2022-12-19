const url = location.href;
let keyword = decodeURIComponent(url.split("=")[1].split("&")[0]);

let shopsData;
let singleShopsData;
let shopId;
let commentData;
let shopRate = 0;
let drinksData;
let drinkMenu = {};

getShops();

function getShops() {
    const apiPath = "shops";
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            shopsData = response.data;
            getShopId();
            getComments();
            getDrinkData();
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
    if (!commentData.length) {
        shopRate = 0;
    } else {
        commentData.forEach(item => {
            shopRate += + item.rate;
        });
        shopRate = (shopRate / commentData.length).toFixed(1);
    }
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

function getDrinkData() {
    const apiPath = `shops/${shopId}/drinks`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            drinksData = response.data;
            setDrinkDate();
            renderMenu();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function setDrinkDate() {
    drinksData.forEach(item => {
        if (drinkMenu[item.menuType] === undefined) {
            drinkMenu[item.menuType] = [];
        }

        if (item.menuType === "純茶") {
            drinkMenu[item.menuType].push(item.id);
        } else if (item.menuType === "特調") {
            drinkMenu[item.menuType].push(item.id);
        } else if (item.menuType === "奶 / 鮮奶茶") {
            drinkMenu[item.menuType].push(item.id);
        }
    })
}

function renderMenu() {
    const menuSection = document.querySelector(".menu-kind-section");
    let str = "";
    let count = 0;

    for (const [menuKey, menuValue] of Object.entries(drinkMenu)) {
        let item = renderMenuItem(menuKey);
        
        str += `
        <div class="menu-kind col-5">
            <h3 class="menu-kind-title">${menuKey}</h3>
            <table class="full-container">${item}</table>
        </div>
        `

        count++
    };

    if(count % 2){
        str += `<div class="menu-kind col-5"></div>`;
    }

    menuSection.innerHTML = str;
}

function renderMenuItem(type){
    let str = "";
    const favoriteList = localStorage.getItem("favorite");

    for (const [key, value] of Object.entries(drinkMenu)) {
        if(key === type){
            drinksData.forEach(item => {
                let specialStr = "";
                let favoriteStr = "";

                if(value.indexOf(item.id) !== -1){

                    if (item.special.length) {
                        item.special.forEach(each => {
                            if (each === "僅限冷飲") {
                                specialStr += `<i class="fa-regular fa-snowflake"></i>`;
                            } else if (each === "店家推薦") {
                                specialStr += `<i class="fa-solid fa-thumbs-up"></i>`;
                            } else if (each === "無咖啡因") {
                                specialStr += `<img class="fa-noCaffeing" src="./IMAGES/noCaffeine.svg" alt="無咖啡因">`
                            }
                        });
                    }

                    if(localUserToken && favoriteList){
                        if (favoriteList.includes(item.id)) {
                            favoriteStr = `
                            <a href="#" class="heartBtn funcBtn-hover heartFuncBtn active" data-favorite="add" data-id="${item.id}">
                              <i class="fa-regular fa-heart funcBtn-outline pointer-none"></i>
                              <i class="fa-sharp fa-solid fa-heart funcBtn-solid pointer-none"></i>
                            </a>`;
                        } else {
                            favoriteStr = `
                            <a href="#" class="heartBtn funcBtn-hover heartFuncBtn" data-favorite="none" data-id="${item.id}">
                              <i class="fa-regular fa-heart funcBtn-outline pointer-none"></i>
                              <i class="fa-sharp fa-solid fa-heart funcBtn-solid pointer-none"></i>
                            </a>`;
                        }
                    }else{
                        favoriteStr = `
                            <a href="#" class="heartBtn funcBtn-hover heartFuncBtn" data-favorite="none" data-id="${item.id}">
                              <i class="fa-regular fa-heart funcBtn-outline pointer-none"></i>
                              <i class="fa-sharp fa-solid fa-heart funcBtn-solid pointer-none"></i>
                            </a>`;
                    }

                    str += `
                    <tr>
                        <td class="menu-kind-name">
                            <a href="./drink.html?id=${item.id}" class="menu-kind-link">${item.name}</a>
                        </td>
                        <td class="menu-kind-rate">
                            <div class="rateSection flex-row-reverse">
                            <p class="score">${item.rate}</p>
                            <div class="starSection mr-1">
                                <span class="star"></span>
                            </div>
                            </div>
                        </td>
                        <td class="menu-kind-special"><div class="flex pl-1 pt-1">${specialStr}</div></td>
                        <td class="menu-kind-price">M $ ${item.price.m} ｜ L $ ${item.price.m}</td>
                        <td class="menu-kind-favorite">${favoriteStr}</td>
                    </tr>
                    `;   
                }
            })
        }
    }

    return str;
}