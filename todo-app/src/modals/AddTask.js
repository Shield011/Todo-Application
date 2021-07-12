import React, {useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Setpriority from './Setpriority';

const AddTask = ({modal, toggle, save}) => {

    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        if (name === "newTask"){
            setNewTask(value)
        }

    }

    const handleSave = () => {
        let taskObj = {}
        taskObj["Name"] = newTask
        save(taskObj)
    
    }

    
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add new Task</ModalHeader>
            <ModalBody>
                <form>
                    <Setpriority />

                    <div class = "form-group">
                        <label> Add Task </label>
                        <textarea rows = "6" className="form-control" placeholder = "Write here.." value = {newTask}  onChange = {handleChange} name = "newTask"></textarea>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Add</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    )
}


export default AddTask

