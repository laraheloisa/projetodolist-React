import React, { useState } from 'react';
import Header from './components/Header';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const toggleTask = (taskName) => {
    setTasks(tasks.map(task =>
      task.name === taskName ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (taskName) => {
    setTasks(tasks.filter(task => task.name !== taskName));
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white">
      <Header />
      <TaskInput onAddTask={addTask} />
      <TaskCounter tasks={tasks} />
      <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
