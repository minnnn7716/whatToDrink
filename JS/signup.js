const apiPath = "register";
const apiUrl = `${baseUrl}${apiPath}`;

const singupFrom = document.querySelector(`[name="singupForm"]`);
let signupData;

let loginStatus = localStorage.getItem("loginStatus");
let herf = localStorage.getItem("backHref");

getInfor();

function signupPost(obj) {
    axios.post(apiUrl, obj)
        .then(function (response) {
            signupData = response.data;

            localStorage.setItem("token", signupData.accessToken);
            localStorage.setItem("name", signupData.user.name);
            localStorage.setItem("id", signupData.user.id);

            if (loginStatus) {
                alert("註冊成功！將跳轉回前頁");
                location.href = herf;
            } else {
                alert("註冊成功！將跳轉回首頁");
                location.href = './index.html';
            }

            localStorage.setItem("loginStatus", "");
            localStorage.setItem("backHref", "");
        })
        .catch(function (error) {
            console.log(error)
            alert("註冊失敗");
        });
}

function getInfor() {
    let obj = {};
    let randomNum = Math.floor(Math.random() * 400);

    singupFrom.addEventListener("submit", e => {
        e.preventDefault();

        obj = {
            "email": singupFrom["信箱"].value,
            "password": singupFrom["密碼"].value,
            "name": singupFrom["姓名"].value,
            "photoUrl": `https://picsum.photos/${randomNum}/200`,
            "favorite": [],
            "comments": []
        }

        signupPost(obj);
        singupFrom.reset();
    })
}
