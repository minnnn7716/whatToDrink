const url = location.href;
let keyword = url.split("=")[1].split("&")[0];
let inforData;
let userData;
let favoriteList;

getUserInfor();

function judgType() {
    if (keyword === "favorites") {
        titleName = "收藏清單";
    } else if (keyword === "wheels") {
        titleName = "轉盤清單";
    } else if (keyword === "comments") {
        titleName = "過往評論";
    } else if (keyword === "list-message") {
        titleName = "消息通知";
    }

    document.querySelector(".userList-titleSection").classList.add(keyword);
    document.querySelector(".titleName").textContent = titleName;
    renderDataNum(keyword);
}

function getUserInfor() {
    const apiPath = `600/users/${localUserId}`;
    const apiUrl = `${baseUrl}${apiPath}`;

    axios.get(apiUrl, token)
        .then(function (res) {
            userData = res.data;
            favoriteList = res.data.favorites;
            console.log(favoriteList)
            judgType();
            renderDataStr(keyword);
            popupAction();
        })
        .catch(function (error) {
            console.log(error)
        })
}

function renderDataNum(type) {
    const totalNum = document.querySelector(".total span");
    const wheelAddBtn = document.querySelector(".wheelAddBtn");

    if (type === "list-message") {
        totalNum.textContent = userData.messages.list.length;
    } else {
        totalNum.textContent = userData[type].length;
    }

    if (type === "wheels") {
        let str = `<a href="#" class="addList ml-2">
        <span class="mr-1">新增清單</span>
        <i class="fa-solid fa-circle-plus"></i>
        </a>`;

        wheelAddBtn.innerHTML = str;
    }
}

function renderDataStr(type) {
    const contentSection = document.querySelector(".contentSection .col-10");
    let str = "";

    if (type === "wheels") {
        userData.wheels.forEach((item, index) => {
            let baseStr = "";
            let mixStr = "";
            let materialStr = "";

            for (const [key, value] of Object.entries(item.ingredient)) {
                if (key === "base") {
                    if (value.length === 1) {
                        baseStr = `<span class="specialPoint-item specialPoint-noCaffeing mr-1">${value}</span>`;
                    } else if (value.length > 1) {
                        for (let i = 0; i < value.length; i++) {
                            baseStr += `<span class="specialPoint-item specialPoint-noCaffeing mr-1">${value[i]}</span>`;
                        }
                    } else {
                        baseStr = `<span class="specialPoint-item specialPoint-none mr-1">無</span>`;
                    }
                } else if (key === "mix") {
                    if (value.length === 1) {
                        mixStr = `<span class="specialPoint-item specialPoint-noCaffeing mr-1">${value}</span>`;
                    } else if (value.length > 1) {
                        for (let i = 0; i < value.length; i++) {
                            mixStr += `<span class="specialPoint-item specialPoint-noCaffeing mr-1">${value[i]}</span>`;
                        }
                    } else {
                        mixStr = `<span class="specialPoint-item specialPoint-none mr-1">無</span>`;
                    }
                }
                else if (key === "material") {
                    if (value.length === 1) {
                        materialStr = `<span class="specialPoint-item specialPoint-noCaffeing mr-1">${value}</span>`;
                    } else if (value.length > 1) {
                        for (let i = 0; i < value.length; i++) {
                            materialStr += `<span class="specialPoint-item specialPoint-noCaffeing mr-1">${value[i]}</span>`;
                        }
                    } else {
                        materialStr = `<span class="specialPoint-item specialPoint-none mr-1">無</span>`;
                    }
                }
            }


            str += `
            <div class="eachWheelList">
                <div class="titleSection mb-3 flex align-center justify-between">
                    <h6>${item.listName}</h6>
                    <div class="wheelBtn">
                        <i class="fa-solid fa-pen mr-2" data-func="edit" data-index="${index}"></i>
                        <i class="fa-solid fa-trash-can" data-func="delete" data-index="${index}"></i>
                    </div>
                </div>
                <div class="contentSecton row">
                    <div class="col-6">
                        <p>飲料種類</p>
                        <div class="itemSection">
                            <span class="specialPoint-item specialPoint-noCaffeing mr-1">${item.type}</span>
                        </div>
                    </div>
                    <div class="col-6">
                        <p>基底飲料</p>
                        <div class="itemSection">${baseStr}</div>
                    </div>
                    <div class="col-6">
                        <p>調和飲品</p>
                        <div class="itemSection">${mixStr}</div>
                    </div>
                    <div class="col-6">
                        <p>各種好料</p>
                        <div class="itemSection">${materialStr}</div>
                    </div>
                </div>
            </div>
            <div class="message-divider"></div>
        `;
        })
        contentSection.innerHTML = str;
        deleteWheelList();
    } else {
        getEachData(type);

        if (type === "favorites") {
            const contentSection = document.querySelector(".contentSection");

            let strHeader = `
            <div class="muen-conetent col-12">

                <ul class="menu-content-filter">
                    <li><a href="#" class="menu-content-filterBtn active">全部飲品</a></li>
                    <li><a href="#" class="menu-content-filterBtn">純茶</a></li>
                    <li><a href="#" class="menu-content-filterBtn">特調</a></li>
                    <li><a href="#" class="menu-content-filterBtn">奶系列</a></li>
                    <li><a href="#" class="menu-content-filterBtn">料多多</a></li>
                </ul>

                <div class="searchList-table row">
                    <table class="product-table col-10">
                        <thead>
                            <tr>
                                <th>品名</th>
                                <th>店家</th>
                                <th>價錢</th>
                                <th class="reteColumn">總評價</th>
                                <th>熱量</th>
                                <th class="specialColumn">特點</th>
                                <th class="facoriteColumn"><span class="hide">收藏<spna>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="favoriteTbody"></tbody>
                    </table>
                </div>
            </div>
        </div>`;
            contentSection.innerHTML = strHeader;
            contentSection.setAttribute("class", `muen-outConetent row mb-20`);
        }
    }
}

function getEachData(type) {
    let apiPath;
    if (type === "favorites") {
        apiPath = `drinks`;
    } else if (type === "comments") {
        apiPath = `comments?userId=${localUserId}`;
    } else if (type === "list-message") {
        apiPath = `messages`;
    }

    const apiUrl = `${baseUrl}${apiPath}`;
    axios.get(apiUrl)
        .then(function (res) {
            inforData = res.data;
        })
        .catch(function (error) {
            console.log(error.response)
        })
}

function deleteWheelList() {
    const wheelBtn = document.querySelectorAll(".wheelBtn i");
    const popupBG = document.querySelector(".popupBG");
    const formSection = document.querySelector(".formSection");
    const addList = document.querySelector(".addList");
    let str = "";

    wheelBtn.forEach(item => {
        item.addEventListener("click", e => {
            e.preventDefault();
            popupBG.style.display = "block";
            let index = e.target.dataset.index;

            if (e.target.dataset.func === "delete") {
                str = `
                <form class="deleteWheelList wheelForm margin-auto" name="deleteWheelList">
                    <h3>編輯轉盤清單</h3>
                    <p>確定要刪除「${userData.wheels[index].listName}」嗎？</p>
                    <div class="btnSection">
                        <a class="btn-shadow cancel" href="#" data-func="close">取消</a>
                        <input class="btn-shadow" type="submit" value="確定">
                    </div>
                </form>`;

                formSection.innerHTML = str;
            } else if (e.target.dataset.func === "edit") {
                str = `
                <form class="editWheelList margin-auto wheelForm" name="editWheelList">
                    <h3>編輯轉盤清單</h3>
                    <div class="wheelForm-selectroup mb-6">
                        <div class="wheelForm-select">
                            <label for="drinkKind">清單名稱</label>
                            <div class="filterSection flex-stretch">
                                <input type="text" value="${userData.wheels[index].listName}" class="selector">
                            </div>
                        </div>
                        <div class="wheelForm-select">
                            <label for="drinkKind">飲料種類</label>
                            <div class="filterSection flex-stretch">
                                <i class="fa-solid fa-caret-down"></i>
                                <select name="drinkKind" id="drinkKind" class="selector">
                                    <i class="fa-solid fa-caret-down"></i>
                                    <option value="請選擇" disabled selected>請選擇</option>
                                    <option value="隨機">隨機</option>
                                    <option value="純茶">純茶</option>
                                    <option value="特調">特調</option>
                                    <option value="奶奶">奶奶</option>
                                    <option value="料多多">料多多</option>
                                </select>
                            </div>
                        </div>
                        <div class="wheelForm-select">
                            <label for="drinkBase">基底飲料</label>
                            <div class="filterSection flex-stretch">
                                <i class="fa-solid fa-caret-down"></i>
                                <select name="drinkBase" id="drinkBase" class="selector">
                                    <option value="請選擇" disabled selected>請選擇</option>
                                    <option value="隨機">隨機</option>
                                    <option value="紅茶">紅茶</option>
                                    <option value="綠茶">綠茶</option>
                                    <option value="清茶">清茶</option>
                                    <option value="烏龍茶">烏龍茶</option>
                                    <option value="冬瓜茶">普洱茶</option>
                                    <option value="冬瓜茶">鐵觀音</option>
                                    <option value="冬瓜茶">冬瓜茶</option>
                                    <option value="無咖啡因茶">無咖啡因茶</option>
                                    <option value="果汁">果汁</option>
                                </select>
                            </div>
                        </div>
                        <div class="wheelForm-select">
                            <label for="drinkMix">調和飲品</label>
                            <div class="filterSection flex-stretch">
                                <i class="fa-solid fa-caret-down"></i>
                                <select name="drinkMix" id="drinkMix" class="selector">
                                    <option value="請選擇" disabled selected>請選擇</option>
                                    <option value="隨機">隨機</option>
                                    <option value="不添加">不添加</option>
                                    <option value="果汁">果汁</option>
                                    <option value="甘蔗汁">甘蔗汁</option>
                                    <option value="梅子汁">梅子汁</option>
                                    <option value="養樂多">養樂多</option>
                                    <option value="蜂蜜">蜂蜜</option>
                                    <option value="豆漿">豆漿</option>
                                </select>
                            </div>
                        </div>
                        <div class="wheelForm-select">
                            <label for="drinkMaterial">各種好料</label>
                            <div class="filterSection flex-stretch">
                                <i class="fa-solid fa-caret-down"></i>
                                <select name="drinkMaterial" id="drinkMaterial" class="selector">
                                    <option value="請選擇" disabled selected>請選擇</option>
                                    <option value="隨機">隨機</option>
                                    <option value="不添加">不添加</option>
                                    <option value="大珍珠 aka 波霸">大珍珠 aka 波霸</option>
                                    <option value="小珍珠">小珍珠</option>
                                    <option value="粉粿">粉粿</option>
                                    <option value="芋圓">芋圓</option>
                                    <option value="布丁">布丁</option>
                                    <option value="燕麥">燕麥</option>
                                    <option value="寒天">寒天</option>
                                    <option value="椰果">椰果</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="btnSection">
                        <a class="btn-shadow cancel" href="#" data-func="close">取消</a>
                        <input class="btn-shadow" type="submit" value="確定">
                    </div>
                </form>`;

                formSection.innerHTML = str;
            }
        })
    })

    addList.addEventListener("click", e => {
        e.preventDefault();
        popupBG.style.display = "block";

        let str = `
        <form class="editWheelList margin-auto wheelForm" name="editWheelList">
            <h3>新增轉盤清單</h3>
            <div class="wheelForm-selectroup mb-6">
                <div class="wheelForm-select">
                    <label for="drinkKind">清單名稱</label>
                    <div class="filterSection flex-stretch">
                        <input type="text" class="selector">
                    </div>
                </div>
                <div class="wheelForm-select">
                    <label for="drinkKind">飲料種類</label>
                    <div class="filterSection flex-stretch">
                        <i class="fa-solid fa-caret-down"></i>
                        <select name="drinkKind" id="drinkKind" class="selector">
                            <i class="fa-solid fa-caret-down"></i>
                            <option value="請選擇" disabled selected>請選擇</option>
                            <option value="隨機">隨機</option>
                            <option value="純茶">純茶</option>
                            <option value="特調">特調</option>
                            <option value="奶奶">奶奶</option>
                            <option value="料多多">料多多</option>
                        </select>
                    </div>
                </div>
                <div class="wheelForm-select">
                    <label for="drinkBase">基底飲料</label>
                    <div class="filterSection flex-stretch">
                        <i class="fa-solid fa-caret-down"></i>
                        <select name="drinkBase" id="drinkBase" class="selector">
                            <option value="請選擇" disabled selected>請選擇</option>
                            <option value="隨機">隨機</option>
                            <option value="紅茶">紅茶</option>
                            <option value="綠茶">綠茶</option>
                            <option value="清茶">清茶</option>
                            <option value="烏龍茶">烏龍茶</option>
                            <option value="冬瓜茶">普洱茶</option>
                            <option value="冬瓜茶">鐵觀音</option>
                            <option value="冬瓜茶">冬瓜茶</option>
                            <option value="無咖啡因茶">無咖啡因茶</option>
                            <option value="果汁">果汁</option>
                        </select>
                    </div>
                </div>
                <div class="wheelForm-select">
                    <label for="drinkMix">調和飲品</label>
                    <div class="filterSection flex-stretch">
                        <i class="fa-solid fa-caret-down"></i>
                        <select name="drinkMix" id="drinkMix" class="selector">
                            <option value="請選擇" disabled selected>請選擇</option>
                            <option value="隨機">隨機</option>
                            <option value="不添加">不添加</option>
                            <option value="果汁">果汁</option>
                            <option value="甘蔗汁">甘蔗汁</option>
                            <option value="梅子汁">梅子汁</option>
                            <option value="養樂多">養樂多</option>
                            <option value="蜂蜜">蜂蜜</option>
                            <option value="豆漿">豆漿</option>
                        </select>
                    </div>
                </div>
                <div class="wheelForm-select">
                    <label for="drinkMaterial">各種好料</label>
                    <div class="filterSection flex-stretch">
                        <i class="fa-solid fa-caret-down"></i>
                        <select name="drinkMaterial" id="drinkMaterial" class="selector">
                            <option value="請選擇" disabled selected>請選擇</option>
                            <option value="隨機">隨機</option>
                            <option value="不添加">不添加</option>
                            <option value="大珍珠 aka 波霸">大珍珠 aka 波霸</option>
                            <option value="小珍珠">小珍珠</option>
                            <option value="粉粿">粉粿</option>
                            <option value="芋圓">芋圓</option>
                            <option value="布丁">布丁</option>
                            <option value="燕麥">燕麥</option>
                            <option value="寒天">寒天</option>
                            <option value="椰果">椰果</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="btnSection">
                <a class="btn-shadow cancel" href="#" data-func="close">取消</a>
                <input class="btn-shadow" type="submit" value="確定">
            </div>
        </form>`;

        formSection.innerHTML = str;
    })
};


function popupAction() {
    const popupBG = document.querySelector(".popupBG");

    popupBG.addEventListener("click", e => {
        e.preventDefault();

        if (e.target.dataset.func === "close") {
            popupBG.style.display = "none";
        }
    })
}