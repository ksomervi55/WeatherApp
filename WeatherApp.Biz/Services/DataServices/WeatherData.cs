using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace WeatherApp.Biz.Services.DataServices
{
    public class WeatherData
    {
        [JsonProperty("latitude")]
        public float Latitude { get; set; }
        [JsonProperty("longitude")]
        public float Longitude { get; set; }

    }
}
