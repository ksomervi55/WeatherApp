// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
if($ == undefined)
    window.$ = require('../lib/jquery/dist/jquery');
// Write your JavaScript code.
$(document).ready(function () {
    setupElements();
});


const setupElements = () => {
        $("#btnGo").click(function () {
            let longitude = $("#longitude").val();
            let latitude = $("#latitude").val();
            console.log("long,lat= " + longitude + ", " + latitude);
            getWeather(longitude, latitude)
        });
        $(".textInput").on("input", function () {
            $('#errorContainer').hide();
        });
};


const handleError = () => {
   $("#weatherResult").text("ERROR");
};
const handleSuccess = (result) => {
    $("#weatherResult").html(result);
}
    const render = () => {
        return "<div>some stuff</div>";
    };

const getWeather = (longitude, latitude) => {
    console.log("called");
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
            success: handleSuccess,
            error: handleError
        });
    }

}
exports.getWeather = getWeather;
exports.handleSuccess = handleSuccess;
exports.handleError = handleError;
exports.render = render;
exports.setupElements = setupElements;

