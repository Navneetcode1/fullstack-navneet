import { useState } from 'react';
import TaskList from '../Components/TaskList';  
import TaskModal from '../Components/TaskModal';
import { TaskProvider } from '../context/TaskContext';

const DashboardPage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <TaskProvider>
      <div className="dashboard-page">
        <h1>Book Management Dashboard</h1>
        <button onClick={() => setModalOpen(true)}>Add Books</button>

        {isModalOpen && <TaskModal closeModal={() => setModalOpen(false)} />}

        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default DashboardPage;
