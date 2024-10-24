import React from 'react';

interface ActivityItemProps {
  user: string;
  action: string;
  item: string;
  time: string;
  avatar: string;
}

export default function ActivityItem({ user, action, item, time, avatar }: ActivityItemProps) {
  return (
    <div className="p-4 hover:bg-gray-50">
      <div className="flex items-start gap-4">
        <img
          src={avatar}
          alt={user}
          className="h-10 w-10 rounded-full"
        />
        <div className="flex-1">
          <p className="text-sm">
            <span className="font-medium">{user}</span>
            {' '}{action}{' '}
            <span className="font-medium">{item}</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
}