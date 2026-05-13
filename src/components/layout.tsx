import React from "react";
import Link from "next/link";
import { LayoutDashboard, Megaphone, Users, Settings } from "lucide-react";

export function Sidebar() {
  const navItems = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Campaigns", href: "/campaigns", icon: Megaphone },
    { name: "Contacts", href: "/contacts", icon: Users },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col min-h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold tracking-wider">Globopersona</h1>
      </div>
      <nav className="flex-1 mt-6">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="px-4 py-2">
              <Link
                href={item.href}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 shadow-sm z-10">
      <div className="font-semibold text-gray-700">Analytics Overview</div>
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
          AD
        </div>
      </div>
    </header>
  );
}