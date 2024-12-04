import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Sensors() {
  const sensors = [
    { name: "Water Tank Level", value: 75 },
    { name: "Soil Moisture - Field 1", value: 60 },
    { name: "Soil Moisture - Field 2", value: 45 },
    { name: "Soil Moisture - Field 3", value: 30 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sensors</CardTitle>
      </CardHeader>
      <CardContent>
        {sensors.map((sensor) => (
          <div key={sensor.name} className="mb-4">
            <div className="flex justify-between mb-1">
              <span>{sensor.name}</span>
              <span>{sensor.value}%</span>
            </div>
            <Progress value={sensor.value} />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

