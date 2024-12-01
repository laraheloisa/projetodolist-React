import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';


function App() {
  // Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([]);

  // Função para adicionar uma nova tarefa
  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  // Função para alternar o estado (concluído/não concluído) de uma tarefa
  const toggleTask = (taskName) => {
    setTasks(
      tasks.map((task) =>
        task.name === taskName ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Função para deletar uma tarefa
  const deleteTask = (taskName) => {
    setTasks(tasks.filter((task) => task.name !== taskName));
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
