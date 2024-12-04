import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Sun, Droplets, Wind } from 'lucide-react'

export function WeatherCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-yellow-500 mr-2" />
            <span className="text-2xl font-bold">72°F</span>
          </div>
          <div>
            <div className="flex items-center">
              <Cloud className="h-4 w-4 mr-1" />
              <span>20% chance of rain</span>
            </div>
            <div className="flex items-center">
              <Droplets className="h-4 w-4 mr-1" />
              <span>Humidity: 65%</span>
            </div>
            <div className="flex items-center">
              <Wind className="h-4 w-4 mr-1" />
              <span>Wind: 5 mph NE</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

