import React, { useEffect, useState } from 'react';
import './CSS/StopWatch.css';
const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    return (
        <div className="stopwatch-container">
    <div className="stopwatch-header">
        <h2 className="stopwatch-title">Stop Watch</h2>
        <div className="stopwatch-time">
            <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
        </div>
    </div>
    <div className="stopwatch-controls">
        {running ? (
            <button
                onClick={() => setRunning(false)}
                className="stopwatch-button stop"
            >
                Stop
            </button>
        ) : (
            <button
                onClick={() => setRunning(true)}
                className="stopwatch-button start"
            >
                Start
            </button>
        )}
        <button
            onClick={() => setTime(0)}
            className="stopwatch-button reset"
        >
            Reset
        </button>
    </div>
</div>

    );
};

export default StopWatch;
