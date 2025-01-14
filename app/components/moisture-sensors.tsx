import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { fetchMoisture, IMoistureSensors } from "@/lib/db";
import { useEffect, useState } from "react";

export function MoistureSensors() {
  const [sensors, setSensors] = useState<IMoistureSensors>([
    { name: "Loading...", value: 0 },
    { name: "Loading...", value: 0 },
    { name: "Loading...", value: 0 },
    { name: "Loading...", value: 0 },
  ]);
  const [refreshInterval, setRefreshInterval] = useState(1000); // Default to 1 second
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Access localStorage only in the browser
    const interval = Number(localStorage.getItem("refreshInterval"));
    if (!isNaN(interval)) setRefreshInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMoisture();
        if (response) {
          setSensors(response);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching moisture sensors:", error);
        setLoading(false);
      }
    };
    setInterval(() => fetchData(), refreshInterval);
  }, [refreshInterval]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Moisture Sensors</CardTitle>
      </CardHeader>
      <CardContent>
        {loading
          ? sensors.map((_, index) => (
              <div key={index} className="mb-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-gray-400 animate-pulse">
                    Loading...
                  </span>
                  <span className="text-gray-400 animate-pulse">0%</span>
                </div>
                <Progress value={0} className="bg-gray-200 animate-pulse" />
              </div>
            ))
          : sensors.map((sensor) => (
              <div key={sensor.name} className="mb-4">
                <div className="mb-1 flex justify-between">
                  <span>{sensor.name}</span>
                  <span>{sensor.value}%</span>
                </div>
                <Progress value={sensor.value} />
              </div>
            ))}
      </CardContent>
    </Card>
  );
}
