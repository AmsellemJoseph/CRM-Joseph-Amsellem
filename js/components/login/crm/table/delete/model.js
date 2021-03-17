import * as Table from "../controller.js"
export async function deleteUser(user){
    

    var settings = {
        url: "https://crm-joseph-amselle-d8a9b3.appdrag.site/api/crm%20users/deleteUser",
        "data": {
            id : user
        },
        method: "DELETE",
        async: true,
        crossDomain: true,
        processData: true
    };
    await $.ajax(settings).done(function (response) {
        if(response.status=="OK" && response.affectedRows==1){

        }
    });
}

export function spliceArr(user,arr){
    var arrMaj=[]
    for(let i=0;i<arr.length;i++){
        if(user==arr[i].id){
            continue
        }
        arrMaj.push(arr[i])
    }
    console.log(arrMaj);
    return arrMaj;
}