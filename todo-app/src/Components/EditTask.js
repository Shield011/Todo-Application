import React from 'react'
import Setpriority from './Setpriority';
import { Button } from 'reactstrap';

const EditTask = () => {

    return (
        <div className = "edit-task-page">
            <h2 className =" edit-task-page-heading"> Edit Task</h2>
            <br/>
                <form>
                    <div className = "form-group">
                        <textarea rows = "6" className="form-control" placeholder = "Write here.." name = "editTask"></textarea>
                    </div>
                </form>
          
            <Button className= "update-button" color = "primary" size="lg" block>Update</Button>{' '}
            <Button className = "canceledit-button"  color = "secondary" size="lg" block>Cancel</Button>
        </div>
           
    )
}


export default EditTask

