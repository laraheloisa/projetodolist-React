import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const TaskCounter = () => {
  const { tasks } = useTaskContext();

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className="flex justify-between w-full max-w-4xl my-4">
      <div className="flex items-center space-x-2">
        <h3 className="text-blue-400 font-bold">Tarefas Criadas:</h3>
        <span className="bg-gray-700 px-2 py-1 rounded">{totalTasks}</span>
      </div>
      <div className="flex items-center space-x-2 mt-2">
        <h3 className="text-purple-400 font-bold">Tarefas Concluídas:</h3>
        <span className="bg-gray-700 px-2 py-1 rounded">{`${completedTasks} de ${totalTasks}`}</span>
      </div>
    </div>
  );
};

export default TaskCounter;
