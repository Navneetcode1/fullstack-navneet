import { useState, useEffect } from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import TaskModal from './TaskModal';
import { TaskFormValues } from '@/Utils/types';

const ITEMS_PER_PAGE = 5; 

const TaskList: React.FC = () => {
  const { tasks } = useTaskContext();
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filter, setFilter] = useState<string>('');  // Updated to filter by name
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setModalOpen] = useState(false); 
  const [selectedTask, setSelectedTask] = useState<TaskFormValues | undefined>(undefined);

  useEffect(() => {
    let filtered = tasks;
    if (filter) {  // Filter by name if the filter is not empty
      filtered = tasks.filter((task) => 
        task.title.toLowerCase().includes(filter.toLowerCase())  // Matching by name (title)
      );
    }
    setFilteredTasks(filtered);
    setCurrentPage(1); 
  }, [filter, tasks]);

  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const loadMoreTasks = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleEditTask = (task: TaskFormValues) => {
    setSelectedTask(task); 
    setModalOpen(true); 
  };

  return (
    <div>
      <div>
        <label htmlFor="nameFilter">Filter by Name: </label>
        <input
          type="text"
          id="nameFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}  // Update filter as user types
          placeholder="Enter task name"
        />
      </div>

      <ul>
        {paginatedTasks.map((task) => (
          <TaskItem key={task.id} task={task} onEdit={handleEditTask} />
        ))}
      </ul>

      {paginatedTasks.length < filteredTasks.length && (
        <button onClick={loadMoreTasks}>Load More Tasks</button>
      )}

      {isModalOpen && (
        <TaskModal task={selectedTask} closeModal={() => setModalOpen(false)} />
      )}
    </div>
  );
};

export default TaskList;
