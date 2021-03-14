



const login = {
    tryPin: 6,
    pin: "",
    xTimeout: null,

    data: [],
    num1: document.getElementById("num1"),
    bip: new Audio("assets/sounds/validate.mp3"),
    validate: new Audio("assets/sounds/btn.mp3"),
    police: new Audio("assets/sounds/police.mp3"),

    composition: function () {
        login.bip.play();
        login.countDown();
        if (login.countDown()) {
            login.pin = "";
        }

        $(this).animate({ color: "#f1f1f1", backgroundColor: "#a976c3", borderColor: "#f1f1f1" }, 200);
        login.pin = login.pin + this.getAttribute("data-value");

        this.removeEventListener("click", login.composition);
        if (login.count(login.pin)) {
            setTimeout(() => {
                login.initEvent();
                login.pin = "";
            }, 300);
        };

    },

    initEvent: function () {
        var num = document.querySelectorAll(".num");
        for (let i = 0; i < 10; i++) {
            num[i].addEventListener("click", login.composition);
            $(num[i]).animate({ color: "#a976c3", backgroundColor: "f1f1f1" }, 200);
        }
    },
    btnPin: function () {
        var num = document.querySelectorAll(".num");
        for (let i = 0; i < 10; i++) {
            num[i].addEventListener("click", async () => {
                login.composition;
            });
        }
    },
    // click:function(){
    //     var num = document.querySelectorAll(".num");
    //     for (let i = 0; i < 10; i++) {
    //         num[i].addEventListener("click", async () => {
    //             Model.login.composition;
    //             if (Model.login.pin.length == 4) {
    //                 if (await Model.login.goodPass(Model.login.username, Model.login.pin)) {
    //                     arr = Model.login.data;
    //                     if (arr[0].role == "Big Boss") {
    //                         Crm.init(arr)
    //                     }
    //                 }
    //             }
    //         });
    //     }
    // },

    countDown: function () {

        clearTimeout(login.xTimeout);
        login.xTimeout = setTimeout(() => {
            login.initEvent();
            login.pin = "";
            return true;
        }, 1500);
    },

    count: function (x) {
        var flag = false;
        if (x.length >= 4) {
            flag = true;
        }

        return flag;
    },

    goodPass: async function (x, y) {
        var flag = false;
        var URL = `https://crm-joseph-amselle-d8a9b3.appdrag.site/api/crm users/getUserByCat?username=${x}&pin=${y}`
        await $.get(URL).then((data) => {
            if (data.Table != null && data.Table.length > 0) {
                // login.tryPin++;
                login.data = data.Table;

                flag = true
            }
            login.tryPin--;
        })
        return flag;
    },
    verif: async function (x) {
        if (x.length > 0) {
            return true;
        }
    },
    // click:async function(){
    //     login.btnPin();

    //     if (login.pin.length == 4) {

    //         if (await login.goodPass(username, login.pin)) {
    //             if (await Model.login.data[0].role != null) {
    //                 Model.login.validate.play();
    //                return Crm.init(Model.login.data[0])
    //             }
    //         }else{
    //         } if (Model.login.tryPin==0) {
    //             Model.login.police.play();
    //             View.police();
    //         }
    //         console.log(Model.login.tryPin);
    //     }
    // }

}





export { login }