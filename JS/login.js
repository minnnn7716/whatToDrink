const apiPath = "login";
const apiUrl = `${baseUrl}${apiPath}`;

const loginFrom = document.querySelector(`[name="loginFrom"]`);
let loginData;

let loginStatus = localStorage.getItem("loginStatus");
let herf = localStorage.getItem("backHref");

getInfor();

function loginPost(obj) {
    axios.post(apiUrl, obj)
        .then(function (response) {
            console.log(response)
            loginData = response.data;

            localStorage.setItem("token", loginData.accessToken);
            localStorage.setItem("name", loginData.user.name);
            localStorage.setItem("id", loginData.user.id);

            if (loginStatus) {
                alert("登入成功！將於 2 秒後跳轉回前頁");
                setTimeout(goPage, 2000);
            } else {
                alert("登入成功！將於 2 秒後跳轉回首頁");
                setTimeout(goIndex, 2000);
            }

            localStorage.setItem("loginStatus", "");
            localStorage.setItem("backHref", "");
        })
        .catch(function (error) {
            console.log(error)
            alert("登入失敗");
        });
}

function getInfor() {
    let obj = {};

    loginFrom.addEventListener("submit", e => {
        e.preventDefault();

        obj = {
            "email": loginFrom["信箱"].value,
            "password": loginFrom["密碼"].value
        }

        loginPost(obj);
        loginFrom.reset();
    })
}

function goPage() {
    location.href = './index.html';
}

function goIndex() {
    location.href = herf;
}