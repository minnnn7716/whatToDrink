const url = location.href;
let keyword = decodeURIComponent(url.split("=")[1].split("&")[0]);

const apiPath = `drinks/${keyword}?_expand=shop`;
const apiUrl = `${baseUrl}${apiPath}`;

let drinksData;


// ------------------------

getDrink();

// ------------------------

function getDrink() {
  axios.get(apiUrl)
    .then(function (response) {
      drinksData = response.data;
      renderData(drinksData);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderData(data) {
  const drinkInfor = document.querySelector(".drink-infor");
  let specialStr = "";
  let ingredient = "";
  let mix = "";
  let material = "";
  let str;

  if (data.special.length) {
    data.special.forEach(each => {
      if (each === "僅限冷飲") {
        specialStr += `<span class="specialPoint-item specialPoint-recommend mr-half-1">${each}</span>`;
      } else if (each === "店家推薦") {
        specialStr += `<span class="specialPoint-item specialPoint-period">${each}</span>`;
      }
    });
  }

  if (data.mix.length) {
    data.mix.forEach((item, index) => {
      mix += `、${item}`;
    })
  }

  if (data.material.length) {
    data.material.forEach(item => {
      material += `、${item}`;
    })
  }

  ingredient = `${data.ingredient.base}${mix}${material}`;

  str = `
  <div class="col-4 drink-infor-imgOuter">
    <img src="${data.photoUrl}" alt="">
  </div>
  <div class="col-6 drink-infor-text flex justify-between">
    <div class="drink-infor-title flex flex-column justify-between">
      <div class="firstRow">
        <span class="shopTag mb-3">${data.shop.name}</span>
        <h3 class="drinkName mb-3">${data.name}</h3>
        <div class="priceSection flex mb-3">
          <div class="priceInfor">
            <p class="size">M<span class="pl-4">$${data.price.m}</span></p>
            <p class="capacity">${data.shop.size.m}</p>
          </div>
          <span class="priceInfor-divider"></span>
          <div class="priceInfor">
            <p class="size">L<span class="pl-4">$${data.price.l}</span></p>
            <p class="capacity">${data.shop.size.l}</p>
          </div>
        </div>
        <div class="specialPoint">${specialStr}</div>
      </div>
      <table class="secondRow">
        <tr>
          <td class="title pr-2">熱量：</td>
          <td>${data.calorie.l} 大卡</td>
        </tr>
        <tr>
          <td class="title pr-2">內容物：</td>
          <td>${ingredient}</td>
        </tr>
      </table>
    </div>
    <div class="drink-infor-func">
      <div class="rateSection">
        <p class="score mr-1">${data.rate}</p>
        <div class="starSection mb-half-1">
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
        </div>
      </div>
      <a href="#" class="heartBtn funcBtn-hover">
        <i class="fa-regular fa-heart funcBtn-outline"></i>
        <i class="fa-sharp fa-solid fa-heart funcBtn-solid"></i>
      </a>
    </div>
  </div>
  `;

  drinkInfor.innerHTML = str;
}