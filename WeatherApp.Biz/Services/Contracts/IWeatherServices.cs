using WeatherApp.Biz.Services.DataServices;

namespace WeatherApp.Biz.Services.Contracts
{
    public interface IWeatherServices
    {
        WeatherData? GetWeatherData(float longitude, float latitude);
    }
}
