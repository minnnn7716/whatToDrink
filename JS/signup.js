const apiPath = "register";
const apiUrl = `${baseUrl}${apiPath}`;

const singupFrom = document.querySelector(`[name="signupFrom"]`);
let signupData;

let loginStatus = localStorage.getItem("loginStatus");
let herf = localStorage.getItem("backHref");

getInfor();
switchEye();

function signupPost(obj) {
    axios.post(apiUrl, obj)
        .then(function (response) {
            signupData = response.data;
            singupFrom.reset();

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
            console.log(error.response)
            alert(error.response.data);
        });
}

function getInfor() {
    let obj = {};
    let randomNum = Math.floor(Math.random() * 400);

    singupFrom.addEventListener("submit", e => {
        e.preventDefault();
        if (singupFrom["密碼"].value === singupFrom["再次輸入密碼"].value) {
            obj = {
                "email": singupFrom["信箱"].value,
                "password": singupFrom["密碼"].value,
                "name": singupFrom["姓名"].value,
                "photoUrl": `https://picsum.photos/${randomNum}/200`,
                "favorite": [],
                "comments": []
            }

            signupPost(obj);
        } else {
            alert("密碼不相符")
        }
    })
}

function switchEye() {
    const eyeIcon = document.querySelectorAll(".eyeIcon i");

    eyeIcon.forEach(item => {
        item.addEventListener("click", e => {
            let input = e.target.parentElement.previousElementSibling;

            e.target.classList.add("display-none");

            if (e.target.dataset.order === "first") {
                e.target.nextElementSibling.classList.remove("display-none");
            } else {
                e.target.previousElementSibling.classList.remove("display-none");
            }

            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
        });
    })
}
