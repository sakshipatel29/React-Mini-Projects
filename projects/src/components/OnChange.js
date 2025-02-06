import React from 'react';
import './CSS/OnChange.css'; // Import the CSS file

const OnChange = ({ setUsername }) => {
    const hideUsername = () => {
        setUsername("there");
    };

    return (
        <div className="button-container">
            <button className="hide-button" onClick={hideUsername}>
                Hide my name
            </button>
        </div>
    );
};

export default OnChange;
