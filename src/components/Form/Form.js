import React, { useState } from 'react'
import './Form.css'

export default function Form({ addTask }) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!title) return
    const newTask = {
      id: new Date().getTime(),
      title,
      description,
      dueDate,
      completed:false,
      reminder:false
    }
    addTask(newTask)
    setTitle('');
    setDescription('');
    setDueDate('')
  }
  return (
    <div className='task-form'>
      <h2>Add task</h2>
      <form onSubmit={handleSubmit}>
      <label htmlFor="Title">Title</label>
      <input id='Title' type='text' value={title} onChange={(e)=> setTitle(e.target.value)} />

      <label htmlFor="Description">Description</label>
      <textarea id='Description' value={description} onChange={(e)=> setDescription(e.target.value)} />

      <label htmlFor="Due Date">Date</label>
      <input id='Due Date' type='date' value={dueDate} onChange={(e)=> setDueDate(e.target.value)} />
      
      <button type='submit'>Add Task</button>
      </form>
    </div>
  )
}
