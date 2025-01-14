import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getLatestValveStatus, postValveStatus } from "@/lib/db";

export function Valve() {
  const [valveStatus, setValveStatus] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch the latest valve status on component mount
  useEffect(() => {
    const fetchStatus = async () => {
      setLoading(true);
      const status = await getLatestValveStatus();
      setValveStatus(status);
      setLoading(false);
    };

    fetchStatus();
  }, []);

  const toggleValve = async () => {
    if (valveStatus === null) return; // Prevent toggling if status is unknown
    setLoading(true);
    const newState = !valveStatus;
    const result = await postValveStatus(newState);
    if (result !== null) {
      setValveStatus(result);
    }
    setLoading(false);
  };

  return (
    <Card className="flex items-center justify-center p-6">
      {" "}
      {/* Add flexbox classes */}
      <CardHeader>
        <CardTitle>Valve Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 flex flex-col items-center justify-center">
        {" "}
        {/* Center content vertically and horizontally */}
        <div className="text-center">
          {" "}
          {/* Center status text */}
          <span>Current Status: </span>
          <span className={valveStatus ? "text-green-600" : "text-red-600"}>
            {valveStatus === null
              ? "Loading..."
              : valveStatus
                ? "Open"
                : "Closed"}
          </span>
        </div>
        <Button
          onClick={toggleValve}
          disabled={loading || valveStatus === null}
          className="mt-4"
        >
          {loading
            ? "Processing..."
            : valveStatus === null
              ? "Loading..."
              : valveStatus
                ? "Close Valve"
                : "Open Valve"}
        </Button>
      </CardContent>
    </Card>
  );
}
