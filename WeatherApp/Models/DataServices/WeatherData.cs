using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace WeatherApp;

public class WeatherData
{
    [JsonProperty("latitude")]
    public float Latitude { get; set; }
    [JsonProperty("longitude")]
    public float Longitude { get; set; }
    [JsonProperty("current_weather")]
    public CurrentWeather CurrentWeather { get; set; }
}
public struct CurrentWeather
{
    [JsonProperty("time")]
    public DateTime Time { get; set; }
    [JsonProperty("temperature")]
    public float Temperature { get; set; }
    [JsonProperty("windspeed")]
    public float Windspeed { get; set; }
    [JsonProperty("winddirection")]
    public float WindDirection { get; set; }
    [JsonProperty("weathercode")]
    public int WeatherCode { get; set; }
    [JsonProperty("is_day")]
    public int IsDay { get; set;}
}
