const url = location.href;
let keyword = decodeURIComponent(url.split("=")[1].split("&")[0]);

let shopsData;
let singleShopsData;
let shopId;

getShops();

function getShops() {
    const apiPath = "shops";
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            shopsData = response.data;
            getShopId();
            renderHeader();
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
    const headerImg = document.querySelector(".shops-menu-banner ");

    let imgStr = `<img src="${singleShopsData.photoUrl}" alt="${singleShopsData.name}">`

    let inforStr = `
    <div class="menu-title col-12 flex justify-between">
    <h2 class="menu-title-text">${singleShopsData.name}</h2>
    <a href="#" class="menu-title-rate">
        <div class="rateSection">
        <p class="score mr-1">4.9</p>
        <div class="starSection mb-1">
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
            <span class="star"></span>
        </div>
        </div>
        <p class="rate-num">1,423 則評論</p>
    </a>
    </div>
    `;

    headerInfor.innerHTML = inforStr;
    headerImg.innerHTML = imgStr;
}

function renderMenu() {

}

// {
//     "id": 3,
//     "name": "茶湯會",
//     "size": {
//       "m": "480ml",
//       "l": "660ml"
//     },
//     "photoUrl": "https://raw.githubusercontent.com/minnnn7716/whatToDrink/c08e625b274802bda3a7a89f74414c812e911f57/IMAGES/logo_%E8%8C%B6%E6%B9%AF%E6%9C%83.svg",
//     "rate": ,
//     "rateNum": 
//   }