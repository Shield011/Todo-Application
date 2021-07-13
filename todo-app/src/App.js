import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';
import AddTask from './Components/AddTask';

function App() {
  return (
    <div className="App">
    <TodoList />
    <Cards />
    <AddTask></AddTask>
   
    <Router>
      <Switch>
        <Route exact path = "/addTask" component = {AddTask}/>

      </Switch>
    </Router>

    
   
    </div>
   
  );
}

export default App;
