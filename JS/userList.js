const url = location.href;
let keyword = url.split("=")[1].split("&")[0];

judgType();

function judgType() {
    if (keyword === "favroite") {
        titleName = "收藏清單";
    } else if (keyword === "wheel") {
        titleName = "轉盤清單";
    } else if (keyword === "comment") {
        titleName = "過往評論";
    } else if (keyword === "list-message") {
        titleName = "消息通知";
    }

    document.querySelector(".userList-titleSection").classList.add(keyword);
    document.querySelector(".titleName").textContent = titleName;
}

// function getUserInfor() {
//     const apiPath = `600/users/${localUserId}`;
//     const apiUrl = `${baseUrl}${apiPath}`;

//     axios.get(apiUrl, token)
//         .then(function (res) {
//             userData = res.data;
//         })
//         .catch(function (error) {
//             console.log(error)
//         })
// }