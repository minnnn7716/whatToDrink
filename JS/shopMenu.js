const url = location.href;
let keyword = decodeURIComponent(url.split("=")[1].split("&")[0]);

let shopsData;
let shopId;

getShops();

function getShops() {
    const apiPath = "shops";
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            shopsData = response.data;
            getShopId();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getShopId() {
    let data = shopsData.filter(item => item.name === keyword);
    shopId = data[0].id;
}

function renderBanner() {

}

function renderMenu() {

}