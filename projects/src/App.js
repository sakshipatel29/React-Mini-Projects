import './App.css';
import StateAndProp from './components/StateAndProp';
import StopWatch from './components/StopWatch';
import ToDoTasks from './components/ToDoTasks';

function App() {
  return (
    <div className="App">
      <StopWatch />
      <ToDoTasks />
      <StateAndProp />
    </div>
  );
}

export default App;
