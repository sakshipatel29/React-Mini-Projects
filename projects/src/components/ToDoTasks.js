// import React, {  useState } from 'react'
// import InputForTask from './InputForTask'
// import BoardForTask from './BoardForTask'


// const ToDoTasks = () => {
//     const [taskList, setTaskList] = useState('');

//     console.log(taskList);


//   return (
//     <div>
//     <InputForTask taskList={taskList} setTaskList={setTaskList}/>

//     <div>
//     {taskList.map((task, index) => 
//         <li key={index}>{task}</li>
//     )}
//     </div>

//     <BoardForTask />
//     </div>
//   )
// }

// export default ToDoTasks

import React, { useState } from 'react';
import InputForTask from './InputForTask';
import BoardForTask from './BoardForTask';

const ToDoTasks = () => {
    const [taskList, setTaskList] = useState([]); // Initialize as an empty array

    console.log(taskList);

    return (
        <div>
            <InputForTask taskList={taskList} setTaskList={setTaskList} />

            <div>
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </div>

            
        </div>
    );
}

export default ToDoTasks;
