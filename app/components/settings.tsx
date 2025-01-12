import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export function Settings() {
  const { setTheme } = useTheme();
  const [refreshInterval, setRefreshInterval] = useState(1000); // Default value

  const handleIntervalChange = (interval: number) => {
    setRefreshInterval(interval); // Update state for UI feedback
    localStorage.setItem("refreshInterval", interval.toString()); // Save to storage
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="Theme">Theme</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="notifications">Enable Notifications</Label>
            <Switch id="notifications" />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="autoSync">Auto Sync Data</Label>
            <Switch id="autoSync" />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="refreshInterval">Data Refresh Interval</Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{refreshInterval / 1000} sec</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {[1, 5, 10, 30, 60].map((interval) => (
                  <DropdownMenuItem
                    key={interval}
                    onClick={() => handleIntervalChange(interval * 1000)}
                  >
                    {interval} seconds
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
