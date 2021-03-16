export function error(input){
    var verifuserName = document.getElementById("verifuserName");
    verifuserName.style.display = "block";
    input.value="";
    
}
export function ok(){
    var verifuserName = document.getElementById("verifuserName");
    verifuserName.style.display = "none";
}