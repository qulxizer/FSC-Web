import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  Cloud,
  Sprout,
  MilkIcon as Cow,
  Wrench,
  Droplet,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: Home },
  { name: "Weather", icon: Cloud },
  { name: "Crops", icon: Sprout },
  { name: "Livestock", icon: Cow },
  { name: "Equipment", icon: Wrench },
  { name: "Sensors", icon: Droplet },
  { name: "Settings", icon: Settings },
];

interface SidebarProps {
  setActiveComponent: (name: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Sidebar({
  setActiveComponent,
  isOpen,
  setIsOpen,
}: SidebarProps) {
  return (
    <div
      className={`border-r bg-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <ScrollArea className="h-screen">
        <div className="p-4">
          <div className="mb-4 flex items-center justify-between">
            {isOpen && <h2 className="text-xl font-bold">Farm Dashboard</h2>}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <ChevronLeft className="size-4" />
              ) : (
                <ChevronRight className="size-4" />
              )}
            </Button>
          </div>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`w-full justify-start ${isOpen ? "" : "px-2"}`}
                onClick={() => setActiveComponent(item.name)}
              >
                <item.icon className={`size-4 ${isOpen ? "mr-2" : ""}`} />
                {isOpen && <span>{item.name}</span>}
              </Button>
            ))}
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
}
