using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WeatherApp.Models;

namespace WeatherApp.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;


    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Home()
    {
        return View();
    }
    /// <summary>
    /// Creates a new weather model with the latitude and longitude that is passed by an ajax call
    /// </summary>
    /// <param name="longitude">user input longitude</param>
    /// <param name="latitude">user inputed latitude</param>
    /// <returns>Weather result partial that contains the data returned from the api</returns>
    [HttpGet]
    public IActionResult GetWeather(float longitude, float latitude)
    {
        try
        {
            var model = new WeatherModel(longitude, latitude);
            model.GetWeatherData();
            return PartialView("_WeatherResultPartial", model);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex.Message);
            return BadRequest(ex.Message);
        }
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}