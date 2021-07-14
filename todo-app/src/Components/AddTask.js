import React, {useState} from 'react'
import Setpriority from './Setpriority';
import { Button } from 'reactstrap';
import { withRouter } from "react-router";
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const AddTask = (props) => {
    
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

    // const updateTask = (id, newValue) => {
    //     props.setTask(prev => prev.map(item => (item.id === props.task.Id ? newValue : item)));
        

    // }; 

    // const deleteHandler = (e, id) => {
    //     e.preventDefault();
    //     props.setTaskList(props.taskList.filter((t) => t.id !== id));

    // };
    

   
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
            {taskList !== [] ?
            <ol>
                {taskList.map(t => <li className="list-item">{t.value}
                    {/* <FaEdit onClick = {updateTask}/>
                    <MdDelete onClick = {deleteHandler}/> */}
                    
                    </li>
                    
                    )
                    }
                  
            </ol>
            : null }
        
        </div>

    )
           
    
}


export default withRouter (AddTask);

