import React, {useState} from 'react'
import Setpriority from './Setpriority';
import { Button } from 'reactstrap';

const AddTask = () => {
    const [task, setTask] = useState('')
    const [taskList, setTaskList] = useState([])
    
    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const AddTask = () => {
        if(task !== ""){
            const taskDetails ={
                id: Math.floor(Math.random()*1000),
                value: task,

            }
        setTaskList([...taskList, taskDetails]);
    }
    
    };

    return (
        <div className = "add-task-page">
            <h2 className =" add-task-page-heading">Create New Task</h2>
            <br/>
                <form>
                    <Setpriority />
                    <div className = "form-group">
                        <label className = "new-task-label"> Add Task: </label>
                        <textarea rows = "6" className="form-control" placeholder = "Write here.." name = "newTask" onChange = {(e) => handleChange(e)}></textarea>
                    </div>
                </form>
          
            <Button className= "add-button" color = "primary" size="lg" block onClick = {AddTask}>Add</Button>{' '}
            <Button className = "cancel-button"  color = "secondary" size="lg" block>Cancel</Button>

        
        </div>

    )
           
    
}


export default AddTask

