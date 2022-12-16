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
        })
        .catch(function (error) {
            console.log(error);
        });
}

function renderData() {
    const favoriteTbody = document.querySelector(".favoriteTbody");
    let str = "";
    let starStr;
    let specialStr = "";
    let favoriteStr;

    drinksData.forEach(item => {
        if (favoriteList.indexOf(item.id)) {
            starStr = renderStar(item.rate);

            if (item.special.length) {
                item.special.forEach(each => {
                    if (each === "僅限冷飲") {
                        specialStr += `<i class="fa-regular fa-snowflake"></i>`;
                    } else if (each === "店家推薦") {
                        specialStr += `<i class="fa-solid fa-thumbs-up"></i>`;
                    }
                });
            }

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

            str += `
            <tr class="itemSection">
                <td class="table-name">${item.name}</td>
                <td class="table-shop">${item.shop.name}</td>
                <td>M $ ${item.price.m} ｜ L $ ${item.price.l}</td>
                <td>
                    <div class="rateSection">
                    <p class="score">${item.rate}</p>
                    <div class="starSection">${starStr}</div>
                    </div>
                </td>
                <td>M ${item.calorie.m} 大卡 ｜ L ${item.calorie.l} 大卡</td>
                <td class="table-special">${specialStr}</td>
                <td>${favoriteStr}</td>
            </tr>
            `
        }
    })

    favoriteTbody.innerHTML = str;
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
            favoriteList = response.data.favorite;
            renderData(favoriteList);
            clickFavotite();
        })
        .catch(function (error) {
            console.log(error);
        });
}