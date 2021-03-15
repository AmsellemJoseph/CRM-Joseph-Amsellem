import * as View from "./view.js"
import * as Login from "../controller.js"
import * as Model from "./model.js"
import * as Table from "../crm/table/controller.js"
import * as Form from "../crm/form/controller.js"

export async function init(arr) {
    View.init()
    console.log(arr.role);
    switch (arr.role) {
        case "Administrateur":
            Model.roleUser.delete(Model.roleUser.dataUser);
            await Model.roleUser.admin();
            break;
        case "Manager":
            Model.roleUser.delete(Model.roleUser.dataUser);
            console.log(Model.roleUser.dataUser);
            await Model.roleUser.manager();
            Model.roleUser.dataUser.splice(0,0,arr);
            break;
        case "Vendeur":
            Model.roleUser.dataUser=[];
            Model.roleUser.dataUser.push(arr);
            break;
        default:
            break;
    }


    // if (arr.role == "Administrateur") {
    //     await Model.roleUser.admin();
    // }else if(arr.role == "Manager"){
    //     Model.roleUser.dataUser.push(arr);
    //     await Model.roleUser.manager();
    // }else if()
    Table.init(Model.roleUser.dataUser);
    Form.init(Model.roleUser.dataUser);
    // Model.roleUser.yuyu();
}