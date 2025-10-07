'use client';

import React from 'react';
import { Task } from '@/types/task';
import {
  Paperclip,
  MessageSquare,
  Calendar,
  Radio,
  AlertCircle,
  Video,
} from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  // Get category color - matching the exact design
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Research: 'bg-emerald-50 text-emerald-600',
      Design: 'bg-rose-50 text-rose-600',
      Other: 'bg-slate-50 text-slate-600',
      Feedback: 'bg-blue-50 text-blue-600',
      Presentation: 'bg-orange-50 text-orange-600',
      'UX Research': 'bg-amber-50 text-amber-600',
      Interface: 'bg-indigo-50 text-indigo-600',
    };
    return colors[category] || 'bg-gray-50 text-gray-600';
  };

  // Get priority icon
  const getPriorityIcon = () => {
    if (task.priority === 'low') {
      return (
        <div className="flex items-center gap-1 text-gray-400">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M8 13L4 9M8 13L12 9M8 13V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xs">Low</span>
        </div>
      );
    } else if (task.priority === 'medium') {
      return (
        <div className="flex items-center gap-1 text-gray-500">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="w-4 h-4">
            <path d="M3 8H13M3 12H13M3 4H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-xs">Medium</span>
        </div>
      );
    }
    return null;
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all cursor-grab active:cursor-grabbing mb-2.5"
    >
      {/* Category Badge and Reports */}
      <div className="flex items-start justify-between mb-2">
        <span
          className={`px-2 py-0.5 rounded text-[11px] font-medium ${getCategoryColor(
            task.category
          )}`}
        >
          {task.category}
        </span>
        {task.reports && (
          <div className="flex items-center gap-1 text-red-500 text-[11px] font-medium">
            <AlertCircle className="w-3.5 h-3.5" />
            {task.reports} Reports
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-gray-900 font-semibold text-sm mb-2.5 leading-snug">{task.title}</h3>

      {/* Assignees and Priority */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center">
          <div className="flex -space-x-2">
            {task.assignees.slice(0, 2).map((assignee) => (
              <div
                key={assignee.id}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white flex items-center justify-center text-[10px] font-semibold text-white"
                title={assignee.name}
              >
                {assignee.name.charAt(0)}
              </div>
            ))}
          </div>
          {task.assignees.length > 2 && (
            <span className="ml-1.5 text-[11px] text-gray-400 font-medium">
              +{task.assignees.length - 2}
            </span>
          )}
        </div>
        
        {/* Priority indicator */}
        {getPriorityIcon()}
      </div>

      {/* Image Placeholder (if hasImage) */}
      {task.hasImage && (
        <div className="bg-gray-50 rounded-lg h-28 mb-2.5 flex items-center justify-center border border-gray-100">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
            <div className="w-6 h-6 bg-gray-200 rounded"></div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <div className="flex items-center gap-3 text-gray-400">
          {task.attachments !== undefined && (
            <div className="flex items-center gap-1">
              <Paperclip className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">{task.attachments}</span>
            </div>
          )}
          {task.comments !== undefined && (
            <div className="flex items-center gap-1">
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">{task.comments}</span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {task.stream && (
            <div className="flex items-center gap-1 text-blue-500">
              <Radio className="w-3.5 h-3.5" />
            </div>
          )}
          {task.groupCall && (
            <div className="flex items-center gap-1 text-blue-500">
              <Video className="w-3.5 h-3.5" />
            </div>
          )}
          {task.dueDate && (
            <div className="flex items-center gap-1 text-gray-500">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Due: {task.dueDate}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
