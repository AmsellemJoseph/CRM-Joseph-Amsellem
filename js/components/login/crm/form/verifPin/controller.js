import * as Model from "./model.js"
import * as View from "./view.js"

export function verify(pin){
    View.ok();
    if(pin.value.length==4){
        if(!Model.verifPin(pin)){
            View.error(pin);
        }
    }
}