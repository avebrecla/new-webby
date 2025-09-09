'use client';

import { useEffect, useState } from 'react';
import { fetchWeatherApi } from 'openmeteo';

const params = {
    latitude: 35.994,
    longitude: -78.8986,
    current: ["temperature_2m", "relative_humidity_2m", "precipitation", "cloud_cover"],
    timezone: "America/New_York",
    forecast_days: 1,
    wind_speed_unit: "mph",
    temperature_unit: "fahrenheit",
    precipitation_unit: "inch"
};
const url = "https://api.open-meteo.com/v1/forecast";

export function WeatherData() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const responses = await fetchWeatherApi(url, params);
            const response = responses[0];
            const current = response.current();
            setWeatherData({
                temperature_2m: Math.round(current.variables(0).value()),
                relative_humidity_2m: current.variables(1).value(),
                precipitation: current.variables(3).value(),
                cloud_cover: current.variables(3).value()
            });
        }
        fetchData();
    }, []);

    if (!weatherData) return <div>weather loading...</div>;

    return (
        <div className="">
            <p className="pb-2">current weather in chapel hill, nc --&gt;</p>
            <div className="flex indent-5">
                <div className="w-1/3">
                    <h2 className="inline-block">{weatherData.temperature_2m}&deg;</h2>
                </div>
                <div className="w-2/3 flex flex-col">
                    <div className="flex-1">
                        <p className="px-2">humidity: {weatherData.relative_humidity_2m}%</p>
                    </div>
                    <div className="flex-1">
                        <p className="px-2"> clouds: {weatherData.precipitation}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}