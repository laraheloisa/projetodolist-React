import React from 'react';
import { useTaskContext } from '../context/TaskContext';

function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTaskContext();

  return (
    <ul className="w-full max-w-4xl">
      {tasks.map((task) => (
        <li
          key={task.name}
          className="bg-gray-700 flex items-center justify-between p-4 mb-2 rounded"
        >
          <button
            onClick={() => toggleTask(task.name)}
            className="text-gray-200 hover:text-blue-400 material-icons"
          >
            {task.completed ? 'check_circle' : 'radio_button_unchecked'}
          </button>
          <div
            className={`flex-grow mx-4 ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            {task.name}
          </div>
          <button
            onClick={() => deleteTask(task.name)}
            className="text-gray-500 hover:text-red-500 material-icons"
          >
            delete
          </button>
        </li>
      ))}
      {tasks.length === 0 && (
        <div className="text-center text-gray-500 justify-center">
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </ul>
  );
}

export default TaskList;
