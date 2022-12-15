const apiPath = "login";
const apiUrl = `${baseUrl}${apiPath}`;

const loginFrom = document.querySelector(`[name="loginFrom"]`);
let loginData;

getInfor();

function loginPost(obj) {
    axios.post(apiUrl, obj)
        .then(function (response) {
            console.log(response)
            loginData = response.data;

            localStorage.setItem("token", loginData.accessToken);
            localStorage.setItem("name", loginData.user.name);
            localStorage.setItem("id", loginData.user.id);

            alert("註冊成功！將保持登入狀態 2 秒後跳轉回首頁");
            setTimeout(goIndex, 2000);

            function goIndex() {
                location.href = './index.html';
            }
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