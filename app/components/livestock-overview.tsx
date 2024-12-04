import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MilkIcon as Cow, Bird } from 'lucide-react'

export function LivestockOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Livestock Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Cow className="h-8 w-8 mr-2" />
            <div>
              <div className="text-sm font-medium">Cattle</div>
              <div className="text-2xl font-bold">150</div>
            </div>
          </div>
          <div className="flex items-center">
            <Bird className="h-8 w-8 mr-2" />
            <div>
              <div className="text-sm font-medium">Chickens</div>
              <div className="text-2xl font-bold">500</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

