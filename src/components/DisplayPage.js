import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../services/TaskService';

const DisplayPage = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleDeleteTask = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      deleteTask(id);
      setTasks(getTasks());
    }
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Task Management</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <Link to="/add-task">
        <button>Add New Task</button>
      </Link>

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
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <tr key={task.id}>
                <td>{task.text}</td>
                <td>{task.assignedTo}</td>
                <td>{task.status}</td>
                <td>{task.dueDate}</td>
                <td>{task.comments}</td>
                <td>
                  <Link to={`/edit-task/${task.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No tasks found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayPage;
