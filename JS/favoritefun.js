let favoriteAry;

function clickFavotite() {
    const heartFuncBtn = document.querySelectorAll(".heartFuncBtn");
    let drinkId;

    heartFuncBtn.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();

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
                    favoriteAry.push(drinkId);
                    localStorage.setItem("favorite", favoriteAry);
                    patchFavotite();
                } else {
                    alert("移除收藏");
                    item.dataset.favorite = "none";
                    item.classList.remove("active");
                    drinkId = item.dataset.id;
                    let index = favoriteAry.indexOf(drinkId);
                    favoriteAry.splice(index, 1);
                    localStorage.setItem("favorite", favoriteAry)
                    patchFavotite();
                }
            }
        })
    })
}

function getUserFavotite() {
    const apiPath = `users/${localUserId}/`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            favoriteAry = response.data.favorite;
            clickFavotite();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function patchFavotite() {
    const apiPath = `600/users/${localUserId}`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.patch(apiUrl, {
        "favorite": favoriteAry
    }, token)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}