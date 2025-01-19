const getTasks = () => {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return tasks;
};

const addTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const updateTask = (updatedTask) => {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === updatedTask.id);
  if (index !== -1) {
    tasks[index] = updatedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

const deleteTask = (id) => {
  const tasks = getTasks();
  const updatedTasks = tasks.filter((task) => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
};

export { getTasks, addTask, updateTask, deleteTask };
