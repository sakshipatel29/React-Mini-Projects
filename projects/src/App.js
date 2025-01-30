import './App.css';
import ReactForm from './components/ReactForm';
import StateAndProp from './components/StateAndProp';
import StopWatch from './components/StopWatch';
import ToDoTasks from './components/ToDoTasks';

function App() {
  return (
    <div className="app">
      <div className="grid-container">
        <div className="component-card">
          <StopWatch />
        </div>
        <div className="component-card">
          <ToDoTasks />
        </div>
        <div className="component-card">
          <StateAndProp />
        </div>
        <div className="component-card">
          <ReactForm />
        </div>
      </div>
    </div>
  );
}

export default App;