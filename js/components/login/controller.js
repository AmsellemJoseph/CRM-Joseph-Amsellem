import * as View from "./view.js";
import * as Model from "./model.js";
import * as Crm from "../login/crm/controller.js"

export function init() {
    var tryPin=3;
    View.init();
    var btnUsername = document.getElementById("btnUsername");
    btnUsername.addEventListener("click", () => {
        Model.login.getUserName();
        View.login();
        Model.login.initEvent();
    })

    document.addEventListener("click", async () => {
        Model.login.btnPin();
        if (Model.login.pin.length == 4) {
            if (await Model.login.goodPass(Model.login.username, Model.login.pin)) {
                if (Model.login.data[0].role == "Big Boss") {
                    Model.login.validate.play();
                    Crm.init(Model.login.data[0])
                }
            }
            tryPin--;
            if(tryPin==0){
                Model.login.police.play();
                View.police();
            }
        }
    })

    // for(let i=0;i<num.length;i++){
    //     num[i].addEventListener("keypress"==i,Model.composition);
    // }
}
// document.addEventListener("keypress",(e)=>{
//     console.log(e);
// })
