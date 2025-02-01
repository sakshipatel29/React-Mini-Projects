import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';


export const Home = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <div> 
        <h2>{user}'s Home</h2>
        <button onClick={() => setUser("Somu")}>Edit Name</button>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/podcast">Podcast</Link>
        <Link to="/stopwatch">Stop Watch</Link>
        <Link to="/todotask">To Do Tasks</Link>
        <Link to="/stateandprops">State And Props</Link>
        <Link to="/reactform">React Dynamic Form</Link>
        </div>
    )
}

export default Home;