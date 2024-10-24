import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  action?: string;
}

export default function SectionHeader({ icon: Icon, title, action }: SectionHeaderProps) {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-indigo-600" />
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        {action && (
          <button className="text-sm text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
            {action} <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}