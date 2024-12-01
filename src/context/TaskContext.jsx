import React, { createContext, useContext, useState } from "react";

// Criando o contexto
const TaskContext = createContext();

// Provedor do contexto
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Função para adicionar uma tarefa
  const addTask = (name) => {
    setTasks([...tasks, { name, completed: false }]);
  };

  // Função para alternar o estado de uma tarefa
  const toggleTask = (name) => {
    setTasks(
      tasks.map((task) =>
        task.name === name ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Função para deletar uma tarefa
  const deleteTask = (name) => {
    setTasks(tasks.filter((task) => task.name !== name));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Hook para acessar o contexto
export const useTaskContext = () => useContext(TaskContext);
