import React, { useState, useEffect } from 'react';
import { addTask, updateTask } from '../services/TaskService';

const TaskForm = ({ taskToEdit, setTaskToEdit }) => {
  const [taskText, setTaskText] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [comments, setComments] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTaskText(taskToEdit.text);
      setAssignedTo(taskToEdit.assignedTo);
      setStatus(taskToEdit.status);
      setDueDate(taskToEdit.dueDate);
      setComments(taskToEdit.comments);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText && assignedTo && status && dueDate && comments) {
      const task = {
        id: taskToEdit ? taskToEdit.id : Date.now(),
        text: taskText,
        assignedTo,
        status,
        dueDate,
        comments
      };
      if (taskToEdit) {
        updateTask(task);
        setTaskToEdit(null);
      } else {
        addTask(task);
      }
      setTaskText('');
      setAssignedTo('');
      setStatus('');
      setDueDate('');
      setComments('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Enter task"
        />
        <input
          type="text"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
          placeholder="Assigned to"
        />
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          placeholder="Status"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <input
          type="text"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Comments"
        />
        <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
