function AdminLoginCheck(){

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


function loadCustomerOrderStatus(){
    $.ajax({
        url: baseUrl + "api/v1/ride",
        method: "GET",
        success: function (resp) {
            // load all Ride Details To a Table
        },
        error: function (err) {
            console.log(err);
        }
    });
}

function changeRideStatus(){

}

// ====================================================================

loadCustomerOrderStatus();

changeRideStatus();