import { Bell, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  toggleSidebar: () => void;
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b bg-white px-4 py-3">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="mr-4"
        >
          <Menu className="size-5" />
        </Button>
        <h1 className="text-xl font-semibold">Farm Management System</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <Bell className="size-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="size-5" />
        </Button>
      </div>
    </header>
  );
}
