function DriverLoginCheck(){

    let username = "" ;
    let password = "";

    $.ajax({
        url: baseUrl + "api/v1/driver",
        method: "GET",
        success: function (resp) {
            let data = resp.data;
            for (let ad of data) {
                if(username === ad.driverId){
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