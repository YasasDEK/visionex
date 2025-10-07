'use client';

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
    <div className="flex flex-col h-full flex-shrink-0 w-[90vw] max-w-[320px] md:flex-1 md:w-auto md:max-w-none border-r border-gray-200 last:border-r-0">
      {/* Column Header */}
      <div className="flex items-center justify-between p-2.5 md:p-3 border-b border-gray-200 bg-white flex-shrink-0">
        <span className={`px-3 md:px-4 py-1 md:py-1.5 ${getBadgeClasses()} text-xs md:text-sm font-medium rounded-full whitespace-nowrap`}>
          {title}
        </span>
        <div className="flex items-center gap-1">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <Plus className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors">
            <MoreHorizontal className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Tasks Container */}
      <div
        ref={setNodeRef}
        className="flex-1 bg-gray-50 p-2 md:p-2.5 overflow-y-auto hide-scrollbar min-h-0"
      >
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.length === 0 ? (
            <div className="text-center py-8 text-gray-400 text-xs md:text-sm">
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
