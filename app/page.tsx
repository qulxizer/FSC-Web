"use client";

import { useState } from "react";
import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";
import { WeatherCard } from "./components/weather-card";
import { CropStatus } from "./components/crop-status";
import { LivestockOverview } from "./components/livestock-overview";
import { EquipmentStatus } from "./components/equipment-status";
import { Sensors } from "./components/sensors";
import { Settings } from "./components/settings";

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "Weather":
        return <WeatherCard />;
      case "Crops":
        return <CropStatus />;
      case "Livestock":
        return <LivestockOverview />;
      case "Equipment":
        return <EquipmentStatus />;
      case "Sensors":
        return <Sensors />;
      case "Settings":
        return <Settings />;
      default:
        return (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <WeatherCard />
            <CropStatus />
            <LivestockOverview />
            <EquipmentStatus />
            <Sensors />
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar
        setActiveComponent={setActiveComponent}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-y-auto p-4">
          <h2 className="mb-6 text-2xl font-bold">{activeComponent}</h2>
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  );
}
