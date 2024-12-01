import React from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <TaskProvider>
      <div className="bg-gray-800 min-h-screen flex flex-col items-center text-gray-100">
        <Header />
        <TaskInput />
        <TaskCounter />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
