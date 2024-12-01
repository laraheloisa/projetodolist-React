import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import Clipboard from '../assets/Clipboard.png'

function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTaskContext();

  return (
    <ul className="w-full max-w-4xl">
      {tasks.map((task) => (
        <li
          key={task.name} //garate q o item será único
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
              task.completed ? 'line-through text-gray-500' : '' //Exibe o nome da tarefa no centro da linha.
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
      {tasks.length === 0 && ( //se tiver 0 tarefas
        <div className="text-center text-gray-500 justify-center">
          <img
              src={Clipboard}
              alt="Clipboard"
              className="mx-auto my-4 w-16"
            />
          <p>Você ainda não tem tarefas cadastradas</p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}
    </ul>
  );
}

export default TaskList;
