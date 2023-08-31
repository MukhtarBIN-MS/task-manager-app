import React from 'react'
import './Task.css'

export default function Task({ task, updateTask, deleteTask }) {

  const handleCompleted = () => {
    const updatedTask = {...task, completed:!task.completed};
    updateTask(task.id, updatedTask)
  }
  const handleReminder = () => {
    const updatedTask = {...task, reminder:!task.reminder};
    updateTask(task.id, updatedTask)
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Date: {task.dueDate}</p>
      <div className="task-buttons">
        <button onClick={handleCompleted}>
          {task.completed ? 'Not Completed' : 'Completed'}
        </button>
        <button onClick={handleReminder}>
          {task.reminder ? 'Turn Off Reminder' : 'Set Reminder'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  )
}
