export const roleUser = {

    dataUser: [],
    dataThis:[],
    admin: async function () {
        roleUser.dataUser=[]
        var URL = `https://crm-joseph-amselle-d8a9b3.appdrag.site/api/crm%20users/getAllUsers`
        await $.get(URL).then((data) => {
            if (data.Table.length > 0) {
                roleUser.dataUser = data.Table;
                return roleUser.dataUser;
            }
        })
    },
    manager: async function(){
        roleUser.dataUser=[]
        var URL = `https://crm-joseph-amselle-d8a9b3.appdrag.site/api/crm%20users/getUserForManager`
        await $.get(URL).then((data)=>{
            if(data.Table.length>0){
                console.log(roleUser.dataUser);
                data.Table.forEach(data => {
                    roleUser.dataUser.push(data)  
                });
            }
        })
        return roleUser.dataUser;
    },
    delete:function(arr){
        var length = arr.length;

        for(let i=0;i<length;i++){
            arr.pop();
        }
    },
    // yuyu:function(){
    //     $("#sampleTableA").fancyTable({
    //           sortColumn:0,// column number for initial sorting
    //           sortOrder:'descending',// 'desc', 'descending', 'asc', 'ascending', -1 (descending) and 1 (ascending)
    //           sortable:true,
    //           pagination:true,// default: false
    //           searchable:true,
    //           globalSearch:true,
    //         //   globalSearchExcludeColumns: [6]// exclude column 2 & 5
    //         });
            
    // }
}