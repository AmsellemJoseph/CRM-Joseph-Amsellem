// var main = document.getElementById("main");
var toAppend="";

export function users(arr){
    var containerUsers = document.getElementById("containerUsers");
    toAppend=`<h1 id="current">Current Employees</h1>
    <table id="table" class="table table-striped">
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Pin</th>
        </tr>
    </thead>
    <tbody>`;
    arr.forEach(arr => {
        toAppend+=`<tr>
        <td>${arr.fName}</td>
        <td>${arr.lName}</td>
        <td>${arr.userName}</td>
        <td>${arr.role}</td>
        <td>${arr.PIN}</td>
        </tr>`
    });
    toAppend +=`</tbody>
    </table>`
    containerUsers.innerHTML=toAppend;
}

export function deleteUser(user){
    user.style.display = "none";
}