import React from 'react';
import { Clock, DollarSign, Users, Briefcase, Calendar, MessageSquare } from 'lucide-react';
import StatCard from './dashboard/StatCard';
import DeadlineCard from './dashboard/DeadlineCard';
import ActivityItem from './dashboard/ActivityItem';
import SectionHeader from './dashboard/SectionHeader';
import QuickActions from './dashboard/QuickActions';

export default function Dashboard() {
  const stats = [
    { icon: Clock, label: 'Hours Tracked', value: '164.5', change: '+12.5%', color: 'bg-blue-500' },
    { icon: DollarSign, label: 'Earnings', value: '$8,450', change: '+23.1%', color: 'bg-green-500' },
    { icon: Users, label: 'Active Projects', value: '12', change: '+2', color: 'bg-purple-500' },
    { icon: Briefcase, label: 'Completed Tasks', value: '48', change: '+8', color: 'bg-orange-500' },
  ];

  const upcomingDeadlines = [
    { task: 'UI Design Review', project: 'E-commerce Platform', deadline: '2024-03-25', priority: 'High', status: 'In Progress' },
    { task: 'API Integration', project: 'Mobile App', deadline: '2024-03-27', priority: 'Medium', status: 'Pending' },
    { task: 'User Testing', project: 'Website Redesign', deadline: '2024-03-28', priority: 'High', status: 'In Progress' },
  ];

  const recentActivities = [
    { user: 'Sarah Miller', action: 'completed task', item: 'Homepage Design', time: '2 hours ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { user: 'Alex Chen', action: 'commented on', item: 'Mobile Navigation', time: '4 hours ago', avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { user: 'Maria Garcia', action: 'started task', item: 'Payment Integration', time: '5 hours ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Deadlines */}
        <div className="bg-white rounded-xl shadow-sm">
          <SectionHeader
            icon={Calendar}
            title="Upcoming Deadlines"
            action="View Calendar"
          />
          <div className="divide-y divide-gray-200">
            {upcomingDeadlines.map((deadline) => (
              <DeadlineCard key={deadline.task} {...deadline} />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm">
          <SectionHeader
            icon={MessageSquare}
            title="Recent Activity"
            action="View All"
          />
          <div className="divide-y divide-gray-200">
            {recentActivities.map((activity) => (
              <ActivityItem key={activity.time} {...activity} />
            ))}
          </div>
        </div>
      </div>

      <QuickActions />
    </div>
  );
}