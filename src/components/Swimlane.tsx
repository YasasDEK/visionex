'use client';

import React from 'react';
import { Task, TaskStatus } from '@/types/task';
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Plus, MoreHorizontal } from 'lucide-react';

interface SwimlaneProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
}

const Swimlane: React.FC<SwimlaneProps> = ({ title, status, tasks }) => {
  const { setNodeRef } = useDroppable({ id: status });

  // Get badge colors based on status
  const getBadgeClasses = () => {
    const badges: { [key: string]: string } = {
      todo: 'bg-gray-200 text-black',
      inprogress: 'bg-yellow-500 text-black',
      approved: 'bg-green-500 text-black',
      reject: 'bg-red-500 text-black',
    };
    return badges[status] || 'bg-gray-200 text-black';
  };

  return (
    <div className="flex flex-col h-full flex-1 min-w-[240px] max-w-[320px] border-r border-gray-200">
      {/* Column Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-white">
        <span className={`px-4 py-1.5 ${getBadgeClasses()} text-sm font-medium rounded-full`}>
          {title}
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <Plus className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <MoreHorizontal className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Tasks Container */}
      <div
        ref={setNodeRef}
        className="flex-1 bg-gray-50 p-2.5 overflow-y-auto hide-scrollbar"
      >
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-sm">
              No tasks
            </div>
          ) : (
            tasks.map((task) => <TaskCard key={task.id} task={task} />)
          )}
        </SortableContext>
      </div>
    </div>
  );
};

export default Swimlane;
