import * as Table from "../table/controller.js"
import * as View from "./view.js"
import * as Model from "./model.js"
import * as VerifPin from "./verifPin/controller.js"
import * as VerifUserName from "./verifUserName/controller.js"

export function init(arr) {
    View.form(arr);
    var addUser = document.getElementById("addUser");
    addUser.addEventListener("submit", async function (e) {
        e.preventDefault();
        if (await Model.registration(this)) {
            arr.push(Model.arrUser.arr);
            Table.init(arr);
        }

    })
    var pin = document.getElementById("pin");
    pin.addEventListener("keyup", function () {
        VerifPin.verify(this);
    })

    var verifuserName = document.querySelector(".verifuserName");
    verifuserName.addEventListener("change", function () {
        VerifUserName.verify(this);
    })
}