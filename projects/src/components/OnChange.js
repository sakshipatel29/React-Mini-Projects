import React from 'react'

const OnChange = ({setUsername}) => {

    const hideUsername = () => {
        setUsername("");
    }
    return (
        <div>
            <button onClick={hideUsername}>Hide my name</button>
        </div>
    )
}

export default OnChange;