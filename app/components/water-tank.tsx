import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useState } from "react";

export function WaterTankLevel() {
  // Ensure level is between 0 and 100
  const [level, setLevel] = useState(10);
  // setLevel(10);
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
                className="text-4xl font-bold"
                style={{ color: clampedLevel > 50 ? "black" : "white" }}
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
