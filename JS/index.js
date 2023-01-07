let drinksData;
let commentsData;
let recommendDrinkId;
let carouelNum = 1;

kindCilck();
getRecommentDrink();
carouelBtnAction();

function kindCilck() {
    const kindBtn = document.querySelectorAll("[data-kind]");

    kindBtn.forEach(i => {
        i.addEventListener("click", searchKind);
    })
}

function searchKind(e) {
    e.preventDefault();

    if (e.target.nodeName === "A") {
        keyword = e.target.dataset.kind;
    }

    window.location.assign(`./search.html?kind=${keyword}`);
    localStorage.setItem("listType", "table");
}

function getRecommentDrink() {
    const apiPath = `drinks?_expand=shop`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            // 抓取前五筆評價最高的飲料
            drinksData = response.data.sort((a, b) => b.rate - a.rate).slice(0, 5);
            getComment();
            renderRecomment();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function carouelBtnAction() {
    const carouelBtn = document.querySelector(".carouel-arrow");
    const carouelDot = document.querySelectorAll(".carouel-dot i");
    const prevNum = document.querySelector(".prev");

    carouelBtn.addEventListener("click", e => {
        e.preventDefault();
        if (e.target.dataset.arrow === "right" && carouelNum < 5) {
            carouelNum += 1;
        } else if (e.target.dataset.arrow === "left" && carouelNum > 1) {
            carouelNum -= 1;
        }

        carouelDot.forEach(item => {
            item.classList.remove("active");
        })

        carouelDot[carouelNum - 1].classList.add("active");
        prevNum.textContent = "0" + carouelNum;

        renderRecomment();
        renderComment();
    })
}

function renderRecomment() {
    const recommentInfor = document.querySelector(".recommend-imgSection");
    let drink = drinksData[carouelNum - 1];
    recommendDrinkId = drink.id;

    let str = `
    <div class="recommend-titleSection">
        <h4 class="recommend-title">${drink.name}</h4>
        <span class="shopTag">${drink.shop.name}</span>
    </div>
    <a href="./drink.html?id=${recommendDrinkId}">
    <div class="recommend-inforSection flex align-center justify-between">
        <p class="white-border">M $ ${drink.price.m} ｜ L $ ${drink.price.l}</p>
        <div class="rateSection">
            <p class="score mr-1 white-border">${drink.rate}</p>
            <div class="starSection mb-1">${renderStar(drink.rate)}</div>
        </div>
    </div>
    <div class="recommend-img">
        <img src="${drink.photoUrl}" alt="${drink.name}">
    </div>
    </a>
    `;

    recommentInfor.innerHTML = str;
}

function getComment() {
    const apiPath = `comments?_expand=user`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            commentsData = response.data;
            renderComment();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function renderComment() {
    const commentContent = document.querySelector(".inedx-recommend-textSection .messageGroup");
    let filterCommentAry = commentsData.filter(item => item.drinkId == recommendDrinkId);
    let str = "";

    filterCommentAry.forEach(item => {
        str += `
        <div class="message ml-4 mt-3 mb-8">
            <img class="message-photo userPhoto-circle" src="${item.user.photoUrl}" alt="使用者頭像">
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
                <p>${item.content}</p>
            </div>
        </div>
        `;

        commentContent.innerHTML = str;
    })
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