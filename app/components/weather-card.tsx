import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Sun, Droplets } from "lucide-react";
import { fetchWeather, IWeather } from "@/lib/db";
import { useEffect, useState } from "react";

export function WeatherCard() {
  const [weatherData, setWeatherData] = useState<IWeather | null>(null);
  const [refreshInterval, setRefreshInterval] = useState(1000); // Default to 1 seconds

  useEffect(() => {
    // Access localStorage only in the browser
    const interval = Number(localStorage.getItem("refreshInterval"));
    if (!isNaN(interval)) setRefreshInterval(interval);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetchWeather(); // Replace with your real API call
        if (response !== null) {
          setWeatherData(response);
        }
      } catch (error) {
        console.error("Error fetching tank level:", error);
      }
    }, refreshInterval);

    // Cleanup: Clear the interval when refreshInterval changes or component unmounts
    return () => clearInterval(intervalId);
  }, [refreshInterval]); // Re-run the effect if refreshInterval changes

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
              {weatherData ? `${weatherData.tempreture}°C` : "Loading..."}
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
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
