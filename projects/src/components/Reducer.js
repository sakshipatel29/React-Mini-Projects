import React, { useState } from 'react'

const Reducer = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState("");

    const handleSumbit = e => {
        e.preventDefault();
        setError("");
        try {
            if (username === "Saifali" && password === "Ronak") {
                setLoggedIn(true);
            } else {
                throw Error;
            }
            setPassword("");
        } catch (error) {
            setError("Incorrect Username or Password!");
            setUsername("");
            setPassword("");
        }
    }
    return (
        <div>
            <h2>Use Reducer Learning</h2>
            <div>
                {loggedIn ? (
                    <>
                        <h2>Welcome {username}!</h2>
                        <button onClick={() => setLoggedIn(false)}>Logout</button>
                    </>
                ) : (
                    <div>
                        <form onSubmit={handleSumbit}>
                            <label>Username:</label>
                            <input type='text' placeholder='Username' autoComplete='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <label>Password:</label>
                            <input type='text' placeholder='Password' autoComplete='current-password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button type='submit'>Login</button>
                            <p>{error}</p>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Reducer;