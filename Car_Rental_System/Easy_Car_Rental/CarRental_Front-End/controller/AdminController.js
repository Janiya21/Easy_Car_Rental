function AdminloginCheck(){

    let username = "Suresh_22" ;
    let password = "sure209";

    $.ajax({
        url: baseUrl + "api/v1/admin",
        method: "GET",
        success: function (resp) {
            let data = resp.data;
            for (let ad of data) {
                if(username === ad.userName){
                    if(password === ad.password){
                        console.log("yooo");
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