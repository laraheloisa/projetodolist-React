import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskCounter from './components/TaskCounter';


function App() {
  const [tasks, setTasks] = useState([]); //define o estado tasks como como array vazio 

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]); //setTasks([...tasks, ...]): Atualiza o estado tasks, adicionando um novo objeto. e define o estado
  };


  //Remove uma tarefa da lista
  const deleteTask = (taskName) => {
    setTasks(tasks.filter(task => task.name !== taskName));
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center text-white">
      <Header />
      <TaskInput onAddTask={addTask} />
      <TaskCounter tasks={tasks} />
     
    </div>
  );
}

export default App;
