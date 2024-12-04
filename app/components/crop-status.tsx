import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function CropStatus() {
  const crops = [
    { name: "Corn", progress: 75 },
    { name: "Wheat", progress: 50 },
    { name: "Soybeans", progress: 30 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Crop Status</CardTitle>
      </CardHeader>
      <CardContent>
        {crops.map((crop) => (
          <div key={crop.name} className="mb-4">
            <div className="mb-1 flex justify-between">
              <span>{crop.name}</span>
              <span>{crop.progress}%</span>
            </div>
            <Progress value={crop.progress} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
