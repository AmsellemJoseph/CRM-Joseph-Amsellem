export function yuyu(){
    $("#table").fancyTable({
          sortColumn:0,// column number for initial sorting
          sortOrder:'descending',// 'desc', 'descending', 'asc', 'ascending', -1 (descending) and 1 (ascending)
          sortable:true,
          pagination:true,// default: false
          searchable:true,
          globalSearch:true,
        //   globalSearchExcludeColumns: [6]// exclude column 2 & 5
        });  
}
export const arrUser = {
  arrMaj:[]
}

export async function maj(){
  arrUser.arrMaj=[];
  var settings = {
    "url": "https://crm-joseph-amselle-d8a9b3.appdrag.site/api/crm%20users/getAllUsers",
  }
await $.get(settings).done(function (response) {
    arrUser.arrMaj = response.Table;
    // console.log(arrUser.arrMaj)
});
}