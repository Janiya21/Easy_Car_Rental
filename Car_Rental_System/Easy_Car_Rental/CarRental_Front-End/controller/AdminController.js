$("#loginBtn").click(function (){

});

loginCheck();

function loginCheck(){

    let username = $("#txtAdminUserName").val();
    let password = $("#txtAdminPassword").val();

    $.ajax({
        url: baseUrl + "api/v1/admin",
        method: "GET",
        success: function (resp) {
            let data = resp.data;
            for (let ad of data) {
                console.log(ad.userName , ad.password);
                if(username === ad.userName){
                    if(password === ad.password){

                    }else{
                        alert("Wrong Password !!");
                    }
                }
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
}