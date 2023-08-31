import React from 'react'
import './Tasks.css'
import Task from '../Task/Task'

export default function Tasks({ tasks, updateTask, deleteTask }) {
  return (
    <div className='task-list'>
      {tasks.map((task)=> (
        <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask}/>
      ))}
    </div>
  )
}
