
const { handleSuccess } = require('../../wwwroot/js/site');
const site = require('../../wwwroot/js/site');
const $ = require('../lib/jquery/dist/jquery');
describe("Ajax", () => {
  

    beforeEach(() => {
        jest.restoreAllMocks();
    });
    it("Data should load", () => {
        const ajaxSpy = jest.spyOn($, "ajax");
        const functionType = ( site.handleError.toString())
        site.getWeather(1, 3);
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
        site.handleSuccess("TEST")
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
        site.handleError();
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
    

    const spy = jest.spyOn(site, "getWeather");

    let btn = document.getElementById("btnGo");
    site.setUpElements();
    btn.click();
    expect(site.getWeather).toBeCalled();
});