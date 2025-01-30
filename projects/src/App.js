import './App.css';
import ReactForm from './components/ReactForm';
import StateAndProp from './components/StateAndProp';
import StopWatch from './components/StopWatch';
import ToDoTasks from './components/ToDoTasks';

function App() {
  return (
    <div className="App">
    <div className="box">
      <StopWatch />
      <ToDoTasks />
      <StateAndProp />
      <ReactForm />
    </div>
    </div>
  );
}

export default App;
