export type TaskStatus = 'todo' | 'inprogress' | 'approved' | 'reject';

export type TaskCategory =
  | 'Research'
  | 'Design'
  | 'Other'
  | 'Feedback'
  | 'Presentation'
  | 'UX Research'
  | 'Interface';

export type TaskPriority = 'low' | 'medium' | 'high';

export interface Assignee {
  id: string;
  name: string;
  avatar: string;
}

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  category: TaskCategory;
  assignees: Assignee[];
  attachments?: number;
  comments?: number;
  dueDate?: string;
  priority: TaskPriority;
  reports?: number;
  stream?: boolean;
  hasImage?: boolean;
  groupCall?: boolean;
}
