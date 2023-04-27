using Newtonsoft.Json;
using RestSharp;

namespace WeatherApp.Models;

public class WeatherModel { 

    private static readonly RestClientOptions restClientOptions = new RestClientOptions("https://api.open-meteo.com/v1/");
    private readonly RestClient _weatherClient = new RestClient(restClientOptions);
    public WeatherModel(float latitude, float longitude)
    {  
        Latitude = latitude;
        Longitude = longitude;
    }
    public WeatherModel(float latitude, float longitude, float temperature )
    {
        Latitude = latitude;
        Longitude = longitude;
        Temperature = temperature;
    }
    [JsonProperty("latitude")]
    public float Latitude { get; set; }
    [JsonProperty("longitude")]
    public float Longitude { get; set; }
    [JsonProperty("hourly")]
    public float Temperature { get; set; }
    /// <summary>
    /// Method uses the Latitude and Longitude to make a call to the weather api to set the current temperature
    /// </summary>
    public void GetWeatherData()
    {
        var request = new RestRequest("forecast");
        request.AddParameter("latitude", Latitude)
            .AddParameter("longitude", Longitude)
            .AddParameter("current_weather", true);

        var response = _weatherClient.Get(request);
        if (response.Content != null)
        {
            var weatherData = JsonConvert.DeserializeObject<WeatherData>(response.Content.ToString());
            if (weatherData is not null)
                Temperature = weatherData.CurrentWeather.Temperature;

        }
            
        
    }

}
