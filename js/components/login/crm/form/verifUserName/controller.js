import * as View from "./view.js";
import * as Model from "./model.js"

export async function verify(userName) {
    if (await Model.verify(userName.value)) {
        return View.error(userName)
        //    return alert("NON!!")
    } else {
        return View.ok(userName);
        //    return alert("OK!!")
    }
}