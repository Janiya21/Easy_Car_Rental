let baseUrl = "http://localhost:8081/easyRents/";

loadTheLastUploadedImage();

$("#btnUpload").click(function () {
    var data = new FormData();
    let file = $("#file")[0].files[0];
    let fileName = $("#file")[0].files[0].name;
    data.append("myFile", file, fileName);

    $.ajax({
        url: baseUrl + "api/v1/customer/upload",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            alert("Image Successfully Uploaded");
            loadTheLastUploadedImage();
        },
        error: function (err) {
            console.log(err);
        }
    });
});

$("#btnLoad").click(function () {
    loadTheLastUploadedImage();
});

function loadTheLastUploadedImage() {
    $("#table").empty();
    $.ajax({
        url: baseUrl + "api/v1/customer/download",
        method: 'get',
        dataType: 'json',
        success: function (resp) {

            let url = resp.data[resp.data.length - 1];

            $("#display").css({
                "background": `url(${baseUrl + url})`,
                "background-size": "cover",
                "height": "300px"
            });

            for (let i in resp.data) {
                let row = `<tr><td><img src="${baseUrl + resp.data[i]}" width="100px"></td></tr>`;
                $("#table").append(row);
            }

        },
        error: function (err) {
            console.log(err);
        }
    });
}