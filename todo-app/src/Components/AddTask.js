import React from 'react'
import Setpriority from './Setpriority';
import { Button } from 'reactstrap';

const AddTask = () => {

    return (
        <div className = "add-task-page">
                <form>
                    <Setpriority />

                    
                    <div class = "form-group">
                        <label> Add Task </label>
                        <textarea rows = "6" className="form-control" placeholder = "Write here.." name = "newTask"></textarea>
                    </div>
                </form>
          
            <Button color="primary" >Add</Button>{' '}
            <Button color="secondary">Cancel</Button>
        </div>
           
    )
}


export default AddTask

