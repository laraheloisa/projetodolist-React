import React from 'react';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className="w-full max-w-4xl">
      {tasks.map((task) => (
        <li
          key={task.name}
          className="bg-gray-700 flex items-center justify-between p-4 mb-2 rounded"
        >
          <button
            onClick={() => onToggleTask(task.name)}
            className="text-gray-200 hover:text-blue-400"
          >
            <span className="material-icons">
              {task.completed ? 'check' : 'circle'}
            </span>
          </button>
          <div
            className={`flex-grow mx-4 ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {task.name}
          </div>
          <button
            onClick={() => onDeleteTask(task.name)}
            className="text-gray-500 hover:text-red-500"
          >
            <span className="material-icons">delete_forever</span>
          </button>
        </li>
      ))}
      {tasks.length === 0 && (
        <div className="text-center text-gray-500">
          <img src="Clipboard.png" alt="Clipboard" className="mx-auto my-4 w-16" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </ul>
  );
}

export default TaskList;
