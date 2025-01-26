import React, { useState } from 'react'

const InputForTask = ({taskList, setTaskList}) => {
    const [input,setInput] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        setTaskList([...taskList, input]);
        setInput("");
    }
  return (
    <div>
        <input type='text' placeholder='Add a Task' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={handleAddTask}>Add</button>
    </div>
  )
}

export default InputForTask