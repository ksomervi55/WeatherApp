// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("#btnGo").on("click", function () {
    let longitude = $("#longitude").val();
    let latitude = $("#latitude").val();
    if (longitude == '' || latitude == '') {
        $('#errorContainer').text("Please enter two values!");
        $('#errorContainer').show();
    }
    else {
        $.ajax({
            url: "/Home/GetWeather",
            data: {
                longitude: longitude,
                latitude: latitude
            },
            success: function (result) {
                $("#weatherResult").html(result);
            },
            error: function () {
                $("#weatherResult").text("Whoops something went wrong please check your inputs and try again!");
            }
        });
    }
});
$(".textInput").on("input", function () {
    $('#errorContainer').hide();
});