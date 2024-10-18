
export interface Task {
  id: string;  
  title: string;
  description?: string;
  assignee: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To Do' | 'In Progress' | 'Completed';
  dueDate: string;
}

export interface TaskFormValues {
  title: string;
  description?: string;
  assignee: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'To Do' | 'In Progress' | 'Completed';
  dueDate: string;
  id?: string;  
}
