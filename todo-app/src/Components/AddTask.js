import React from 'react'
import Setpriority from './Setpriority';
import { Button } from 'reactstrap';

const AddTask = () => {

    return (
        <div className = "add-task-page">
            <h1 className =" add-task-page-heading">Create New Task</h1>
                <form>
                    <Setpriority />
                    <div className = "form-group">
                        <label> Add Task </label>
                        <textarea rows = "6" className="form-control" placeholder = "Write here.." name = "newTask"></textarea>
                    </div>
                </form>
          
            <Button className= "add-button" color = "primary" size="lg" block>Add</Button>{' '}
            <Button className = "cancel-button"  color = "secondary" size="lg" block>Cancel</Button>
        </div>
           
    )
}


export default AddTask

