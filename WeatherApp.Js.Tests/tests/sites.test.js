
const { getWeather } = require('../../WeatherApp/wwwroot/js/site.js');
const { handleSuccess } = require('../../WeatherApp/wwwroot/js/site.js');
const { handleError } = require('../../WeatherApp/wwwroot/js/site.js');
const { setupElements } = require('../../WeatherApp/wwwroot/js/site.js');
const $ = require('../../WeatherApp/wwwroot/lib/jquery/dist/jquery');
describe("Ajax", () => {


    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it("Data should load", () => {
        const ajaxSpy = jest.spyOn($, "ajax");
        const functionType = (handleError.toString())
        getWeather(1, 3);
        expect(ajaxSpy).toHaveBeenCalled();

    });

    it("should handle success", () => {
        const logSpy = jest.spyOn(console, "log");
        document.body.innerHTML =
            '<div>' +
            '  <div id="weatherResult"></div>' +
            '  <input id="longitude" value="2"/>' +
            '  <input id="latitude" value="1"/>' +
            '  <button id="btnGo" />' +
            '</div>';
        handleSuccess("TEST")
        expect($("#weatherResult").text()).toBe("TEST");
    });
    test("should handle error", () => {
        const logSpy = jest.spyOn(console, "log");
        document.body.innerHTML =
            '<div>' +
            '  <div id="weatherResult"></div>' +
            '  <input id="longitude" value="2"/>' +
            '  <input id="latitude" value="1"/>' +
            '  <button id="btnGo" />' +
            '</div>';
        handleError();
        let errorText = $("#weatherResult").text();
        expect(errorText).toBe("ERROR");
    });
});
test("button clicks", () => {
    document.body.innerHTML =
        '<div>' +
        '  <div id="weahterResult"></div>' +
        '  <input id="longitude" value="2"/>' +
        '  <input id="latitude" value="1"/>' +
        '  <button id="btnGo" />' +
        '</div>';

    let ajax = jest.spyOn($, "ajax");

    let btn = document.getElementById("btnGo");
    setupElements();
    btn.click();
    expect(ajax).toBeCalled();
});