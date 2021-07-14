import './App.css';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';
import Filter from './Components/Filter';

function App() {

  
  return (
    <div className="App">
    <TodoList />
    <Filter />
    <Cards />
    </div>
   
  );
}

export default App;
