import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
export function MoistureSensors() {
  const [sensors, setSensors] = useState([
    { name: "Soil Moisture - Field 1", value: 60 },
    { name: "Soil Moisture - Field 2", value: 45 },
    { name: "Soil Moisture - Field 3", value: 30 },
  ]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Moisture Sensors</CardTitle>
      </CardHeader>
      <CardContent>
        {sensors.map((sensor) => (
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
