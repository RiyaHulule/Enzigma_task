import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../services/TaskService';

const AddTaskPage = () => {
  const [taskText, setTaskText] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [comments, setComments] = useState('');
  const navigate = useNavigate();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskText && assignedTo && status && dueDate) {
      const newTask = {
        id: Date.now(),
        text: taskText,
        assignedTo,
        status,
        dueDate,
        comments,
      };
      addTask(newTask);
      navigate('/');
    }
  };

  return (
    <div className="App">
      <h1>Add New Task</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Assigned to"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTaskPage;
