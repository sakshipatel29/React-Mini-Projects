import React, { useState } from 'react'
import OnChange from './OnChange';


const StateAndProp = () => {
    const [username, setUsername] = useState("");

    const setName = (e) => {
        setUsername(e.target.value);
    }
    return (
    <div>
        <h2> Lets learn State and Props.</h2>
        Username: <input type='text' placeholder='enter your name' onChange={setName} />
        <p> {username}, how are you doing today?</p>
        <OnChange setUsername={setUsername}/>
    </div>
    )
}

export default StateAndProp;