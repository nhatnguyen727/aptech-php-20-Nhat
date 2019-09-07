var table;
var url = "https://namcoi.com/projects/users-crud-laravel/public/api/users";
function initTableData() {
 $.get(url, function(responseData){
   //alert(`responseData = ${JSON.stringify(responseData)}`),
  // var Data = JSON.stringify(responseData);
    table = $('#table_id').DataTable({
      "processing": true,
      data: Data,
      columns: [
        { data: 'id' },
            { data: 'name' },
            { data: 'email' },
            { data: 'password'},
            { data: 'created_at' },
            { data: 'updated_at' }
      ]
    })
 });

}

$(document).ready(function() {
   initTableData();
   $("#list-header").on({
       mouseenter: function(){
            $(this).css("background-color", "lightgray");
       },
       mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }

   });
} );
//typeoff kta kieu du lieu
