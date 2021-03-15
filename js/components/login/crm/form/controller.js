import * as Table from "../table/controller.js"
import * as View from "./view.js"
import * as Model from "./model.js"

export function init(arr){
    View.form(arr);
    var addUser = document.getElementById("addUser");
    addUser.addEventListener("submit",async function(e){
        e.preventDefault();
        if(await Model.registration(this)){
            arr.push(Model.arrUser.arr);
            Table.init(arr);
            console.log(arr);
        }

    })
}