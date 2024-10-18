import React from 'react';
import { Task } from '../Utils/types';

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit }) => {
  
  const itemStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding: '20px',
    marginBottom: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    width: '100%',
    maxWidth: '500px',
    margin: '10px auto',
  };


  const titleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    width: '100%', 
  };

  
  const infoContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ensure container takes full width
    marginBottom: '8px',
  };

  const infoLabelStyle: React.CSSProperties = {
    fontSize: '1rem',
    fontWeight: 'bold',
  };

  const infoValueStyle: React.CSSProperties = {
    fontSize: '1rem',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: '10px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  };

  const handleMouseOver = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = '#0056b3';
  };

  const handleMouseOut = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = '#007bff';
  };

  return (
    <li style={itemStyle}>
      <h3 style={titleStyle}>{task.title}</h3>

      <div style={infoContainerStyle}>
        <div>
            <span style={infoLabelStyle}>Description: </span>
            <span style={infoLabelStyle}>{task.description}</span>
        </div>
        <div>
          <span style={infoLabelStyle}>Author: </span>
          <span style={infoValueStyle}>{task.assignee}</span>
        </div>
      </div>

      <div style={infoContainerStyle}>
        
        <div>
          <span style={infoLabelStyle}>Publish Date: </span>
          <span style={infoValueStyle}>{task.dueDate}</span>
        </div>
      </div>

      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle}
          onClick={() => onEdit(task)}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Edit
        </button>
      </div>
    </li>
  );
};

export default TaskItem;