const apiPath = "drinks?_expand=shop";
const apiUrl = `${baseUrl}${apiPath}`;

const url = location.href;
let keyword = decodeURIComponent(url.split("=")[1].split("&")[0]);

let inforStatus = localStorage.getItem("listType");
const searchbarInput = document.querySelector(".searchBar-input");
let drinksData;
let newData;

getDrinks();
getInforType(inforStatus);
searchfunc();

// ------------------------

function searchfunc() {
    const searchbarBtn = document.querySelector(".searchbarBtn");

    searchbarBtn.addEventListener("click", searchKeyword);

    searchbarInput.addEventListener("keydown", e => {
        if (e.key === "Enter") { searchKeyword(e) };
    })
}

function searchKeyword(e) {
    e.preventDefault();

    if (searchbarInput.value.trim() !== "") {
        keyword = searchbarInput.value.trim();
        inforStatus = localStorage.getItem("listType");
        window.location.assign(`./search.html?drink=${keyword}`);
    } else {
        alert("你沒有說要喝什麼捏～");
    }
}

// ------------------------

function getDrinks() {
    axios.get(apiUrl)
        .then(function (response) {
            drinksData = response.data;
            filterInputData(drinksData, inforStatus);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function renderData(data, inforStatus) {
    const searchListTable = document.querySelector(".searchListTable");
    const searchListComapct = document.querySelector(".searchList-comapct");
    const searchResultText = document.querySelector(".searchResult-text");
    let listStr = "";

    if (inforStatus === "table") {
        data.forEach(item => {
            let specialStr = "";

            if (item.special.length) {
                item.special.forEach(each => {
                    if (each === "僅限冷飲") {
                        specialStr += `<i class="fa-regular fa-snowflake"></i>`;
                    } else if (each === "店家推薦") {
                        specialStr += `<i class="fa-solid fa-thumbs-up"></i>`;
                    }
                });
            }

            let rateStr = renderStar(item.rate);

            listStr += `
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
               <td>
                  <a href="#" class="heartBtn funcBtn-hover">
                    <i class="fa-regular fa-heart funcBtn-outline"></i>
                    <i class="fa-sharp fa-solid fa-heart funcBtn-solid"></i>
                  </a>
               </td>
            </tr>
            `;
        })

        searchListTable.innerHTML = listStr;
    } else if (inforStatus === "comapct") {
        data.forEach(item => {
            let specialStr = "";

            if (item.special.length) {
                item.special.forEach(each => {
                    if (each === "僅限冷飲") {
                        specialStr += `<span class="specialPoint-item specialPoint-recommend mr-half-1">${each}</span>`;
                    } else if (each === "店家推薦") {
                        specialStr += `<span class="specialPoint-item specialPoint-period">${each}</span>`;
                    }
                });
            }

            let rateStr = renderStar(item.rate);

            listStr += `
            <div class="product-img col-4 mb-8">
                <div class="imgSection">
                    <a href="./shops_menu.html?name=$${item.shop.name}">
                    <span class="shopName">${item.shop.name}</span>
                    </a>
                    <a href="./drink.html?id=${item.id}">
                    <img src="${item.photoUrl}" alt="${item.name}">
                    </a>
                </div>
                <a class="textSection" href="./drink.html?id=${item.id}">
                    <div class="firstRow">
                        <h6>${item.name}</h6>
                        <div class="rateSection">
                            <p class="score">${item.rate}</p>
                            <div class="starSection">${rateStr}</div>
                        </div>
                    </div>
                    <div class="secondRow">
                        <div class="specialPoint">${specialStr}</div>
                        <p class="priceInfor">M $ ${item.price.m} ｜ L $ ${item.price.l}</p>
                    </div>
                </div>
            </a>
            `;
        })

        searchListComapct.innerHTML = listStr;
    }

    searchResultText.textContent = `找到 ${data.length} 個符合「${keyword}」的飲料`;
}

function filterInputData(data, inforStatus) {
    if (url.includes("kind")) {
        newData = data.filter(item => item.type === keyword);
    } else if (url.includes("drink") || url.includes("shop")) {
        newData = data.filter(item => item.name.match(keyword) || item.shop.name.match(keyword));
    }

    changeList(inforStatus);
    renderData(newData, inforStatus);
    sortInputData(newData, inforStatus);
}

function changeList(inforStatus) {
    const comapctList = document.querySelector(".searchList-comapct");
    const tableList = document.querySelector(".searchList-table");

    if (inforStatus === "table") {
        comapctList.style.display = "none";
        tableList.style.display = "flex";
    } else if (inforStatus === "comapct") {
        comapctList.style.display = "flex";
        tableList.style.display = "none";
    }

    renderData(newData, inforStatus);
}

function getInforType(inforStatus) {
    const switchBar = document.querySelector("#switchBtn");
    if (inforStatus === "table") {
        document.querySelector(`[data-type="table"]`).classList.add("switch-active");
    } else if (inforStatus === "comapct") {
        document.querySelector(`[data-type="comapct"]`).classList.add("switch-active");
    }

    switchBar.addEventListener("click", e => {
        e.preventDefault();

        if (e.target.nodeName === "A") {
            inforStatus = e.target.dataset.type;
            localStorage.setItem("listType", inforStatus);
        }
        changeList(inforStatus);
        sortInputData(newData, inforStatus);
    });
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

// ------------------------

function sortInputData(data, inforStatus) {
    const filterBtnList = document.querySelector(".filterBtnList");
    const filterBtn = document.querySelector(".filterBtn");
    const searchResult = document.querySelector(".searchResult-filter-text");
    const searchResultOuter = document.querySelector(".searchResult-filter");
    let sortItem;
    let sortStatus;
    let sortStatusText;

    filterBtn.addEventListener("click", e => { e.preventDefault(); });

    filterBtnList.addEventListener("click", e => {
        e.preventDefault();

        if (e.target.getAttribute("class") === "item") {
            sortItem = e.target.dataset.sort;

            if (sortItem === "rate") {
                data.sort((a, b) => b[sortItem] - a[sortItem]);
                sortStatus = "down";
            } else {
                data.sort((a, b) => a[sortItem].m - b[sortItem].m);
                sortStatus = "up";
            }

            if (sortStatus === "down") {
                sortStatusText = "遞減";
            } else if (sortStatus === "up") {
                sortStatusText = "遞增";
            }

            filterBtn.classList.add("active");
            searchResultOuter.style.opacity = "1";
            searchResult.textContent = `依照「${e.target.textContent}」${sortStatusText}排序`;
            renderData(data, inforStatus);
        }
    });

    removeSort();
}

// function sortStatusSwitch(data, sortItem) {
//     const switchBar = document.querySelector(".fliter-switchBar");
//     switchBar.addEventListener("click", e => {
//         if (e.target.dataset.status === "down" || e.target.dataset.status === "down") {
//             sortStatus = e.target.dataset.status;

//             if (sortStatus === "up") {
//                 if (sortItem === "rate") {
//                     data.sort((a, b) => b[sortItem] - a[sortItem]);
//                 } else {
//                     data.sort((a, b) => b[sortItem].m - a[sortItem].m);
//                 }
//             } else {
//                 if (sortItem === "rate") {
//                     data.sort((a, b) => a[sortItem] - b[sortItem]);
//                 } else {
//                     data.sort((a, b) => a[sortItem].m - b[sortItem].m);
//                 }
//             }
//         }
//     })
// }

function removeSort() {
    const searchResultOuter = document.querySelector(".searchResult-filter");
    const filterBtn = document.querySelector(".filterBtn");

    searchResultOuter.addEventListener("click", e => {
        e.preventDefault();

        if (e.target.nodeName === "I") {
            searchResultOuter.style.opacity = "0";
            filterBtn.classList.remove("active");

            filterInputData(drinksData, inforStatus);
        }
    })
}