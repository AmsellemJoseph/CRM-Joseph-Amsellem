import * as View from "./view.js"
import * as Model from "./model.js"
import * as Table from "../controller.js"

export async function deleteUser(user,arr){
    var yu = Model.spliceArr(user,arr)
    Model.deleteUser(user);
    Table.init(yu);
}