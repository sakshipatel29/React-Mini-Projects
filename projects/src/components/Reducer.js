import React, { useReducer } from 'react'

const logInReduce = (state, action ) => {
    switch (action.type) {
        case "field": {
            return {
            ...state,
            [action.fieldName] : action.payload
            }
        }
        case "logIn": {
            return {
                ...state,
                error: "",
            }
        }
        case "success":{
            return{
                ...state,
                loggedIn: true,
                password: "",
            }
        }
        case "error": {
            return{
                ...state,
                error: "Incorrect Credentials!",
                loggedIn: false,
                username: "",
                password: "",
            }
        }
        case "logOut": {
            return{
                ...state,
                loggedIn: false,
            }
        }
        default: return state; 
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(logInReduce, {
        username: "",
        password: "",
        loggedIn: false,
        error: "",
    });

    const handleSumbit = e => {
        e.preventDefault();
        dispatch({type: "logIn"});
        try {
            if (state.username === "Saifali" && state.password === "Ronak") {
                dispatch({type: "success"});
            } else {
                throw Error;
            }
        } catch (error) {
            dispatch({type: "error"});
        }
    }
    return (
        <div>
            <h2>Use Reducer Learning</h2>
            <div>
                {state.loggedIn ? (
                    <>
                        <h2>Welcome {state.username}!</h2>
                        <button onClick={() => dispatch({type: "logOut"})}>Logout</button>
                    </>
                ) : (
                    <div>
                        <form onSubmit={handleSumbit}>
                            <label>Username:</label>
                            <input type='text' placeholder='Username' autoComplete='username' value={state.username} onChange={(e) => dispatch({
                                type: "field",
                                fieldName: "username",
                                payload: e.target.value,
                            })} />
                            <label>Password:</label>
                            <input type='password' placeholder='Password' autoComplete='current-password' value={state.password} onChange={(e) => dispatch({
                                type: "field",
                                fieldName: "password",
                                payload: e.target.value,
                            })} />
                            <button type='submit'>Login</button>
                            <p>{state.error}</p>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Reducer;