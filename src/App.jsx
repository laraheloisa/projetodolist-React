import React, { useState } from 'react';
import Header from './components/Header';
import TaskInput from './components/TaskInput';
import TaskCounter from './components/TaskCounter';
import TaskList from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState([]); //define o estado tasks como como array vazio 

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]); //setTasks([...tasks, ...]): Atualiza o estado tasks, adicionando um novo objeto. e define o estado
  };


  const toggleTask = (taskName) => { // alterna um estado de uma tarefa.
    setTasks(tasks.map(task =>  //criando uma nova lista de tarefas e utilizando o método map para aplicar a modificação de maneira imutável (sem alterar diretamente a lista original).
      task.name === taskName ? { ...task, completed: !task.completed } : task
    ));
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
      <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
     
    </div>
  );
}

export default App;
