import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchNpk, INpk } from "@/lib/db";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";

export function Npk() {
  const [npkData, setNpkData] = useState<INpk | null>(null);
  const [refreshInterval, setRefreshInterval] = useState(1000); // Default to 1 seconds

  useEffect(() => {
    // Access localStorage only in the browser
    const interval = Number(localStorage.getItem("refreshInterval"));
    if (!isNaN(interval)) setRefreshInterval(interval);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetchNpk(); // Replace with your real API call
        if (response !== null) {
          setNpkData(response);
        }
      } catch (error) {
        console.error("Error fetching tank level:", error);
      }
    }, refreshInterval);

    // Cleanup: Clear the interval when refreshInterval changes or component unmounts
    return () => clearInterval(intervalId);
  }, [refreshInterval]); // Re-run the effect if refreshInterval changes

  return (
    <Card>
      <CardHeader>
        <CardTitle>Npk Sensor</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="mb-1 flex justify-between">
            <span>Nitrogen</span>
            <span>{npkData?.nitrogen}%</span>
          </div>
          <Progress value={npkData?.nitrogen} />
        </div>

        <div className="mb-4">
          <div className="mb-1 flex justify-between">
            <span>Phosphorus</span>
            <span>{npkData?.phosphorus}%</span>
          </div>
          <Progress value={npkData?.phosphorus} />
        </div>

        <div className="mb-4">
          <div className="mb-1 flex justify-between">
            <span>Potassium</span>
            <span>{npkData?.potassium}%</span>
          </div>
          <Progress value={npkData?.potassium} />
        </div>
      </CardContent>
    </Card>
  );
}
