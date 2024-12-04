'use client'

import { useState } from 'react'
import { WeatherCard } from "./components/weather-card"
import { CropStatus } from "./components/crop-status"
import { LivestockOverview } from "./components/livestock-overview"
import { Sensors } from "./components/sensors"
import { Settings } from "./components/settings"
import { Sidebar } from "./components/sidebar"

export default function Dashboard() {
  const [activeComponent, setActiveComponent] = useState('Dashboard')

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'Weather':
        return <WeatherCard />
      case 'Crops':
        return <CropStatus />
      case 'Livestock':
        return <LivestockOverview />
      case 'Sensors':
        return <Sensors />
      case 'Settings':
        return <Settings />
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WeatherCard />
            <CropStatus />
            <LivestockOverview />
            <Sensors />
          </div>
        )
    }
  }

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground h-16 flex items-center px-4">
        <h1 className="text-2xl font-bold">Farm Dashboard</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar setActiveComponent={setActiveComponent} isOpen={false} setIsOpen={function (isOpen: boolean): void {
          throw new Error('Function not implemented.')
        } } />
        <main className="flex-1 overflow-y-auto p-4">
          <h2 className="text-3xl font-bold mb-6">{activeComponent}</h2>
          {renderActiveComponent()}
        </main>
      </div>
    </div>
  )
}

