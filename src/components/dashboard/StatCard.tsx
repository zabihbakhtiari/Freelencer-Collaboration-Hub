import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  color: string;
}

export default function StatCard({ icon: Icon, label, value, change, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className={`${color} p-3 rounded-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div>
          <p className="text-sm text-gray-600">{label}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-4 text-sm text-green-600">
        <ArrowUpRight className="h-4 w-4" />
        <span>{change} from last month</span>
      </div>
    </div>
  );
}