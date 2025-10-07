"use client";

import React from "react";
import Image from "next/image";
import { Task } from "@/types/task";
import {
  Calendar,
  AlertCircle,
  Zap,
  Link2,
  Bell,
  MessageCircleMore,
} from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

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
    const colors: {
      [key: string]: { bg: string; icon: string; text: string };
    } = {
      Research: {
        bg: "bg-emerald-500",
        icon: "bg-emerald-500",
        text: "text-gray-400",
      },
      Design: { bg: "bg-rose-500", icon: "bg-rose-500", text: "text-gray-400" },
      Other: {
        bg: "bg-slate-500",
        icon: "bg-slate-500",
        text: "text-gray-400",
      },
      Feedback: {
        bg: "bg-blue-500",
        icon: "bg-blue-500",
        text: "text-gray-400",
      },
      Presentation: {
        bg: "bg-orange-500",
        icon: "bg-orange-500",
        text: "text-gray-400",
      },
      "UX Research": {
        bg: "bg-amber-500",
        icon: "bg-amber-500",
        text: "text-gray-400",
      },
      Interface: {
        bg: "bg-indigo-500",
        icon: "bg-indigo-500",
        text: "text-gray-400",
      },
    };
    return (
      colors[category] || {
        bg: "bg-gray-500",
        icon: "bg-gray-500",
        text: "text-gray-400",
      }
    );
  };

  // Get priority badge with icon
  const getPriorityBadge = () => {
    return (
      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-md">
        <Zap className="w-4 h-4 text-gray-300 fill-gray-100" />
        <span className="text-xs font-medium text-gray-400 capitalize">
          {task.priority}
        </span>
      </div>
    );
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all cursor-grab active:cursor-grabbing mb-2.5"
    >
      {/* Category Badge */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-2.5 h-2.5 rounded ${
              getCategoryColor(task.category).icon
            }`}
          ></div>
          <span
            className={`text-[13px] font-normal ${
              getCategoryColor(task.category).text
            }`}
          >
            {task.category}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-gray-900 font-semibold text-sm mb-2.5 leading-snug">
        {task.title}
      </h3>

      {/* Assignees and Priority */}
      <div className="flex items-center gap-2 mb-8">
        <div className="flex -space-x-2">
          {task.assignees.slice(0, 3).map((assignee) => (
            <div
              key={assignee.id}
              className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border-2 border-white flex items-center justify-center overflow-hidden P-2"
              title={assignee.name}
            >
              <Image
                src="/images/Vector.png"
                alt={assignee.name}
                width={10}
                height={10}
                className="object-contain"
              />
            </div>
          ))}
          {task.assignees.length > 3 && (
            <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center">
              <span className="text-[10px] text-gray-600 font-medium">
                +{task.assignees.length - 3}
              </span>
            </div>
          )}
        </div>

        {/* Priority badge on the right */}
        {getPriorityBadge()}
      </div>

      {/* Image Placeholder */}
      {task.hasImage && (
        <div className="bg-gray-900 rounded-lg h-28 mb-2.5 flex items-center justify-center border border-gray-100">
          <Image
            src="/images/Vector.png"
            alt="User"
            width={16}
            height={16}
            className="object-contain"
          />
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center pt-2 border-t border-gray-100 gap-4">
        <div className="flex items-center gap-4 text-gray-400">
          {task.attachments !== undefined && (
            <div className="flex items-center gap-1">
              <Link2 className="w-3.5 h-3.5 rotate-135" />
              <span className="text-xs font-medium">{task.attachments}</span>
            </div>
          )}
          {task.comments !== undefined && (
            <div className="flex items-center gap-1">
              <MessageCircleMore className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">{task.comments}</span>
            </div>
          )}
        </div>

        {/* Only show ONE of these indicators - priority order: reports > stream > groupCall > dueDate */}
        <div className="flex items-center">
          {task.reports ? (
            <div className="flex items-center gap-1 text-red-500 text-[11px] font-medium">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{task.reports} Reports</span>
            </div>
          ) : task.stream ? (
            <div className="flex items-center gap-1 text-blue-500">
              <Bell className="w-3.5 h-3.5" />{" "}
              <span className="text-[11px] font-medium">Stream</span>
            </div>
          ) : task.groupCall ? (
            <div className="flex items-center gap-1 text-blue-500">
              <Bell className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Group Call</span>
            </div>
          ) : task.dueDate ? (
            <div className="flex items-center gap-1 text-gray-500">
              <Calendar className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">
                Due: {task.dueDate}
              </span>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
