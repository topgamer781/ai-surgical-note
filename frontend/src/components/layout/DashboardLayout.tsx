
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart2, 
  Upload, 
  FileText, 
  Settings, 
  LayoutDashboard, 
  Menu, 
  X, 
  LogOut,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      name: "Upload Dictation",
      path: "/upload",
      icon: <Upload className="h-5 w-5" />,
    },
    {
      name: "Generate Note",
      path: "/generate",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      name: "Analytics",
      path: "/analytics",
      icon: <BarChart2 className="h-5 w-5" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for desktop */}
      <aside 
        className={`bg-card border-r fixed md:relative inset-y-0 left-0 z-50 w-64 transform transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-16"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="h-16 flex items-center px-4 border-b justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="medical-gradient rounded-lg p-1 transition-transform duration-300 hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
                  <path d="M8 15V19"></path>
                  <path d="M11 19H5"></path>
                  <path d="M16 5v6"></path>
                  <path d="M19 8h-6"></path>
                  <path d="M20 2H8l4 8-2 4 1 1 5-5-5-5"></path>
                </svg>
              </div>
              {isSidebarOpen && <span className="font-bold transition-opacity duration-300">MedNoteScribe</span>}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex hover:rotate-180 transition-transform duration-300"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:rotate-90 transition-transform duration-200"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto py-4 px-3">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={item.name} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 rounded-md transition-all duration-200 ${
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground scale-105"
                        : "hover:bg-muted hover:scale-105"
                    } ${!isSidebarOpen && "justify-center"}`}
                  >
                    {item.icon}
                    {isSidebarOpen && <span className="ml-3">{item.name}</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar footer */}
          <div className="border-t p-4">
            <div className={`flex ${isSidebarOpen ? "justify-between" : "justify-center"} items-center`}>
              {isSidebarOpen && (
                <div className="flex items-center animate-fade-in">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <span className="text-sm font-medium">DR</span>
                  </div>
                  <div className="ml-2">
                    <p className="text-sm font-medium">Dr. Smith</p>
                    <p className="text-xs text-muted-foreground">Surgeon</p>
                  </div>
                </div>
              )}
              <Button variant="ghost" size="icon" className="text-muted-foreground transition-all duration-200 hover:text-destructive hover:rotate-12">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Dashboard header */}
        <header className="h-16 border-b bg-card flex items-center px-4 md:px-6 animate-fade-in">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden mr-2 transition-transform duration-200 hover:rotate-12"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="w-full max-w-md">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search notes..."
                className="pl-8 bg-background transition-all duration-300 focus:bg-background focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-muted/30 animate-fade-in">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
