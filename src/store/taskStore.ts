import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, TaskStatus } from '@/types/task';
import tasksData from '@/data/tasks.json';

interface TaskStore {
  tasks: Task[];
  searchQuery: string;
  filteredTasks: Task[];
  initializeTasks: () => void;
  moveTask: (taskId: string, newStatus: TaskStatus) => void;
  setSearchQuery: (query: string) => void;
  getTasksByStatus: (status: TaskStatus) => Task[];
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      searchQuery: '',
      filteredTasks: [],

      initializeTasks: () => {
        const storedTasks = get().tasks;
        // Only initialize from JSON if no tasks in store
        if (storedTasks.length === 0) {
          set({ tasks: tasksData.tasks as Task[], filteredTasks: tasksData.tasks as Task[] });
        } else {
          set({ filteredTasks: storedTasks });
        }
      },

      moveTask: (taskId: string, newStatus: TaskStatus) => {
        set((state) => {
          const updatedTasks = state.tasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task
          );
          
          // Apply current search filter to updated tasks
          const filtered = state.searchQuery
            ? updatedTasks.filter((task) =>
                task.title.toLowerCase().includes(state.searchQuery.toLowerCase())
              )
            : updatedTasks;

          return { tasks: updatedTasks, filteredTasks: filtered };
        });
      },

      setSearchQuery: (query: string) => {
        set((state) => {
          const filtered = query
            ? state.tasks.filter((task) =>
                task.title.toLowerCase().includes(query.toLowerCase())
              )
            : state.tasks;

          return { searchQuery: query, filteredTasks: filtered };
        });
      },

      getTasksByStatus: (status: TaskStatus) => {
        return get().filteredTasks.filter((task) => task.status === status);
      },
    }),
    {
      name: 'task-storage',
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);
