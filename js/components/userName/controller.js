import * as View from './view.js';
import * as Model from './model.js'
import * as Login from '../login/controller.js'

export function init(){
    location.hash="#userName";
    View.init();
    var btnUsername = document.getElementById("btnUsername");
    
    btnUsername.addEventListener("click", () => {
        var username = document.getElementById("userName").value;
       return Login.init(document.getElementById("userName").value);
    })

}