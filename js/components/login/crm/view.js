

var main = document.getElementById("main");
var toAppend="";

export function init(){
    toAppend = `<div class="generalContainer">
    <div id="containerForm"></div>
    <div id="containerUsers"></div>
    </div>`
    main.innerHTML=toAppend;
}
// export function users(arr){
//     var containerUsers = document.getElementById("containerUsers");
//     toAppend=`<table id="sampleTableA" class="table table-striped sampleTable">
//     <thead>
//         <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Username</th>
//             <th>Role</th>
//             <th>Pin</th>
//             <th>Action</th>
//         </tr>
//     </thead>
//     <tbody>`;
//     arr.forEach(arr => {
//         toAppend+=`<tr>
//         <td>${arr.fName}</td>
//         <td>${arr.lName}</td>
//         <td>${arr.userName}</td>
//         <td>${arr.role}</td>
//         <td>${arr.PIN}</td>
//         <td>yuyu</td>
//         </tr>`
//     });
//     toAppend +=`</tbody>
//     </table>`
//     containerUsers.innerHTML=toAppend;
// }