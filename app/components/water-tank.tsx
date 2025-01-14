import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect } from "react";
import { useState } from "react";
import { fetchTankLevel } from "@/lib/db";

export function WaterTankLevel() {
  const [level, setLevel] = useState(0);

  const [refreshInterval, setRefreshInterval] = useState(1000); // Default to 1 seconds

  useEffect(() => {
    // Access localStorage only in the browser
    const interval = Number(localStorage.getItem("refreshInterval"));
    if (!isNaN(interval)) setRefreshInterval(interval);
  }, []);
  // Fetch tank level at regular intervals
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const response = await fetchTankLevel(); // Replace with your real API call
        if (response && response.level !== null) {
          setLevel(response.level);
        }
      } catch (error) {
        console.error("Error fetching tank level:", error);
      }
    }, refreshInterval);

    // Cleanup: Clear the interval when refreshInterval changes or component unmounts
    return () => clearInterval(intervalId);
  }, [refreshInterval]); // Re-run the effect if refreshInterval changes

  const clampedLevel = Math.min(Math.max(level, 0), level);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Water Tank Level</CardTitle>
        </CardHeader>
        <CardContent>
          {" "}
          <div className="relative h-52 overflow-hidden border-4 border-accent-foreground rounded-2xl">
            <div
              className="absolute bottom-0 left-0 right-0 bg-accent-foreground transition-all duration-500 ease-in-out"
              style={{ height: `${clampedLevel}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className={
                  clampedLevel < 50
                    ? "text-4xl font-bold text-foreground"
                    : "text-4xl font-bold text-background"
                }
                // style={{ color: clampedLevel > 50 ? "black" : "white" }}
              >
                {clampedLevel}%
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
