import React, { useState } from 'react';

export const ReactForm = () => {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        date: "",
        gender: "",
    });

    const [prompts, setPrompts] = useState([
        {
            prompt: "",
            answer: "",
            timestamp: new Date().getTime(),
        }
    ]);

    const handlePrompt = (e, i) => {
        const { id, value } = e.target;
        let newPrompts = [...prompts];
        newPrompts[i] = { ...newPrompts[i], [id]: value }; 
        setPrompts(newPrompts);
    };

    const handleAddPrompt = () => {
        setPrompts([...prompts, {
            prompt: "",
            answer: "",
            timestamp: new Date().getTime(),
        }]);
    };

    console.log(prompts);

    const handleInput = e => {
        const { id, value } = e.target;
        setUserInfo({ ...userInfo, [id]: value });
    };

    const handleDelete = (i) => {
        let deletePrompts = [...prompts];
        deletePrompts.splice(i,1);
        setPrompts(deletePrompts);
    }

    return (
        <div>
            <h2>Let's Create a React Form</h2>
            <form>
                <fieldset>
                    <legend>About You</legend>
                    <div>
                        <label>What's your name?</label>
                        <input id="firstName" type="text" placeholder="First Name" onChange={handleInput}/>
                        <input id="lastName" type="text" placeholder="Last Name" onChange={handleInput}/>
                    </div>
                    <div>
                        <label>What's your email?</label>
                        <input id="email" type="email" placeholder="email@example.com" onChange={handleInput}/>
                    </div>
                    <div>
                        <label>What's your Birth Date?</label>
                        <input id="date" type="date" max="2005-01-30" onChange={handleInput}/>
                    </div>
                    <div>
                        <label>What's your Gender?</label>
                        <select id="gender" onChange={handleInput}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="MTF">MTF</option>
                            <option value="FTM">FTM</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Prompts</legend>
                    <div>
                        <label>Choose a Prompt!</label>
                        {prompts.map((prompt, i) => (
                            <div key={prompt.timestamp}>
                                <div>
                                <select id="prompt" onChange={e => handlePrompt(e, i)}>
                                    <option value="">Select a prompt</option>
                                    <option value="We match vibe if we...">We match vibe if we...</option>
                                    <option value="We can be friends if...">We can be friends if...</option>
                                    <option value="If I was a superman I would...">If I was a superman I would...</option>
                                    <option value="My spontaneous adventure was...">My spontaneous adventure was...</option>
                                    <option value="My Mother once told me...">My Mother once told me...</option>
                                </select>
                                <button onClick={() => handleDelete(i)}>-</button>
                                </div>
                                <textarea 
                                    id="answer" 
                                    rows={5} 
                                    placeholder="Let your true colors shine" 
                                    onChange={e => handlePrompt(e, i)}
                                />
                            </div>
                        ))}
                        <button type="button" onClick={handleAddPrompt}>Add Prompt</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default ReactForm;
