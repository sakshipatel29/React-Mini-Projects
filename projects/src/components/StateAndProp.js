import React, { useState } from 'react';
import OnChange from './OnChange';
import './CSS/StateAndProp.css';//  // Import the CSS file

export const StateAndProp = () => {
    const [username, setUsername] = useState("");

    const setName = (e) => {
        setUsername(e.target.value);
    };

    return (
        <div className="container">
            <h2 className="title">Let's Learn State and Props</h2>
            <div className="input-container">
                <label htmlFor="username">Username:</label>
                <input 
                    id="username"
                    type="text" 
                    placeholder="Enter your name" 
                    onChange={setName} 
                    className="input-box"
                />
            </div>
            <p className="greeting">{username ? `${username}, how are you doing today?` : "Enter your name above!"}</p>
            <OnChange setUsername={setUsername} />
        </div>
    );
};

export default StateAndProp;
