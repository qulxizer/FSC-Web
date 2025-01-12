import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Droplets } from "lucide-react";

const equipment = [
  {
    name: "Soil Moisture - Field 1",
    status: "Operational",
    icon: Waves,
  },
  {
    name: "Soil Moisture - Field 2",
    status: "Operational",
    icon: Waves,
  },
  {
    name: "Soil Moisture - Field 3",
    status: "Operational",
    icon: Waves,
  },
  {
    name: "Soil Moisture - Field 4",
    status: "Operational",
    icon: Waves,
  },
  {
    name: "Irrigation System",
    status: "Non-operational",
    icon: Droplets,
  },
];

export function EquipmentStatus() {
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
                <Icon className="size-4" />
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
