"use client";
import {
  SlidersHorizontal,
  LayoutDashboard,
  Users,
  RefreshCcwDot,
  CalendarCheck,
  ClipboardList,
  NotebookPen,
  Settings,
} from "lucide-react";
import { useContext, createContext, useState, ReactNode, useEffect } from "react";
import Link from "next/link";

// สร้าง Context สำหรับธีม
const ThemeContext = createContext({ theme: "light", toggleTheme: () => {} });

interface SidebarContextProps {
  expanded: boolean;
}

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  href: string;
  active?: boolean;
  alert?: boolean;
}

// สร้าง Context สำหรับ Sidebar
const SidebarContext = createContext<SidebarContextProps>({ expanded: true });

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          expanded ? "w-64" : "w-16"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <nav className="h-full flex flex-col shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            {expanded ? (
              <img src="/LogoPH.webp" width={150} height={100} alt="Logo" />
            ) : (
              <SlidersHorizontal color="#02bafd" />
            )}
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg"
              aria-label="Toggle Sidebar"
            >
              <SlidersHorizontal color="#02bafd" />
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="font-medium py-10 space-y-2 px-3">
              <SidebarItem icon={<LayoutDashboard />} text="Dashboard" href="/Dashboard" />
              <SidebarItem icon={<Users />} text="All Employees" href="/AllEmployees" />
              <SidebarItem icon={<RefreshCcwDot />} text="All Departments" href="/AllDepartments" />
              <SidebarItem icon={<CalendarCheck />} text="Attendance" href="/Attendance" />
              <SidebarItem icon={<ClipboardList />} text="Leave Requests" href="/LeaveRequests" />
              <SidebarItem icon={<NotebookPen />} text="Holidays" href="/Holidays" />
              <SidebarItem icon={<Settings />} text="Settings" href="/Settings" />
            </ul>
          </SidebarContext.Provider>
        </nav>
      </aside>
    </ThemeContext.Provider>
  );
}

// คอมโพเนนต์ SidebarItem
export function SidebarItem({ icon, text, href, active = false, alert = false }: SidebarItemProps) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active ? "bg-indigo-500 text-white" : "text-dark "
      }`}
    >
      <Link href={href} className="flex items-center">
        {icon}
        <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
          {text}
        </span>
      </Link>
      {alert && <div className="absolute right-2 w-2 h-2 rounded bg-indigo-400" />}
      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
          {text}
        </div>
      )}
    </li>
  );
}
