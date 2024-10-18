import { useFormik } from 'formik';
import { taskValidationSchema } from '../Utils/validationSchema'; 
import { TaskFormValues } from '../Utils/types';
import { useTaskContext } from '../context/TaskContext';

interface TaskModalProps {
  task?: TaskFormValues;
  closeModal: () => void;
}

const TaskModal: React.FC<TaskModalProps> = ({ task, closeModal }) => {
  const { setTasks } = useTaskContext();

  // Use Formik for form handling
  const formik = useFormik<TaskFormValues>({
    initialValues: task || {
      title: '',
      description: '',
      assignee: '',
      priority: 'Low',
      status: 'To Do',
      dueDate: '',
    },
    validationSchema: taskValidationSchema, 
    onSubmit: (values) => {
      if (task && task.id) {
       
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t.id === task.id ? { ...values, id: task.id } : t))
        );
      } else {
     
        setTasks((prevTasks) => [
          ...prevTasks,
          { ...values, id: Date.now().toString() },
        ]);
      }
      closeModal();
    },
  });

  const modalStyle: React.CSSProperties = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '999',
  };

  const formStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    marginBottom: '10px',
  };

  const textareaStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    height: '100px',
    resize: 'vertical',
    marginBottom: '10px',
  };

  

  const errorStyle: React.CSSProperties = {
    color: 'red',
    fontSize: '0.875rem',
    marginBottom: '10px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const saveButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#007bff',
    color: '#fff',
  };

  const cancelButtonStyle: React.CSSProperties = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
    color: '#fff',
  };

  return (
    <div style={modalStyle}>
      <form style={formStyle} onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="title">Book Title (required): </label>
          <input
            id="title"
            name="title"
            style={inputStyle}
            value={formik.values.title}
            onChange={formik.handleChange}
            placeholder="Book Title"
          />
          {formik.errors.title && formik.touched.title && (
            <div style={errorStyle}>{formik.errors.title}</div>
          )}
        </div>

        <div>
          <label htmlFor="description">Description (optional): </label>
          <textarea
            id="description"
            name="description"
            style={textareaStyle}
            value={formik.values.description}
            onChange={formik.handleChange}
            placeholder="Book Description"
          />
        </div>

        <div>
          <label htmlFor="assignee">Author (required): </label>
          <input
            id="assignee"
            name="assignee"
            style={inputStyle}
            value={formik.values.assignee}
            onChange={formik.handleChange}
            placeholder="Author Name"
          />
          {formik.errors.assignee && formik.touched.assignee && (
            <div style={errorStyle}>{formik.errors.assignee}</div>
          )}
        </div>

        {/* <div>
          <label htmlFor="priority">Priority: </label>
          <select
            id="priority"
            name="priority"
            style={selectStyle}
            value={formik.values.priority}
            onChange={formik.handleChange}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div> */}

        {/* <div>
          <label htmlFor="status">Status: </label>
          <select
            id="status"
            name="status"
            style={selectStyle}
            value={formik.values.status}
            onChange={formik.handleChange}
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div> */}

        <div>
          <label htmlFor="dueDate"> Date (required): </label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            style={inputStyle}
            value={formik.values.dueDate}
            onChange={formik.handleChange}
          />
          {formik.errors.dueDate && formik.touched.dueDate && (
            <div style={errorStyle}>{formik.errors.dueDate}</div>
          )}
        </div>

        <div>
          <button type="submit" style={saveButtonStyle}>
            Save Book
          </button>
          <button type="button" style={cancelButtonStyle} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
