import * as View from "./view.js";
import * as Model from "./model.js";
import * as Crm from "../login/crm/controller.js"

export function init(username) {
    Model.login.tryPin = 6;
    location.hash = "#pin"
    View.init();
    Model.login.initEvent();

    document.addEventListener("click", async () => {
        Model.login.btnPin();

        if (Model.login.pin.length == 4) {

            if (await Model.login.goodPass(username, Model.login.pin)) {
                if (await Model.login.data[0].role == "Big Boss") {
                    Model.login.validate.play();
                   return Crm.init(Model.login.data[0])
                }
            }else{
            } if (Model.login.tryPin==0) {
                Model.login.police.play();
                View.police();
            }
            console.log(Model.login.tryPin);
        }
    })
        


}
