import * as Yup from 'yup';

export const taskValidationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string(),
  assignee: Yup.string().required('Assignee is required'),
  priority: Yup.string().oneOf(['Low', 'Medium', 'High']).required(),
  status: Yup.string().oneOf(['To Do', 'In Progress', 'Completed']).required(),
  dueDate: Yup.date().required('Due date is required'),
});
