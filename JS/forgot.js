let usersData;
let step = 1;
let userId;
const forgotFrom = document.querySelector(`[name="forgotFrom"]`);

getUserInfor();

function getUserInfor() {
    const apiPath = "users";
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl)
        .then(function (response) {
            usersData = response.data;
            renderStep();
        })
        .catch(function (error) {
            console.log(error.response)
        });
}

function btnAction() {
    const logSubmit = document.querySelector(".log-submit");

    if (step === 1) {
        logSubmit.addEventListener("click", e => {
            e.preventDefault();
            let emailVaild = false;
            let userIndex = null;

            if (!forgotFrom["信箱"].value.trim() || !forgotFrom["姓名"].value.trim()) {
                alert("不得為空");
                return;
            }

            usersData.forEach((item, index) => {
                if (item.email === forgotFrom["信箱"].value) {
                    userIndex = index;
                    emailVaild = true;
                }
            })

            if (!emailVaild) {
                alert("查無信箱");
            } else {
                if (usersData[userIndex].name === forgotFrom["姓名"].value) {
                    step += 1;
                    userId = usersData[userIndex].id;
                    renderStep();
                } else {
                    alert("姓名與信箱不符");
                }
            }
        })
    } else if (step === 2) {
        logSubmit.addEventListener("click", e => {
            e.preventDefault();

            if (forgotFrom["密碼"].value === forgotFrom["再次輸入密碼"].value) {
                patchPassword(forgotFrom["密碼"].value);
                step += 1;
                renderStep();
            } else {
                alert("兩次密碼不相符")
            }
        })
    }
}

function renderStep() {
    const forgotContent = document.querySelector(".forgot-content");
    let str;

    if (step === 1) {
        str = `
        <p class="illustrate">請輸入註冊的會員信箱與姓名，以確認會員身份</p>
        <div class="log-item">
            <label for="email">信箱</label>
            <input id="email" type="text" name="信箱">
            <p class="alertText">請填寫正確格式</p>
        </div>
        <div class="log-item">
            <label for="name">姓名</label>
            <input id="name" type="text" name="姓名">
            <p class="alertText">請填寫正確格式</p>
        </div>
        <input class="log-submit" type="submit" value="下一步">
        <div class="linkSection">
            <a href="./login.html">返回會員登入</a>
        </div>
        `;
    } else if (step === 2) {
        document.querySelector(".step2").classList.add("active");
        document.querySelector(".step1").classList.add("line-active");

        str = `
        <p class="illustrate">請輸入新密碼，將為您重置密碼</p>
        <div class="log-item log-item-password">
            <label for="password">密碼</label>
            <input id="password" type="password" name="密碼">
            <div class="eyeIcon">
              <i class="fa-sharp fa-solid fa-eye display-none" data-order="first"></i>
              <i class="fa-solid fa-eye-slash" data-order="last"></i>
            </div>
            <p class="alertText">請填寫正確格式</p>
          </div>
          <div class="log-item log-item-password">
            <label for="passwordAgain">密碼</label>
            <input id="passwordAgain" type="password" name="再次輸入密碼" placeholder="請再次輸入密碼">
            <div class="eyeIcon">
              <i class="fa-sharp fa-solid fa-eye display-none" data-order="first"></i>
              <i class="fa-solid fa-eye-slash" data-order="last"></i>
            </div>
            <p class="alertText">請填寫正確格式</p>
          </div>
          <input class="log-submit" type="submit" value="下一步">
        <div class="linkSection">
            <a href="./login.html">返回會員登入</a>
        </div>
        `;
    } else if (step === 3) {
        document.querySelector(".step2").classList.add("active");
        document.querySelector(".step3").classList.add("active");
        document.querySelector(".step1").classList.add("line-active");
        document.querySelector(".step2").classList.add("line-active");

        str = `
        <p class="illustrate">已為您重新設定密碼！<br>
            請使用新密碼再次登入，4 秒後將為您轉至登入頁</p>
        <a class="log-submit back" href="./login.html">立刻返回登入頁</a>
        `;

        setTimeout(() => location.href = "./login.html", 4000);
    }

    forgotContent.innerHTML = str;
    btnAction();
    switchEye();
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

function patchPassword(password) {
    const apiPath = `users/${userId}`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.patch(apiUrl, {
        password
    })
        .then(function (response) {
            console.log("更改成功")
        })
        .catch(function (error) {
            console.log(error.response)
        });
}