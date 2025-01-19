import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayPage from './components/DisplayPage';
import AddTaskPage from './components/AddTaskPage';
import EditTaskPage from './components/EditTaskPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DisplayPage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
      </Routes>
    </Router>
  );
};

export default App;
