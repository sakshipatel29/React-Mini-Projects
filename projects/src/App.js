import './App.css';
// import ReactForm from './components/ReactForm';
// import StateAndProp from './components/StateAndProp';
// import StopWatch from './components/StopWatch';
// import ToDoTasks from './components/ToDoTasks';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Dashboard from './components/Dashboard';
import Recommendations from './components/Recommendations';
import Podcast from './components/Podcast';
import { UserContext } from './contexts/UserContext';
import {Home} from './components/Home';
import StopWatch from './components/StopWatch';
import ToDoTasks from './components/ToDoTasks';
import StateAndProp from './components/StateAndProp';
import ReactForm from './components/ReactForm';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState("Saifali")
  return (
    <div className="app">
        <BrowserRouter>
        <UserContext.Provider value={[user, setUser]}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/recommendations' element={<Recommendations />} />
            <Route path='/podcast' element={<Podcast />} />
            <Route path='/stopwatch' element={<StopWatch />} />
            <Route path='/todotask' element={<ToDoTasks />} />
            <Route path='/stateandprops' element={<StateAndProp />} />
            <Route path='/reactform' element={<ReactForm />} />
          </Routes>
          </UserContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;