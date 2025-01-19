import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTasks, updateTask } from '../services/TaskService';

const EditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [taskText, setTaskText] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [comments, setComments] = useState('');

  useEffect(() => {
    const taskData = getTasks().find((task) => task.id === parseInt(id));
    if (taskData) {
      setTask(taskData);
      setTaskText(taskData.text);
      setAssignedTo(taskData.assignedTo);
      setStatus(taskData.status);
      setDueDate(taskData.dueDate);
      setComments(taskData.comments);
    }
  }, [id]);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    if (taskText && assignedTo && status && dueDate) {
      const updatedTask = { ...task, text: taskText, assignedTo, status, dueDate, comments };
      updateTask(updatedTask);
      navigate('/');
    }
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Edit Task</h1>
      <form onSubmit={handleUpdateTask}>
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
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTaskPage;
