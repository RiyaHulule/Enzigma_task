import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../services/TaskService';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleDelete = (id) => {
    deleteTask(id);
    setTasks(getTasks());
  };

  const handleEdit = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="task-list">
      <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.text}</td>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.comments}</td>
              <td>
                <button onClick={() => handleEdit(task)}>Edit</button>
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
