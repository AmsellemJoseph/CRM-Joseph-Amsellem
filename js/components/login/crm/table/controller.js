import * as View from "./view.js"
import * as Model from "./model.js"
// import * as Crm from "../controller.js"
import * as Delete from "./delete/controller.js"

export function init(arr)
{
    View.users(arr)
    Model.yuyu();
    var containerUsers = document.getElementById("containerUsers");

        var editableTable = new BSTable("table", {
            
            onEdit: function () { },
            
            onBeforeDelete: function () { },
            
            onDelete: function () { } ,
            
            onAdd: function () { },
            
        });
        editableTable.init();
        editableTable.refresh();
;


}