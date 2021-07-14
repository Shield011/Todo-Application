import React, {useState} from 'react'
import Setpriority from './Setpriority';
import { Button, Modal} from 'reactstrap';


const AddTaskmain = ({modal, toggle, save}) => {

    const [taskDetails, setTaskDetails] =useState('');

    const handleChange = (e) => {
        setTaskDetails(e.target.value);

    }
    const handleSave = (e) => {
        e.preventDefault()
        let taskObj = {}
        taskObj["Name"] = taskDetails
        save(taskObj)

    }
    return (
        <Modal isOpen = {modal} toggle = {toggle}>
        <div className = "add-task-page blur">
                <h2 className =" add-task-page-heading">Create New Task</h2>
                <br/>
                    <form>
                        <Setpriority />
                        <div className = "form-group">
                            <label className = "new-task-label"> Add Task: </label>
                            <textarea rows = "6" className="form-control" placeholder = "Write here.." name = "newTask" value = {taskDetails} onChange = {handleChange}></textarea>
                        </div>
                    </form>
                    
            
                <Button className= "add-button" color = "primary" size="lg" block onClick = {handleSave}>Add</Button>{' '}
                <Button className= "cancel-button" color = "secondary" size="lg" block onClick = {toggle}>Cancel</Button>           

        
        
        </div>
        </Modal>

    );
    }
           
    



export default AddTaskmain;

