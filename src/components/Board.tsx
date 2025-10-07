"use client";

import React, { useEffect } from "react";
import { useTaskStore } from "@/store/taskStore";
import Swimlane from "./Swimlane";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  closestCorners,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { TaskStatus } from "@/types/task";
import TaskCard from "./TaskCard";
import { Edit } from "lucide-react";

const Board = () => {
  const { initializeTasks, getTasksByStatus, moveTask, filteredTasks } =
    useTaskStore();
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  useEffect(() => {
    initializeTasks();
  }, [initializeTasks]);

  const handleDragStart = (event: { active: { id: string | number } }) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) {
      setActiveId(null);
      return;
    }

    const taskId = active.id as string;
    const overId = over.id as string;

    // Check if we're dropping over a column (status)
    if (["todo", "inprogress", "approved", "reject"].includes(overId)) {
      const newStatus = overId as TaskStatus;
      moveTask(taskId, newStatus);
    } else {
      // We're dropping over another task, find which column it belongs to
      const overTask = filteredTasks.find((t) => t.id === overId);
      if (overTask) {
        moveTask(taskId, overTask.status);
      }
    }

    setActiveId(null);
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const activeTask = activeId
    ? filteredTasks.find((t) => t.id === activeId)
    : null;

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Project Header */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex-shrink-0">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <h1 className="text-lg md:text-xl font-bold text-gray-900">
                Sport Xi Project
              </h1>
              <span className="px-2.5 py-0.5 bg-yellow-500 text-white text-[11px] font-medium rounded">
                in progress
              </span>
            </div>

            <div>
              <p className="text-gray-500 text-xs mt-0.5">event production</p>
            </div>

            <div className="flex items-center gap-3 mb-4">
              {/* Assigned Team */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-600 hidden sm:inline">
                  assigned
                </span>
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-[10px] font-medium text-gray-700"
                    >
                      U{i}
                    </div>
                  ))}
                  <div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-medium text-gray-600">
                    +9
                  </div>
                </div>
              </div>

              {/* Manage Button */}
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-4xl transition-colors border border-gray-200">
                <span className="text-xs font-medium hidden sm:inline">
                  Manage
                </span>
                <Edit className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-3 pb-0 border-t border-gray-200">
          <p className="text-[14px] text-gray-400">
            Last updated on 04 April, 2022
          </p>
        </div>
      </div>

      {/* Swimlanes */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
          >
            <div className="flex h-full overflow-x-auto hide-scrollbar">
              <Swimlane
                title="To Do"
                status="todo"
                tasks={getTasksByStatus("todo")}
              />
              <Swimlane
                title="In Progress"
                status="inprogress"
                tasks={getTasksByStatus("inprogress")}
              />
              <Swimlane
                title="Approved"
                status="approved"
                tasks={getTasksByStatus("approved")}
              />
              <Swimlane
                title="Reject"
                status="reject"
                tasks={getTasksByStatus("reject")}
              />
            </div>

            <DragOverlay>
              {activeTask ? <TaskCard task={activeTask} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      </div>
    </div>
  );
};

export default Board;
