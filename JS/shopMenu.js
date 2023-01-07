const url = location.href;
let keyword = decodeURIComponent(url.split("=")[1].split("&")[0]);

let shopsData;
let singleShopsData;
let singleShopsCommentsData;
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
        <p class="rate-num">${singleShopsCommentsData.length} 則評論</p>
    </a>
    </div>
    `;

    headerImg.style.background = `${singleShopsData.background}`
    headerInfor.innerHTML = inforStr;
    headerImg.innerHTML = imgStr;
    popupEvent();
}

function popupEvent() {
    const shopRateSection = document.querySelector(".menu-title-rate");
    const popupBG = document.querySelector(".popupBG");

    shopRateSection.addEventListener("click", e => {
        e.preventDefault();

        popupBG.style.display = "block";

        renderPopupRate();
        renderPopupComment();
    })

    popupBG.addEventListener("click", e => {
        e.preventDefault();

        if (e.target.dataset.func === "close") {
            popupBG.style.display = "none";
        }
    })
}

function getComments() {
    const apiPath = `comments?_expand=drink&_expand=user`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            commentData = response.data;
            singleShopsCommentsData = commentData.filter(item => item.drink.shopId == shopId)
            getShopRate();
            renderHeader();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getShopRate() {
    if (!singleShopsCommentsData.length) {
        shopRate = 0;
    } else {
        singleShopsCommentsData.forEach(item => {
            shopRate += + item.rate;
        });
        shopRate = (shopRate / singleShopsCommentsData.length).toFixed(1);
    }
}

function renderPopupRate() {
    const popSideTitle = document.querySelector("#popSideTitle");
    const scoreSection = document.querySelector(".scoreSection");

    popSideTitle.textContent = singleShopsData.name;

    let totalStr = `
    <h2 class="num">${shopRate}</h2>
    <div class="starSection mb-1">${renderStar(shopRate)}</div>
    <p class="rateNum">${singleShopsCommentsData.length} 則評論</p>`;

    scoreSection.innerHTML = totalStr;
}

function renderPopupComment() {
    const popMessage = document.querySelector(".menu-messageSection");
    let str = "";

    singleShopsCommentsData.forEach(item => {
        str += `
        <div class="message-hasPhoto row">
            <div class="photoGroup col-4">
                <div class="row">
                    <div class="photoGroup-photo col-7">
                        <img src="${item.drink.photoUrl}" alt="飲料實拍照">
                    </div>
                    <div class="photoGroup-text col-5">
                        <div class="photoGroup-text-title">
                            <h4 class="title">${item.drink.name}</h4>
                            <div class="rateSection flex-row-reverse justify-end">
                                <p class="score">${item.drink.rate}</p>
                                <div class="starSection mb-half-1 mr-1">
                                    <span class="star"></span>
                                </div>
                            </div>
                        </div>
                        <div class="photoGroup-text-footer">
                            <p><span class="size">M</span><span>$ ${item.drink.price.m}</span></p>
                            <p><span class="size">L</span><span>$ ${item.drink.price.l}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="message col-8 ml-4 mt-3 mr-half-3 flex-stretch">
                <img class="message-photo userPhoto-circle"
                    src="./IMAGES/userPhoto_hambuger.webp" alt="使用者頭像">
                <div class="message-header flex justify-between">
                    <div class="message-title mb-3">
                        <h6 class="message-name mb-half-1">${item.user.name}</h6>
                        <p class="message-allNum">${item.user.comments.length} 則評論</p>
                    </div>
                    <div class="message-rate">
                        <div class="starSection mb-half-1">${renderStar(item.rate)}</div>
                        <p class="message-infor">${item.sugar} / ${item.ice}</p>
                        <p class="message-date">6 週前</p>
                    </div>
                </div>
                <div class="message-content">
                    <p class="flex-stretch">${item.content}</p>
                    <a href="#" class="message-likeThis">
                        <i class="fa-regular fa-thumbs-up"></i>
                        <span class="likeThis-num">10</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="message-divider"></div>
    `;
    })

    popMessage.innerHTML = str;
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
            setDrinkDate(drinksData);
            renderMenu();
            renderfilterBtn();
            filterMenu();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function setDrinkDate(data) {
    let menuTypeAry = [];
    drinkMenu = {};

    data.forEach(item => {
        if (drinkMenu[item.menuType] === undefined) {
            drinkMenu[item.menuType] = [];
            menuTypeAry.push(item.menuType);
        }

        menuTypeAry.forEach(typeItem => {
            if (item.menuType === typeItem) {
                drinkMenu[item.menuType].push(item.id);
            }
        })
    })

    console.log(data)
    console.log(menuTypeAry)
    console.log(drinkMenu)
}

function renderfilterBtn() {
    const filterBtnSection = document.querySelector(".menu-content-filter");
    let ary = ["全部飲品"];
    let str = "";

    drinksData.forEach(item => {
        if (ary.indexOf(item.type) === -1) {
            ary.push(item.type);
        }
    })

    ary.forEach((item, index) => {
        if (index === 0) {
            str += `<li><a href="#" class="menu-content-filterBtn active">${item}</a></li>`
        } else {
            str += `<li><a href="#" class="menu-content-filterBtn">${item}</a></li>`
        }
    })

    filterBtnSection.innerHTML = str;
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

    if (count % 2) {
        str += `<div class="menu-kind col-5"></div>`;
    }

    menuSection.innerHTML = str;
}

function renderMenuItem(type) {
    let str = "";
    const favoriteList = localStorage.getItem("favorite");

    for (const [key, value] of Object.entries(drinkMenu)) {
        if (key === type) {
            drinksData.forEach(item => {
                let specialStr = "";
                let favoriteStr = "";

                if (value.indexOf(item.id) !== -1) {

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

                    if (localUserToken && favoriteList) {
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
                    } else {
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

function filterMenu(data) {
    const filterBtnSection = document.querySelector(".menu-content-filter");
    const filterBtn = document.querySelectorAll(".menu-content-filter li a");
    let btnTitle;

    filterBtnSection.addEventListener("click", e => {
        e.preventDefault();
        if (e.target.nodeName === "A") {
            filterBtn.forEach(item => {
                item.classList.remove("active");
            })

            e.target.classList.add("active");
            btnTitle = e.target.textContent;

            if (btnTitle === "全部飲品") {
                setDrinkDate(drinksData);
                renderMenu();
            } else {
                let filterMenuData = drinksData.filter(item => item.type === btnTitle);
                setDrinkDate(filterMenuData);
                renderMenu();
            }
        }
    })
}