import React from 'react';
import { Clock, AlertCircle } from 'lucide-react';

interface DeadlineProps {
  task: string;
  project: string;
  deadline: string;
  priority: string;
  status: string;
}

export default function DeadlineCard({ task, project, deadline, priority, status }: DeadlineProps) {
  return (
    <div className="p-4 hover:bg-gray-50">
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-medium">{task}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${
          priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {priority}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{project}</p>
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">
          Due {new Date(deadline).toLocaleDateString()}
        </span>
        <span className={`flex items-center gap-1 ${
          status === 'In Progress' ? 'text-blue-600' : 'text-gray-600'
        }`}>
          {status === 'In Progress' ? <Clock className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          {status}
        </span>
      </div>
    </div>
  );
}