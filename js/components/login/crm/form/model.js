export async function registration(form) {
    arrUser.arr={};
    var result = false;
    var form_Data = new FormData(form);
    var arr = [];
    for (const input of form_Data.entries()) {
        arr.push({ key: input[0], val: input[1] });
    }

    var settings = {
        url: "https://crm-joseph-amselle-d8a9b3.appdrag.site/api/crm%20users/addUser",
        data: {
            fName: arr[0].val,
            lName: arr[1].val,
            userName: arr[2].val,
            PIN: arr[3].val,
            role: arr[4].val
        },
        "method": "POST",
        "async": true,
        "crossDomain": true,
        "processData": true
    };
    await $.ajax(settings).done(function (response) {
        if (response.status == "OK" && response.affectedRows == 1) {
            result = true;
            arrUser.arr={id: 1, fName: arr[0].val, lName: arr[1].val, userName: arr[2].val, PIN: arr[3].val, role:arr[4].val};
        }
    });
    return result;
}
export const arrUser = {
    arr:{}
}