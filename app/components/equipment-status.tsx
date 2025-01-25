import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Antenna } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchMoistureSensor, fetchNpk as fetchNpkSensor } from "@/lib/db";

enum EquipmentType {
  SoilMoisture = 1,
  Npk,
}

export function EquipmentStatus() {
  const [equipment, setEquipment] = useState([
    {
      name: "Soil Moisture - Field 1",
      type: EquipmentType.SoilMoisture,
      id: 0,
      status: "",
      icon: Waves,
    },
    {
      name: "Soil Moisture - Field 2",
      type: EquipmentType.SoilMoisture,
      id: 1,
      status: "",
      icon: Waves,
    },
    {
      name: "Soil Moisture - Field 3",
      type: EquipmentType.SoilMoisture,
      id: 2,
      status: "",
      icon: Waves,
    },
    {
      name: "Soil Moisture - Field 4",
      type: EquipmentType.SoilMoisture,
      id: 3,
      status: "",
      icon: Waves,
    },
    {
      name: "Npk",
      type: EquipmentType.Npk,
      status: "",
      id: 0,
      icon: Antenna,
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const updatedSensors = [];
      for (let i = 0; i < equipment.length; i++) {
        const sensor = { ...equipment[i] }; // Create a copy of the sensor to maintain immutability

        if (sensor.type === EquipmentType.SoilMoisture) {
          const moistureSensor = await fetchMoistureSensor(sensor.id);
          console.log(moistureSensor);
          sensor.status =
            !moistureSensor?.value || moistureSensor.value < 1
              ? "Non-operational"
              : "Operational";
        } else if (sensor.type === EquipmentType.Npk) {
          const npkSensor = await fetchNpkSensor();
          sensor.status =
            !npkSensor?.nitrogen || npkSensor.nitrogen < 1
              ? "Non-operational"
              : "Operational";
        }

        updatedSensors.push(sensor); // Add the updated sensor to the array
      }

      setEquipment(updatedSensors); // Update the state with the new array
    };

    fetchData();
  }, []); // Dependency on equipment to trigger the effect when it changes

  return (
    <Card>
      <CardHeader>
        <CardTitle>Equipment Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {equipment.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </div>
              <Badge
                variant={
                  item.status === "Operational" ? "default" : "destructive"
                }
                className="capitalize"
              >
                {item.status}
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
