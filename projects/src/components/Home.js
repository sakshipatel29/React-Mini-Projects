import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import './Home.css';


export const Home = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div className="home-container">
            <h2>{user}'s Home</h2>
            <button className="edit-button" onClick={() => setUser("Somu")}>Edit Name</button>
            <div className="links-grid">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/recommendations" className="nav-link">Recommendations</Link>
                <Link to="/podcast" className="nav-link">Podcast</Link>
                <Link to="/stopwatch" className="nav-link">Stop Watch</Link>
                <Link to="/todotask" className="nav-link">To Do Tasks</Link>
                <Link to="/stateandprops" className="nav-link">State And Props</Link>
                <Link to="/reactform" className="nav-link">React Dynamic Form</Link>
                <Link to="/reactdnd" className="nav-link">React Drag and Drop</Link>
                <Link to="/usereducer" className="nav-link">Use Reducer</Link>
            </div>
        </div>
    )
}

export default Home;