import React, { useState } from 'react';
import InputForTask from './InputForTask';
import BoardForTask from './BoardForTask';
import './CSS/ToDoTasks.css'; // Import the CSS file

const ToDoTasks = () => {
    const [taskList, setTaskList] = useState([]); // Initialize as an empty array

    console.log(taskList);

    return (
        <div className="todo-container">
            <h1 className="todo-header">To-Do Tasks</h1>
            <div className="todo-input-section">
                <InputForTask taskList={taskList} setTaskList={setTaskList} />
            </div>

            <ul className="todo-task-list">
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>

            <BoardForTask />
        </div>
    );
}

export default ToDoTasks;
