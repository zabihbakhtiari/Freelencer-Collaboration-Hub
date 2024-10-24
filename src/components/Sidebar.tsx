import React from 'react';
import { Menu, MessageSquare, Clock, DollarSign, BarChart2, Settings, Users, LogOut } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: BarChart2, label: 'Dashboard', path: '/' },
    { icon: Users, label: 'Projects', path: '/projects' },
    { icon: Clock, label: 'Time Tracking', path: '/time' },
    { icon: DollarSign, label: 'Payments', path: '/payments' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="fixed left-0 h-screen w-64 bg-white border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Menu className="h-6 w-6 text-indigo-600" />
        <span className="font-bold text-xl">Collaboration Hub</span>
      </div>
      
      <nav className="space-y-1">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.path}
            className="flex items-center gap-3 px-2 py-2.5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
      
      <div className="absolute bottom-4 w-[calc(100%-2rem)]">
        <button className="flex items-center gap-3 px-2 py-2.5 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors w-full">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}