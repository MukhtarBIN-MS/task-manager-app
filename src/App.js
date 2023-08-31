import React, { useState } from "react";
import Form from "./components/Form/Form";
import Tasks from "./components/Tasks/Tasks";
import "./App.css";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([]);

  /* This function add a new task to list of tasks */
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  /* This function updates the task whenever there is change of state */
  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  /* This function delete the task */
  const deleteTask = (taskId) => {
    const deletedTask = tasks.filter((task) => task.id !== taskId);
    setTasks(deletedTask);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <Form addTask={addTask} />
      <Tasks tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}
