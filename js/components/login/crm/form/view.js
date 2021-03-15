export function form(arr){
    var toAppend = "";
    if(arr[0].role=="Administrateur" || arr[0].role=="Manager")
    var containerForm = document.getElementById("containerForm");
    toAppend = `<form method="POST" id="AddUser">
    <div id="arrangeForm">
    <div><input type="text" name="fName" placeholder="First Name" class="inp"></div>
    <div><input type="text" name="lName" placeholder="Last Name"class="inp"></div>
    <div><input type="text" name="userName" placeholder="Username"class="inp"></div>
    <div><input type="text" name="PIN" placeholder="Enter a password" maxlength="4" minlength="4"class="inp"></div>
    <div><select name="role" id="role" class="inp">
        <option value="" disabled>Choose a role</option>`
        if(arr[0].role=="Administrateur"){
            toAppend +=`<option value="Manager">Manager</option>`
        }
        toAppend+=`<option value="Vendeur">Vendeur</option>
    </select></div>
    <div><input type="submit" value="Add an employee" class="inp"></div>
    </div>
</form>`
containerForm.innerHTML = toAppend;
}