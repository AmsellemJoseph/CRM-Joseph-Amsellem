export async function verify(username) {
    var flag=false;
    var URL = `https://crm-joseph-amselle-d8a9b3.appdrag.site/api/crm%20users/verifyUserName?userName=${username}`;

    await $.get(URL).then((data) => {
        if(data.Table !=null && data.Table.length>0){
            flag=true;
        }
    })
    return flag;
}