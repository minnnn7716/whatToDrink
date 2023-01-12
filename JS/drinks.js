const url = location.href;
let keyword = decodeURIComponent(url.split("=")[1].split("&")[0]);

let drinksData;
let commentsData;
let oldCommentsData;
let totalRate;
let finalRate;
let popNum;
let userComment;
let pinNum;
let shopId;
let rateNum;

const popupBG = document.querySelector(".popupBG");
const body = document.querySelector("#drink");


// ------------------------

getDrink();
getComment();
getUserData()
commentFunc();
sortComment();

// ------------------------

function getDrink() {
  const apiPath = `drinks/${keyword}?_expand=shop`;
  const apiUrl = `${baseUrl}${apiPath}`;

  axios.get(apiUrl)
    .then(function (response) {
      drinksData = response.data;
      shopId = drinksData.shopId
      rateNum = drinksData.shop.rateNum;
      renderData();
      getUserFavotite();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderData() {
  const drinkInfor = document.querySelector(".drink-infor");
  let specialStr = "";
  let ingredient = "";
  let mix = "";
  let material = "";
  let str;
  let rateStr = renderStar(drinksData.rate);
  const favoriteList = localStorage.getItem("favorite");

  if (drinksData.special.length) {
    drinksData.special.forEach(each => {
      if (each === "僅限冷飲") {
        specialStr += `<span class="specialPoint-item specialPoint-recommend mr-half-1">${each}</span>`;
      } else if (each === "店家推薦") {
        specialStr += `<span class="specialPoint-item specialPoint-period mr-half-1">${each}</span>`;
      } else if (each === "無咖啡因") {
        specialStr += `<span class="specialPoint-item specialPoint-noCaffeing">${each}</span>`;
      }
    });
  }

  if (drinksData.ingredient.mix.length) {
    drinksData.ingredient.mix.forEach((item, index) => {
      mix += `、${item}`;
    })
  }

  if (drinksData.ingredient.material.length) {
    drinksData.ingredient.material.forEach(item => {
      material += `、${item}`;
    })
  }

  if (localUserToken && favoriteList) {
    if (favoriteList.includes(drinksData.id)) {
      favoriteStr = `
      <a href="#" class="heartBtn funcBtn-hover heartFuncBtn active" data-favorite="add" data-id="${drinksData.id}">
        <i class="fa-regular fa-heart funcBtn-outline pointer-none"></i>
        <i class="fa-sharp fa-solid fa-heart funcBtn-solid pointer-none"></i>
      </a>`;
    } else {
      favoriteStr = `
      <a href="#" class="heartBtn funcBtn-hover heartFuncBtn" data-favorite="none" data-id="${drinksData.id}">
        <i class="fa-regular fa-heart funcBtn-outline pointer-none"></i>
        <i class="fa-sharp fa-solid fa-heart funcBtn-solid pointer-none"></i>
      </a>`;
    }
  } else {
    favoriteStr = `
      <a href="#" class="heartBtn funcBtn-hover heartFuncBtn" data-favorite="none" data-id="${drinksData.id}">
        <i class="fa-regular fa-heart funcBtn-outline pointer-none"></i>
        <i class="fa-sharp fa-solid fa-heart funcBtn-solid pointer-none"></i>
      </a>`;
  }



  ingredient = `${drinksData.ingredient.base}${mix}${material}`;

  str = `
  <div class="col-4 drink-infor-imgOuter">
    <img src="${drinksData.photoUrl}" alt="">
  </div>
  <div class="col-6 drink-infor-text flex justify-between">
    <div class="drink-infor-title flex flex-column justify-between">
      <div class="firstRow">
        <a href="./shops_menu.html?shop=${drinksData.shop.name}" class="shopTag mb-3">${drinksData.shop.name}</a>
        <h3 class="drinkName mb-3">${drinksData.name}</h3>
        <div class="priceSection flex mb-3">
          <div class="priceInfor">
            <p class="size">M<span class="pl-4">$${drinksData.price.m}</span></p>
            <p class="capacity">${drinksData.shop.size.m}</p>
          </div>
          <span class="priceInfor-divider"></span>
          <div class="priceInfor">
            <p class="size">L<span class="pl-4">$${drinksData.price.l}</span></p>
            <p class="capacity">${drinksData.shop.size.l}</p>
          </div>
        </div>
        <div class="specialPoint">${specialStr}</div>
      </div>
      <table class="secondRow">
        <tr>
          <td class="title pr-2">熱量：</td>
          <td>${drinksData.calorie.l} 大卡</td>
        </tr>
        <tr>
          <td class="title pr-2">內容物：</td>
          <td>${ingredient}</td>
        </tr>
      </table>
    </div>
    <div class="drink-infor-func">
      <div class="rateSection">
        <p class="score mr-1" id="drinkInforRate">${drinksData.rate}</p>
        <div class="starSection mb-half-1">${rateStr}</div>
      </div>
      ${favoriteStr}
    </div>
  </div>
  `;

  drinkInfor.innerHTML = str;
}

// ------------------------

function getComment() {
  const apiPath = `comments?drinkId=${keyword}&_expand=user`;
  const apiUrl = `${baseUrl}${apiPath}`;

  axios.get(apiUrl)
    .then(function (response) {
      commentsData = response.data;
      oldCommentsData = commentsData.slice()
      renderCommet(commentsData);
      renderRate();
      rateFilter();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function renderPinCommet(data) {
  const messageGrop = document.querySelector(".menu-messageSection");
  let str = "";
  let addClass = "";
  totalRate = 0;

  if (!data.length) {
    messageGrop.innerHTML = `<p class="w-100 text-center">尚無評論</p>`;
  } else {
    data.forEach((item, index) => {

      totalRate += + item.rate;

      let rateStr = renderStar(item.rate);

      str += `
      <div class="message w-100">
        <img class="message-photo userPhoto-circle" src="${item.user.photoUrl}" alt="${item.user.name}使用者頭像">
        <div class="message-header flex justify-between">
          <div class="message-title mb-3">
            <h6 class="message-name mb-half-1">${item.user.name}</h6>
            <p class="message-allNum">${item.user.comments.length}則評論</p>
          </div>
          <div class="message-rate mb-2">
            <div class="starSection mb-half-1">${rateStr}</div>
            <p class="message-infor">${item.sugar} / ${item.ice}</p>
            <p class="message-date">${renderCommentTime(item.createTime)}</p>
          </div>
        </div>
        <div class="message-content">
          <p class="flex-stretch">
            <span>${item.content}</span>
          </p>
          <a href="#" class="message-likeThis" data-id="${item.id}">
            <i class="fa-regular fa-thumbs-up"></i>
            <span class="likeThis-num">${item.like.length}</span>
          </a>
        </div>
      </div>
      `;
      if (index !== data.length - 1) {
        str += `<div class="message-divider"></div>`;
      }
    })

    messageGrop.innerHTML = str;
    clickLike();
  }
}

function renderCommet(data) {
  const messageGrop = document.querySelector(".menu-messageSection");
  let str = "";
  let addClass = "";
  totalRate = 0;

  if (!data.length) {
    messageGrop.innerHTML = `<p class="w-100 text-center">尚無評論</p>`;
  } else {
    data.forEach((item, index) => {
      let likeStatus = "";

      if (item.content.includes(`<br>`)) {
        addClass = "align-end";
      };

      if (item.like.indexOf(+localUserId) != -1) {
        likeStatus = "active";
      }

      totalRate += + item.rate;

      let rateStr = renderStar(item.rate);

      str += `
      <div class="message w-100">
        <img class="message-photo userPhoto-circle" src="${item.user.photoUrl}" alt="${item.user.name}使用者頭像">
        <div class="message-header flex justify-between">
          <div class="message-title mb-3">
            <h6 class="message-name mb-half-1">${item.user.name}</h6>
            <p class="message-allNum">${item.user.comments.length}則評論</p>
          </div>
          <div class="message-rate mb-2">
            <div class="starSection mb-half-1">${rateStr}</div>
            <p class="message-infor">${item.sugar} / ${item.ice}</p>
            <p class="message-date">${renderCommentTime(item.createTime)}</p>
          </div>
        </div>
        <div class="message-content ${addClass}">
          <p class="flex-stretch">
            <span>${item.content}</span>
          </p>
          <a href="#" class="message-likeThis ${likeStatus}" data-id="${item.id}">
            <i class="fa-regular fa-thumbs-up"></i>
            <span class="likeThis-num">${item.like.length}</span>
          </a>
        </div>
      </div>
      `;
      if (index !== data.length - 1) {
        str += `<div class="message-divider"></div>`;
      }
    })

    finalRate = (totalRate / data.length).toFixed(1);
    updateDrinkRate(finalRate);
    updateShopRateNum();
    messageGrop.innerHTML = str;
    clickLike();
  }
}

function renderRate() {
  const scoreSection = document.querySelector(".scoreSection");
  const eachStarSection = document.querySelector(".eachStarSection");
  const fiveNum = document.querySelector("#fiveNum");
  const fourNum = document.querySelector("#fourNum");
  const threeNum = document.querySelector("#threeNum");
  const twoNum = document.querySelector("#twoNum");
  const oneNum = document.querySelector("#oneNum");
  const fivebar = document.querySelector("#fivebar");
  const fourbar = document.querySelector("#fourbar");
  const threebar = document.querySelector("#threebar");
  const twobar = document.querySelector("#twobar");
  const onebar = document.querySelector("#onebar");

  let leftStr = "";
  let one;
  let two;
  let three;
  let four;
  let five;
  let total = commentsData.length;

  if (!commentsData.length) {
    leftStr = `
      <h2 class="num">0</h2>
      <div class="starSection mb-1">
        <span class="starEmpty"></span>
        <span class="starEmpty"></span>
        <span class="starEmpty"></span>
        <span class="starEmpty"></span>
        <span class="starEmpty"></span>
      </div>
      <p class="rateNum">0 則評論</p>
    `;

    fiveNum.textContent = 0;
    fourNum.textContent = 0;
    threeNum.textContent = 0;
    twoNum.textContent = 0;
    oneNum.textContent = 0;
    fivebar.style.width = "1%";
    fourbar.style.width = "1%";
    threebar.style.width = "1%";
    twobar.style.width = "1%";
    onebar.style.width = "1%";
  } else {
    let rateStr = renderStar(finalRate);

    leftStr = `
      <h2 class="num">${finalRate}</h2>
      <div class="starSection mb-1">${rateStr}</div>
      <p class="rateNum">${commentsData.length} 則評論</p>
    `;

    five = commentsData.filter(item => item.rate == 5);
    four = commentsData.filter(item => item.rate == 4);
    three = commentsData.filter(item => item.rate == 3);
    two = commentsData.filter(item => item.rate == 2);
    one = commentsData.filter(item => item.rate == 1);

    fiveNum.textContent = `${five.length} 則`;
    fourNum.textContent = `${four.length} 則`;
    threeNum.textContent = `${three.length} 則`;
    twoNum.textContent = `${two.length} 則`;
    oneNum.textContent = `${one.length} 則`;
    fivebar.style.width = `${(five.length / total * 100).toFixed(0)}%`;
    fourbar.style.width = `${(four.length / total * 100).toFixed(0)}%`;
    threebar.style.width = `${(three.length / total * 100).toFixed(0)}%`;
    twobar.style.width = `${(two.length / total * 100).toFixed(0)}%`;
    onebar.style.width = `${(one.length / total * 100).toFixed(0)}%`;
  }

  scoreSection.innerHTML = leftStr;
}

function rateFilter() {
  const pinBtn = document.querySelectorAll("[data-pin]");
  const pinBar = document.querySelectorAll("[data-bar]");
  const eachStarSection = document.querySelector(".eachStarSection");
  let filterData;

  eachStarSection.addEventListener("click", e => {
    e.preventDefault();

    if (e.target.nodeName === "I" && !e.target.getAttribute("class").includes("active")) {
      pinBtn.forEach(item => {
        item.classList.remove("active");
        pinNum = e.target.dataset.pin;
        e.target.classList.add("active");
      })

      pinBar.forEach(item => {
        if (item.dataset.bar == pinNum) {
          item.style.background = "#F7C7FF";
        } else {
          item.style.background = "#FFF066";
        }
      })

      filterData = commentsData.filter(item => item.rate == pinNum);
      renderPinCommet(filterData);
    } else {
      pinBtn.forEach(item => {
        item.classList.remove("active");
      })

      pinBar.forEach(item => {
        item.style.background = "#FFF066";
      })
      renderCommet(commentsData);
    }
  })
}

// ------------------------

function postComment(obj) {
  const apiPath = `600/drinks/${keyword}/comments`;
  const apiUrl = `${baseUrl}${apiPath}`;

  axios.post(apiUrl, obj, token)
    .then(function (response) {
      console.log(response);
      patchUserComment();
      alert("成功撰寫留言");
      getComment();
    })
    .catch(function (error) {
      console.log(error);
    });
}

function updateDrinkRate(finalRate) {
  const apiPath = `drinks/${keyword}`;
  const apiUrl = `${baseUrl}${apiPath}`;
  const drinkInforRate = document.querySelector("#drinkInforRate");
  const starSection = document.querySelector(".starSection");

  axios.patch(apiUrl, {
    "rate": finalRate
  })
    .then(function (response) {
      drinkInforRate.textContent = finalRate;
      starSection.innerHTML = renderStar(finalRate);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function updateShopRateNum() {
  const apiPath = `shops/${shopId}`;
  const apiUrl = `${baseUrl}${apiPath}`;
  rateNum += 1;

  axios.patch(apiUrl, {
    "rateNum": rateNum
  })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
}

function commentFunc() {
  const commentBtn = document.querySelector("#commentBtn");

  commentBtn.addEventListener("click", e => {
    e.preventDefault();

    if (!localUserToken) {
      alert("請先登入");
      let href = location.href;
      localStorage.setItem("loginStatus", "back");
      localStorage.setItem("backHref", href);
      location.href = "./login.html";
    } else {
      renderCommetFunc();

      popupBG.style.display = "block";
      body.style.overflow = "hidden";
    }

  });

  popupBG.addEventListener("click", e => {
    e.preventDefault();

    if (e.target.dataset.func === "close") {
      popupBG.style.display = "none";
      body.style.overflow = "auto";
    }
  });

  starHover();

  getCommentPopup();
}

function getCommentPopup() {
  const popStarSection = document.querySelector("#popStarSection");
  const popSubmit = document.querySelector("#popSubmit");
  const sugarFilter = document.querySelector("#sugarFilter");
  const iceFilter = document.querySelector("#iceFilter");
  const textarea = document.querySelector(".drinkCommentText");
  let commentObj = {};

  popSubmit.addEventListener("click", e => {
    e.preventDefault();
    commentObj.userId = localUserId;
    commentObj.rate = popNum;
    commentObj.sugar = sugarFilter.value;
    commentObj.ice = iceFilter.value;
    commentObj.content = textarea.value;
    commentObj.createTime = timeNow();
    commentObj.like = [];

    popupBG.style.display = "none";
    body.style.overflow = "auto";

    postComment(commentObj);

    sugarFilter.value = "甜度";
    iceFilter.value = "溫度 / 冰塊";
    textarea.value = "";
    let str = `<span class="starEmpty" data-num="1"></span>
    <span class="starEmpty" data-num="2"></span>
    <span class="starEmpty" data-num="3"></span>
    <span class="starEmpty" data-num="4"></span>
    <span class="starEmpty" data-num="5"></span>`
    popStarSection.innerHTML = str;
  })
}

function renderCommetFunc() {
  const commentFuncInfor = document.querySelector(".commentFuncInfor");

  let str = `
  <div class="drinkCommentImgOuter mb-2">
    <img class="drinkCommentImg" src="${drinksData.photoUrl}" alt="">
  </div>
  <div class="drink-infor-title flex flex-column justify-between align-start">
    <p class="shopTag mb-1">${drinksData.shop.name}</p>
    <h3 class="drinkName mb-1">${drinksData.name}</h3>
    <div class="priceSection flex mb-3">
      <div class="priceInfor">
        <p class="size">M<span class="pl-4">$${drinksData.price.m}</span></p>
      </div>
      <span class="priceInfor-divider"></span>
      <div class="priceInfor">
        <p class="size">L<span class="pl-4">$${drinksData.price.l}</span></p>
      </div>
    </div>
  `;

  commentFuncInfor.innerHTML = str;
}

function getUserData() {
  const apiPath = `users/${localUserId}/`;
  const apiUrl = `${baseUrl}${apiPath}`;

  axios.get(apiUrl,)
    .then(function (response) {
      userComment = response.data.comments;
      console.log(userComment)
    })
    .catch(function (error) {
      console.log(error);
    });
}

function patchUserComment() {
  const apiPath = `users/${localUserId}/`;
  const apiUrl = `${baseUrl}${apiPath}`;

  userComment.push(commentsData.length + 1);

  axios.patch(apiUrl, {
    "comments": userComment
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// ------------------------

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

function starHover() {
  const popStarSection = document.querySelector("#popStarSection");

  popStarSection.addEventListener("mouseover", e => {
    let total = [];

    if (e.target.nodeName === "SPAN") {
      popNum = e.target.dataset.num;

      while (total.length < 5) {
        if (total.length < popNum) {
          total.push(`<span class="star" data-num="${total.length + 1}"></span>`);
        } else {
          total.push(`<span class="starEmpty" data-num="${total.length + 1}"></span>`);
        }
      }

      str = total.join("");
      popStarSection.innerHTML = str;
    }
  });
}

function timeNow() {
  const timeSec = new Date();
  const timeObj = {
    year: timeSec.getFullYear(),
    month: timeSec.getMonth() + 1,
    date: timeSec.getDate()
  }

  return `${timeObj.year}/${timeObj.month}/${timeObj.date}`
}

function renderCommentTime(time) {
  const now = new Date();
  const commentTime = new Date(time);
  const iDays = parseInt(Math.abs(now - commentTime) / 1000 / 60 / 60 / 24);

  if (iDays > 7) {
    return time;
  } else if (iDays === 0) {
    return `今天`;
  } else {
    return `${iDays} 天前`;
  }
}

function clickLike() {
  const likeThisBtn = document.querySelectorAll(".message-likeThis");
  let commentId;
  let likeAry;

  likeThisBtn.forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      commentId = e.target.dataset.id;

      for (let i = 0; i < commentsData.length; i++) {
        if (commentsData[i].id === + commentId) {
          likeAry = commentsData[i].like;
        }
      }

      if (e.target.getAttribute("class").includes("active")) {
        likeAry.splice(likeAry.indexOf(+ localUserId), 1);
        e.target.classList.remove("active");
        e.target.childNodes[3].textContent = likeAry.length;
        patchlike();
      } else {
        likeAry.push(+ localUserId);
        e.target.classList.add("active");
        e.target.childNodes[3].textContent = likeAry.length;
        patchlike();
      }
    })
  })



  function patchlike() {
    const apiPath = `comments/${commentId}/`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.patch(apiUrl, {
      "like": likeAry
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

function sortComment() {
  const filterSelect = document.querySelector("#messageFilter");

  filterSelect.addEventListener("change", e => {
    const value = e.target.value;
    let newData;

    if (value && filterSelect.length === 5) {
      const newOption = document.createElement("option");
      const node = document.createTextNode("取消篩選");
      newOption.appendChild(node);
      newOption.value = "取消篩選";
      newOption.setAttribute("class", "cancel");

      const child = document.getElementById("child");
      filterSelect.insertBefore(newOption, child.nextSibling);
    }

    if (value === "取消篩選") {
      document.querySelector(".cancel").remove();
      filterSelect.value = "排序篩選";
      renderCommet(oldCommentsData);
    } else if (value && value != "取消篩選") {

      if (value === "星級最高") {
        commentsData.sort((a, b) => b.rate - a.rate);
      } else if (value === "星級最低") {
        commentsData.sort((a, b) => a.rate - b.rate);
      } else if (value === "最新日期") {
        commentsData.sort((a, b) => new Date(b.createTime) - new Date(a.createTime));
      } else if (value === "最多人推薦") {
        commentsData.sort((a, b) => b.like.length - a.like.length);
      }

      renderCommet(commentsData);
    }
  })
}