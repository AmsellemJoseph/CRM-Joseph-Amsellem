export function error(input){
    var verifPin = document.getElementById("verifPin");
    verifPin.style.display = "block";
    input.value="";
    
}
export function ok(){
    var verifPin = document.getElementById("verifPin");
    verifPin.style.display = "none";
}