import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [taskName, setTaskName] = useState('');

  const btnclick = () => {
    if (taskName.trim() === '') {
      alert('Por favor, digite uma tarefa!');
      return;
    }
    // Chamar a função recebida como propriedade
    onAddTask(taskName.trim());
    setTaskName('');
  };

  return (
    <div className="mb-4 flex justify-center w-3/4">
      <input
       type="text"
       placeholder="Adicione uma nova tarefa"
       value={taskName}
       onChange={(e) => setTaskName(e.target.value)} // Atualiza o estado
       className="w-3/4 p-2 rounded bg-gray-700 text-gray-200"
      />
      <button
        onClick={btnclick} // Chama a função ao clicar
        className="ml-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white flex items-center"
      >
        Criar
        <span className="material-symbols-outlined ml-2">add_circle</span>
      </button>
    </div>
  );
}

export default TaskInput;
