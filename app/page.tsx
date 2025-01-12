"use client";

import { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";
import { WeatherCard } from "./components/weather-card";
import { WaterTankLevel } from "./components/water-tank";
import { EquipmentStatus } from "./components/equipment-status";
import { Sensors } from "./components/sensors";
import { Settings } from "./components/settings";
import { useEffect } from "react";
import { MoistureSensors } from "./components/moisture-sensors";

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("refreshInterval") === null) {
      localStorage.setItem("refreshInterval", "1000");
    }
  }, []);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Weather":
        return <WeatherCard />;
      case "Equipment":
        return <EquipmentStatus />;
      case "Sensors":
        return <Sensors />;
      case "Settings":
        return <Settings />;
      case "Water Tank":
        return <WaterTankLevel />;
      case "Moisture Sensors":
        return <MoistureSensors />;
      default:
        return (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <WeatherCard />
            <EquipmentStatus />
            <Sensors />
            <WaterTankLevel />
            <MoistureSensors />
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        setActiveComponent={setActiveComponent}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <h2 className="mb-6 text-2xl font-bold">{activeComponent}</h2>
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
}
