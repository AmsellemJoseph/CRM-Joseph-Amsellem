import * as View from "./view.js";
import * as Model from "./model.js";
import * as Crm from "../login/crm/controller.js"
import * as Username from "../userName/controller.js"

export function init(username) {
    View.init();
    console.log(username);
    Model.login.tryPin = 3;
    location.hash = "#pin"
    var container = document.querySelector(".containerPin");
    Model.login.initEvent();

    container.addEventListener("click", async () => {
        Model.login.btnPin();
        if (Model.login.pin.length == 4) {
            if (await Model.login.goodPass(username, Model.login.pin)) {
                if (await Model.login.data[0].role != null) {
                    Model.login.validate.play();
                    clearTimeout(Model.login.xTimeout);
                    View.welcome(Model.login.data[0].fName, Model.login.data[0].lName);
                    return Crm.init(Model.login.data[0])
                }
            } else {
                View.error();
            } if (Model.login.tryPin == 0) {
                Model.login.police.play();
                View.police();
                Username.init();
            }
            // console.log(Model.login.tryPin);
        }
    })


}
