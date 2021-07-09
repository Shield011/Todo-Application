import './App.css';
import TodoForm from './Components/TodoForm';
import TodoAdd from './Components/TodoAdd';

function App() {
  return (
    <div className="Todo-App">
      <h1>Todo app</h1>
      <p>Hi</p>
      <TodoForm />
      <TodoAdd />
    </div>
  );
}

export default App;
