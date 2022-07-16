let baseUrl = "http://localhost:8081/easyRents/";

$("#loginBtn").click(function (){

});

function loginCheck(){
    $.ajax({
        url: "http://localhost:8081/easyRents/api/v1/admin",
        method: "GET",
        success: function (resp) {

        }
    });
}