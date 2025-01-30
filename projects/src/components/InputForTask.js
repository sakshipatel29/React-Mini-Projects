import React, { useState } from 'react';
import './CSS/InputForTask.css'; // Import the CSS file

const InputForTask = ({ taskList, setTaskList }) => {
    const [input, setInput] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (input.trim() === "") return; // Prevent empty tasks
        setTaskList([...taskList, input]);
        setInput("");
    };

    return (
        <div className="task-input-container">
            <input 
                type="text" 
                placeholder="Add a Task" 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                className="task-input"
            />
            <button onClick={handleAddTask} className="add-task-button">
                Add
            </button>
        </div>
    );
};

export default InputForTask;
