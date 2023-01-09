let userData;

switchPopup();
switchEye();
changePwdBtn();
getUserInfor();
clickListLink();

function switchPopup() {
    const changePwdBtn = document.querySelector(".changePwdBtn");
    const popup = document.querySelector(".popupBG");

    changePwdBtn.addEventListener("click", e => {
        e.preventDefault();
        popup.style.display = "block";
    })

    popup.addEventListener("click", e => {
        e.preventDefault();
        if (e.target.dataset.func === "close") {
            popup.style.display = "none";
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

function patchPassword(password) {
    const apiPath = `600/users/${localUserId}`;
    const apiUrl = `${baseUrl}${apiPath}`;
    const changePwsForm = document.querySelector('[name="changePwsForm"]');
    const popup = document.querySelector(".popupBG");

    axios.patch(apiUrl, {
        password
    }, token)
        .then(function (response) {
            changePwsForm.reset();
            alert("更改密碼成功");
            popup.style.display = "none";
        })
        .catch(function (error) {
            alert(error.response.data);
        });
}

function changePwdBtn() {
    const changePwsForm = document.querySelector('[name="changePwsForm"]');

    changePwsForm.addEventListener("click", e => {
        if (e.target.type === "submit") {
            if (changePwsForm["密碼"].value.trim() === "" || changePwsForm["再次輸入密碼"].value.trim() === "") {
                alert("不得為空");
            } else if (changePwsForm["密碼"].value !== changePwsForm["再次輸入密碼"].value.trim()) {
                alert("密碼不相等")
            } else if (changePwsForm["密碼"].value === changePwsForm["再次輸入密碼"].value.trim()) {
                patchPassword(changePwsForm["密碼"].value);
            }
        }
    })
}

function getUserInfor() {
    const apiPath = `600/users/${localUserId}`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl, token)
        .then(function (res) {
            userData = res.data;
            console.log(userData)
            renderData();
        })
        .catch(function (error) {
            console.log(error)
        })
}

function renderData() {
    document.querySelector(".name").textContent = userData.name;
    document.querySelector(".mail").textContent = userData.email;
}

function clickListLink() {
    const funcListLink = document.querySelectorAll(".funcList a");

    funcListLink.forEach(item => {
        item.addEventListener("mouseup", e => {
            e.preventDefault();
            keyword = e.target.dataset.name;
            window.location.assign(`./user_list.html?type=${keyword}`);
        })
    })
}