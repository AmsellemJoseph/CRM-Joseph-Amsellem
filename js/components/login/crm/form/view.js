export function form(arr){
    var toAppend = "";
    if(arr[0].role=="Administrateur" || arr[0].role=="Manager")
    var containerForm = document.getElementById("containerForm");
    toAppend = `<form method="POST" id="addUser">
    <div id="arrangeForm">
    <input type="text" name="fName" placeholder="First Name" class="inp" required>
    <input type="text" name="lName" placeholder="Last Name"class="inp" required>
    <div>
    <input type="text" name="userName" placeholder="Username"class="inp verifuserName" required>
    <div id="verifuserName"><p>This username already exists</p></div></div>
    <div>
    <input type="text" name="PIN" placeholder="Enter a password" maxlength="4" minlength="4"class="inp" id="pin" required>
    <div id="verifPin"><p>Please choose a password with four different digits</p></div></div>
    <select name="role" id="role" class="inp" required>
        <option value="" disabled>Choose a role</option>`
        if(arr[0].role=="Administrateur"){
            toAppend +=`<option value="Manager">Manager</option>`
        }
        toAppend+=`<option value="Vendeur">Vendeur</option>
    </select>
    <input type="submit" value="Add an employee" class="inp">
    </div>
</form>`
containerForm.innerHTML = toAppend;
}