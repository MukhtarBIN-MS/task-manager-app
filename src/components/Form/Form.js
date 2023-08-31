import React, { useState } from "react";
import "./Form.css";

export default function Form({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !dueDate) {
      alert("Complete the form please");
    } else {
      const newTask = {
        id: new Date().getTime(),
        title,
        description,
        dueDate,
        completed: false,
        reminder: false,
      };
      addTask(newTask);
      setTitle("");
      setDescription("");
      setDueDate("");
    }
  };
  return (
    <div className="task-form">
      <h2>Add</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Title">Title</label>
        <input
          id="Title"
          type="text"
          placeholder="Add Task Title......."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="Description">Description</label>
        <textarea
          id="Description"
          placeholder="Add Task Desc......."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="Date">Date</label>
        <input
          id="Date"
          type="date"
          placeholder="MM/DD/YYYY"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        /><br/>
          
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}
