import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, Droplets, Wind } from "lucide-react";
import { fetchWeather, IWeather } from "@/lib/db";
import { useEffect, useState } from "react";

export function WeatherCard() {
  const [weatherData, setWeatherData] = useState<IWeather | null>(null);

  // Fetch weather data every second
  useEffect(() => {
    const interval = setInterval(async () => {
      const data = await fetchWeather();
      if (data) {
        setWeatherData(data);
      }
    }, 1000);
    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sun className="mr-2 size-8 text-yellow-500" />
            <span className="text-2xl font-bold">
              {weatherData ? `${weatherData.tempreture}°F` : "Loading..."}
            </span>
          </div>
          <div>
            <div className="flex items-center">
              <Cloud className="mr-1 size-4" />
              <span>
                {weatherData
                  ? `${weatherData.humidity}% chance of rain`
                  : "Loading..."}
              </span>
            </div>
            <div className="flex items-center">
              <Droplets className="mr-1 size-4" />
              <span>
                {weatherData
                  ? `Humidity: ${weatherData.humidity}%`
                  : "Loading..."}
              </span>
            </div>
            <div className="flex items-center">
              <Wind className="mr-1 size-4" />
              <span>
                {weatherData
                  ? `Wind: ${weatherData.windSpeed} mph NE`
                  : "Loading..."}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
