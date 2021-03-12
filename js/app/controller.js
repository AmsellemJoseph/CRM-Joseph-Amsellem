import * as Login from "../components/login/controller.js"
import * as Model from './model.js'
import * as UserName from '../components/userName/controller.js'

export function init() {
    location.hash = "#home"
    window.addEventListener("hashchange", virtualRouter);
    UserName.init();
}
function virtualRouter() {
    var hash = location.hash;
    switch (hash) {
        case "#userName":
            UserName.init();
            break;
        case "#pin":
            Login.init();
            break;
        case "#home":
            init();
            break;
        default:
            break;
    }
}