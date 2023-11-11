// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
window.$ = require('../lib/jquery/dist/jquery');
// Write your JavaScript code.
$(document).ready(function () {
    site.setUpElements();
});

const site = (() => {

    const setUpElements = () => {
        $("#btnGo").click(function () {
            let longitude = $("#longitude").val();
            let latitude = $("#latitude").val();
            console.log("long,lat= " + longitude + ", " + latitude);
            site.getWeather(longitude, latitude)
        });
        $(".textInput").on("input", function () {
            $('#errorContainer').hide();
        });
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
                success: obj.handleSuccess,
                error: obj.handleError
            });
        }
    }
    const handleError = () => {
        $("#weatherResult").text("ERROR");
    };
    const handleSuccess = (result) => {
        $("#weatherResult").html(result);
    };
    const render = () => {
        return "<div>some stuff</div>";
    };
    const obj = {
        setUpElements,
        getWeather,
        handleError,
        handleSuccess,
        render,
    };
    return obj;
})();
module.exports = site;