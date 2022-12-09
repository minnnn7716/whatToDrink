const baseUrl = "http://localhost:3000/";
const apiPath = "drinks?_expand=shop";
const apiUrl = `${baseUrl}${apiPath}`;

const url = location.href;
let keyword = decodeURIComponent(url.split("=")[1].split("&")[0]);

let inforStatus = url.split("=")[1].split("&")[1];
const comapctList = document.querySelector(".searchList-comapct");
const tableList = document.querySelector(".searchList-table");
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
        inforStatus = document.querySelector(".switch-active").dataset.type;
        window.location.assign(`./search.html?drink=${keyword}&${inforStatus}`);
    } else {
        alert("你沒有說要喝什麼捏～");
    }
}

// ------------------------

function getDrinks() {
    axios.get(apiUrl)
        .then(function (response) {
            drinksData = response.data;
            filterInputData(drinksData);
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

            listStr += `
            <tr class="itemSection">  
              <td class="table-name"><a href="./drink.html?name=${item.name}">${item.name}</a></td>
              <td class="table-shop"><a href="./shops_menu.html?name=${item.shop.name}">${item.shop.name}</a></td>
              <td>M ${item.price.m} ｜ L ${item.price.l}</td>
              <td>
                <div class="rateSection">
                  <p class="score">4.9</p>
                  <div class="starSection">
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                  </div>
                </div>
               </td>
               <td>M ${item.calorie.m} ｜ L ${item.calorie.l}</td>
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

            listStr += `
            <div class="product-img col-4 mb-8">
                <div class="imgSection">
                    <a href="./shops_menu.html?name=$${item.shop.name}">
                    <span class="shopName">${item.shop.name}</span>
                    </a>
                    <a href="./drink.html?name=${item.name}">
                    <img src="${item.photoUrl}" alt="${item.name}">
                    </a>
                </div>
                <a class="textSection" href="./drink.html?name=${item.name}">
                    <div class="firstRow">
                        <h6>${item.name}</h6>
                        <div class="rateSection">
                            <p class="score">4.9</p>
                            <div class="starSection">
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                                <span class="star"></span>
                            </div>
                        </div>
                    </div>
                    <div class="secondRow">
                        <div class="specialPoint">${specialStr}</div>
                        <p class="priceInfor">M ${item.price.m} ｜ L ${item.price.l}</p>
                    </div>
                </div>
            </a>
            `;
        })

        searchListComapct.innerHTML = listStr;
    }



    searchResultText.textContent = `找到 ${data.length} 個符合「${keyword}」的飲料`;
}

function filterInputData(data) {
    if (url.includes("kind")) {
        newData = data.filter(item => item.type === keyword);
    } else if (url.includes("drink") || url.includes("shop")) {
        newData = data.filter(item => item.name.match(keyword) || item.shop.name.match(keyword));
    }

    changeList(inforStatus);
    renderData(newData, inforStatus);
}

function changeList(inforStatus) {
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

    switchBar.addEventListener("click", e => {
        e.preventDefault();

        if (e.target.nodeName === "A") {
            inforStatus = e.target.dataset.type;
        }
        changeList(inforStatus);
    })
}