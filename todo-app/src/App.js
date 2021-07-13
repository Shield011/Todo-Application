import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './Components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';
import AddTask from './Components/AddTask';
import EditTask from './Components/EditTask';
import Filter from './Components/Filter';

function App() {
  return (
    <div className="App">
    <TodoList />
    <Filter />
    <Cards />
    <AddTask></AddTask>
    {/* <EditTask /> */}
   
    <Router>
      <Switch>
        <Route exact path = "/addTask" component = {AddTask}/>
        <Route exact path = "/editTask" component = {EditTask}/>

      </Switch>
    </Router>

    
   
    </div>
   
  );
}

export default App;
