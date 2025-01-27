import React from 'react'
import './CSS/BoardForTask.css'

const BoardForTask = ({task, index, taskList, setTaskList}) => {

  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex,1);
    setTaskList((currentTask => currentTask.filter(todo => index === removeIndex)))
  }
  return (
    <>
    <div>
      <p>{task}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
    </>
  )
}

export default BoardForTask;