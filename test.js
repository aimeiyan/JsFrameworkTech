/**
 * Created by feng on 5/16/2016.
 */


/*
 Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.5
 Version: 1.9.0
 Author: Sean Ngu
 Website: http://www.seantheme.com/color-admin-v1.9/admin/
 */
var handleDataTableButtons = function () {
    "use strict";
    0 !== $("#data-table").length && $("#data-table").DataTable({
        dom: "Bfrtip",
        buttons: [{extend: "copy", className: "btn-sm"}, {extend: "csv", className: "btn-sm"}, {
            extend: "excel",
            className: "btn-sm"
        }, {extend: "pdf", className: "btn-sm"}, {extend: "print", className: "btn-sm"}],
        responsive: !0
    })
}, TableManageButtons = function () {
    "use strict";
    return {
        init: function () {
            handleDataTableButtons()
        }
    }
}();