import React, {useState}from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import EditTask from './EditTask';




const Cards = ({taskObj, index, deleteTask, updateListArray}) => {
    const[modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }
    
    const handleDelete = () => {
        deleteTask(index)
    } 

    return (
        <div className = "cards-list">
            <div className = "task-row">
                
               <p className = "task-details">{taskObj.Name}</p>
                <FaEdit onClick = {() => setModal(true)} />
                <MdDelete onClick = {handleDelete} />
                
            </div>


        <EditTask modal = {modal} toggle = {toggle} updateTask =  {updateTask} taskObj = {taskObj} />
        </div>




    );
 }



export default Cards
