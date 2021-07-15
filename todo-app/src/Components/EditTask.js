import React, {useState, useEffect} from 'react'
import { Button, Modal} from 'reactstrap';

const EditTask = ({modal, toggle, updateTask, taskObj})=> {

    const [taskDetails, setTaskDetails] = useState('')

    const handleChange = (e) => {
        setTaskDetails(e.target.value);
    }

    // useEffect(() => {

    //     setTaskDetails(taskObj.Name)

    // }, [])
    
    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj["Value"] =taskDetails
        updateTask(tempObj)

    }

    
    return (
        <Modal isOpen = {modal} toggle = {toggle}>
        <div className = "edit-task-page">
            <h2 className =" edit-task-page-heading">Edit Task</h2>
            <br/>
                <form>
                    <div className = "form-group">
                        <textarea rows = "6" className="form-control" value = {taskDetails} placeholder = "Write here.." name = "taskDetails" onChange = {handleChange}></textarea>
                    </div>
                </form>
          
            <Button className= "update-button" color = "primary" size="lg" block onClick = {handleUpdate}>Update</Button>{' '}
            <Button className = "canceledit-button"  color = "secondary" size="lg" block onClick = {toggle}>Cancel</Button>
        </div>

        </Modal>
           
    )
}


export default EditTask

