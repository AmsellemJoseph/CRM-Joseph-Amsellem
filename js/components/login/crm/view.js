
var main = document.getElementById("main");
var toAppend="";
export function users(arr){
    toAppend="";
    arr.forEach(arr => {
        toAppend+=`<div class="user${arr.id}">
        <h1>${arr.fName} ${arr.lName}</h1>
        <h3>${arr.role}</h3>
        </div>`
    });
    main.innerHTML=toAppend;
}