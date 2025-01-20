import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { fetchMoistureSensor, IMoistureSensor } from "@/lib/db";
import { useEffect, useState } from "react";

export function MoistureSensors() {
  const [sensors, setSensors] = useState<IMoistureSensor[]>([
    {
      name: "Loading...",
      value: 0,
      id: 0,
    },
    {
      name: "Loading...",
      value: 0,
      id: 1,
    },
    {
      name: "Loading...",
      value: 0,
      id: 2,
    },
    {
      name: "Loading...",
      value: 0,
      id: 3,
    },
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
      const updatedSensors: IMoistureSensor[] = [];

      try {
        for (let i = 0; i < sensors.length; i++) {
          const sensorData: IMoistureSensor | null = await fetchMoistureSensor(
            sensors[i].id
          );
          if (sensorData) {
            updatedSensors.push({
              name: sensorData.name,
              value: sensorData.value,
              id: sensorData.id,
            });
          } else {
            updatedSensors.push({
              id: i,
              value: 0,
              name: `Failed To Fetch Sensor ${i}`,
            });
          }
        }

        // Now that all fetches are complete, update the state
        setSensors(updatedSensors);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching moisture sensors:", error);
        setLoading(false);
      }
    };

    // Set interval to fetch data
    const intervalId = setInterval(fetchData, refreshInterval);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [refreshInterval, sensors]); // Add sensors as a dependency to ensure it re-runs when sensors change

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
              <div key={sensor.id} className="mb-4">
                {" "}
                {/* Use sensor.id here */}
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
