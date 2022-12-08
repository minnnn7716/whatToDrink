const baseUrl = "http://localhost:3000/";
const apiPath = "drinks?_expand=shop";
const apiUrl = `${baseUrl}${apiPath}`;
let drinksData;

getDrinks();

function getDrinks() {
    axios.get(apiUrl)
        .then(function (response) {
            drinksData = response.data;
            getKeyword(drinksData);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function renderData(data) {
    const searchListBody = document.querySelector(".searchList-tbody");
    let str = "";

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

        str += `
        <tr class="itemSection">  
          <td class="table-name">${item.name}</td>
          <td class="table-shop">${item.shop.name}</td>
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

    searchListBody.innerHTML = str;
}

function getKeyword(data) {
    const url = location.href;
    const keyword = decodeURIComponent(url.split("=")[1]);
    let filterData;

    console.log(url.includes("kind"))
    console.log(url.includes("word"))

    if (url.includes("kind")) {
        filterData = data.filter(item => item.type === keyword);
    } else if (url.includes("word")) {
        filterData = data.filter(item => item.name.match(keyword));
    }

    renderData(filterData);
}