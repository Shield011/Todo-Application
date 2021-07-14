import React from 'react'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
// import { useHistory } from "react-router-dom";
// import { withRouter } from 'react-router';


const  TodoList = (props) => {
    
    
        // let history = useHistory();

        const handleClick = () => {
            props.history.push("/AddTask");
    }

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
                {/* <button className = "btn btn-primary"> Search</button> */}
            </form>
            <br></br>
            <button className = "btn btn-primary addTask-button" onClick = {handleClick}>Add New Task </button>
        

        </div>

        <div className = "task-container">

        </div>
        </>
        
    )
}

export default TodoList
