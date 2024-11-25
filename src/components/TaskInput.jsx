import React, { useState } from 'react';

function TaskInput({ AddTask }) {
  const [taskName, setTaskName] = useState('');

  const btnclick = () => {
    if (taskName.trim() === '') {
      alert('Por favor, digite uma tarefa!');
      return;
    }
    AddTask(taskName.trim());
    setTaskName('');
  };

  return (
    <div className="my-4 flex w-full justify-center">
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="w-1/2 p-2 rounded bg-gray-700 text-gray-200"
      />
      <button
        onClick={btnclick}
        className="ml-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white flex items-center"
      >
        Criar
       <span className="material-symbols-outlined ml-2">add_circle</span>

      </button>
    </div>
  );
}

export default TaskInput;
