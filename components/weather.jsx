import { fetchWeatherApi } from 'openmeteo';
import { Card } from './card';

const params = {
	"latitude": 35.994,
	"longitude": -78.8986,
	"current": ["temperature_2m", "relative_humidity_2m", "precipitation", "cloud_cover"],
	"timezone": "America/New_York",
	"forecast_days": 1,
	"wind_speed_unit": "mph",
	"temperature_unit": "fahrenheit",
	"precipitation_unit": "inch"
};
const url = "https://api.open-meteo.com/v1/forecast";

export function WeatherData() {
    return (
        <div className="w-full text-white pb-4">
            <div className="">
                <Weather />
            </div>
        </div>
    );
}

async function Weather() {
    const responses = await fetchWeatherApi(url, params);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    const current = response.current();

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        current: {
            temperature_2m: Math.round(current.variables(0).value()),
            relative_humidity_2m: current.variables(1).value(),
            precipitation: current.variables(3).value(),
            cloud_cover: current.variables(3).value()
        },
    };

    return (
        <div className="bg-stone-500 rounded-sm pb-2">
            <h3 className="inline-block px-4 underline">Chapel Hill, NC</h3>
            <div className="flex">
                <div className="w-1/3">
                    <h2 className="inline-block px-4">{weatherData.current.temperature_2m}&deg;</h2>
                </div>
                
                <div className="w-2/3 flex flex-col">
                    <div className="flex-1">
                        <p className="px-2">humidity: {weatherData.current.relative_humidity_2m}%</p>
                    </div>
                    
                    <div className="flex-1">
                        <p className="px-2"> clouds: {weatherData.current.precipitation}%</p>
                    </div>
                </div>
            </div>
        </div>
        ); 

}