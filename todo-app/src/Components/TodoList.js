import React from 'react'
// import { useHistory } from "react-router-dom";
// import { withRouter } from 'react-router';


const  TodoList = () => {
    // let history = useHistory();

    return (
        <>
        <div className = "header text-center">
            <h1> ToDo List</h1>
            <form>
                <input type = "text"  placeholder = "Search..." >   
                </input>
                <button className = "btn btn-primary"> Search</button>
            </form>
            <br></br>
            <button className = "btn btn-primary" >Add New Task </button>

        </div>

        <div className = "task-container">

        </div>
        </>
        
    )
}

export default TodoList
