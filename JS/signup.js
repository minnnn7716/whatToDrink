const apiPath = "register";
const apiUrl = `${baseUrl}${apiPath}`;

const singupFrom = document.querySelector(`[name="singupForm"]`);
let signupData;

getInfor();

function signupPost(obj) {
    axios.post(apiUrl, obj)
        .then(function (response) {
            signupData = response.data;

            localStorage.setItem("token", signupData.accessToken);
            localStorage.setItem("name", signupData.user.name);
            localStorage.setItem("id", signupData.user.id);

            alert("註冊成功！將保持登入狀態 2 秒後跳轉回首頁");
            setTimeout(goIndex, 2000);

            function goIndex() {
                location.href = './index.html';
            }
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
