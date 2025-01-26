import React, { useEffect, useState } from 'react';
import './CSS/stopwatch.css';
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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="flex items-center justify-center gap-2 py-4 text-2xl font-bold text-gray-800">
                <h2 className="text-lg font-semibold text-blue-600 mr-4">Stop Watch</h2>
                <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className="flex gap-4">
                {running ? (
                    <button
                        onClick={() => setRunning(false)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                    >
                        Stop
                    </button>
                ) : (
                    <button
                        onClick={() => setRunning(true)}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
                    >
                        Start
                    </button>
                )}
                <button
                    onClick={() => setTime(0)}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default StopWatch;
