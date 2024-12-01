import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

function TaskInput() {
  const [taskName, setTaskName] = useState('');
  const { addTask } = useTaskContext();

  const handleAddTask = () => {
    if (taskName.trim() === '') { // usuário digitou algo no campo de entrada
      alert('Por favor, insira uma tarefa.'); 
      return;
    }
    addTask(taskName.trim());
    setTaskName('');
  };

  return (
    <div className="my-4 flex w-full max-w-4xl justify-center">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-2/3 p-2 rounded bg-gray-700 text-gray-200"
      />
      <button
        onClick={handleAddTask}
        className="ml-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white flex items-center"
      >
        Criar
        <span className="material-symbols-outlined ml-2">add_circle</span>
      </button>
    </div>
  );
}

export default TaskInput;
