import React, {useState} from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import AddTaskmain from './AddTaskmain';



const  TodoList = (props) => {
        
    const [active, setActive] = useState("First")


        
    
        return (
            <>
            <div className = "header text-center">
                <h1 className = "page-heading"> ToDo List</h1>
                <br/>
                <form>
                    <InputGroup className = "search-bar">
                    <InputGroupAddon addonType="append">
                    <Button color="primary">Search</Button>
                    </InputGroupAddon>
                    <Input placeholder="Type here to search..." />
                    </InputGroup>
        
                </form>
                <br></br>
                <button className = "btn btn-primary addTask-button" onClick = {() => setActive("Second")}>Add a New Task </button>
                {active === "First"}
                {active === "Second" && <AddTaskmain /> }
            </div>

            <div className = "task-container">

                

            </div>
            </>
            
        );
    }

export default TodoList
