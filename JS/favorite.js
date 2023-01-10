let drinksData;
let favoriteList;

getDrink();

function getDrink() {
    const apiPath = `drinks?_expand=shop`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            drinksData = response.data;
            getUserFavotiteList();
            filterType();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function renderData(data) {
    const favoriteTbody = document.querySelector(".favoriteTbody");
    const favoriteTable = document.querySelector(".searchList-table");
    let str = "";

    if (!favoriteList.length) {
        str = `<p class="noDrink">尚無收藏的飲料！🥺</p>`;
        favoriteTable.innerHTML = str;
    } else {
        data.forEach(item => {
            if (favoriteList.indexOf(`${item.id}`) != -1) {
                let specialStr = "";

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

                let rateStr = renderStar(item.rate);

                str += `
                <tr class="itemSection">  
                <td class="table-name"><a href="./drink.html?id=${item.id}">${item.name}</a></td>
                <td class="table-shop"><a href="./shops_menu.html?name=${item.shop.name}">${item.shop.name}</a></td>
                <td>M $ ${item.price.m} ｜ L $ ${item.price.l}</td>
                <td>
                    <div class="rateSection">
                    <p class="score">${item.rate}</p>
                    <div class="starSection">${rateStr}</div>
                    </div>
                </td>
                <td>M ${item.calorie.m} 大卡 ｜ L ${item.calorie.l} 大卡</td>
                <td class="table-special">${specialStr}</td>
                <td class="favoriteSection">
                <a href="#" class="heartBtn funcBtn-hover heartFuncBtn active" data-favorite="add" data-id="${item.id}">
                    <i class="fa-regular fa-heart funcBtn-outline pointer-none"></i>
                    <i class="fa-sharp fa-solid fa-heart funcBtn-solid pointer-none"></i>
                </a>
                </td>
                </tr>
                `;
            }
        })
        favoriteTbody.innerHTML = str;
        clickFavotite();
    }
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

function getUserFavotiteList() {
    const apiPath = `users/${localUserId}/`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            favoriteList = response.data.favorites;
            renderData(drinksData);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function clickFavotite() {
    const heartFuncBtn = document.querySelectorAll(".heartFuncBtn");
    let drinkId;

    heartFuncBtn.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            console.log(e.target)

            if (!localUserToken) {
                alert("請先登入");
                let href = location.href;
                localStorage.setItem("loginStatus", "back");
                localStorage.setItem("backHref", href);
                location.href = "./login.html";
            } else {
                if (item.dataset.favorite === "none") {
                    alert("加入收藏");
                    item.dataset.favorite = "add";
                    item.classList.add("active");
                    drinkId = item.dataset.id;
                    favoriteList.push(drinkId);
                    localStorage.setItem("favorite", favoriteList);
                    patchFavotite();
                } else if (item.dataset.favorite === "add") {
                    alert("移除收藏");
                    item.dataset.favorite = "none";
                    item.classList.remove("active");
                    drinkId = item.dataset.id;

                    let index = favoriteList.indexOf(drinkId);
                    favoriteList.splice(index, 1);
                    localStorage.setItem("favorite", favoriteList)
                    patchFavotite();
                    renderData(drinksData);
                }
            }
        })
    })
}

function patchFavotite() {
    const apiPath = `600/users/${localUserId}`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.patch(apiUrl, {
        "favorites": favoriteList
    }, token)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function filterType() {
    const filterSection = document.querySelector(".menu-content-filter");
    const filterBtn = document.querySelectorAll(".menu-content-filter a");
    let filterData;
    let type;

    filterSection.addEventListener("click", e => {
        e.preventDefault();

        filterBtn.forEach(item => {
            item.classList.remove("active");
            e.target.classList.add("active");
            type = e.target.textContent;
        })

        if (type === "全部飲品") {
            renderData(drinksData);
        } else {
            filterData = drinksData.filter(item => item.type === type);
            renderData(filterData);
        }
    })
}