import * as View from "./view.js"
import * as Model from "./model.js"
// import * as Crm from "../controller.js"
import * as Delete from "./delete/controller.js"

export function init(arr)
{
    View.users(arr)
    Model.yuyu();
    var containerUsers = document.getElementById("containerUsers");

        var trash = document.querySelectorAll(".trash");
        for(let i=0;i<trash.length;i++){
            trash[i].addEventListener("click",async function(){
               await Delete.deleteUser(this.id,arr);
                View.deleteUser(this.parentElement.parentElement);
            })
        }

}