import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tractor, Wrench, Droplets } from "lucide-react";

const equipment = [
  {
    name: "Tractor",
    status: "Operational",
    icon: Tractor,
  },
  {
    name: "Harvester",
    status: "Maintenance",
    icon: Wrench,
  },
  {
    name: "Irrigation System",
    status: "Operational",
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
