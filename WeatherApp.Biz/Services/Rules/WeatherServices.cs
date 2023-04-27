using Newtonsoft.Json;
using RestSharp;
using System.Net;
using WeatherApp.Biz.Services.Contracts;
using WeatherApp.Biz.Services.DataServices;

namespace WeatherApp.Biz.Services.Rules
{
    public class WeatherServices : IWeatherServices
    {
        private readonly RestClient _weatherClient;
        private readonly string apiUrl = "https://api.open-meteo.com/v1/";
        public WeatherServices(RestClient weatherClient) { 
            
            _weatherClient = new RestClient(new RestClientOptions("https://api.open-meteo.com/v1"));
        }
        public WeatherData? GetWeatherData(float longitude, float latitude)
        {
            var request = new RestRequest("forcast");
            request.AddParameter("latitude", longitude)
                .AddParameter("longitude", longitude);
            var response = _weatherClient.Get(request);
            if (response.StatusCode == System.Net.HttpStatusCode.OK)
            {
                if (response.Content != null)
                {
                    var weatherData = JsonConvert.DeserializeObject<WeatherData>(response.Content.ToString());
                    return weatherData;
                }
            }
            return new WeatherData();
        }
    }
}
