

var main = document.getElementById("main");
var toAppend="";

export function init(){
    toAppend = `<div class="generalContainer">
    <div id="containerForm"></div>
    <div id="containerUsers"></div>
    </div>`
    main.innerHTML=toAppend;
}
