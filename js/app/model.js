import * as Login from '../components/login/controller.js'
import * as Username from '../components/userName/controller.js'

export function virtualRouter() {
    var hash = location.hash;
    switch (hash) {
        case '#home':
            Username.init();
            break;
        case '#pin':
            Login.init();
            break;
        default:
            break;
    }
}