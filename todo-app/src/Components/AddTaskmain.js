import React, {useState} from 'react'
import Setpriority from './Setpriority';
import { Button } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import TodoList from './TodoList';

const AddTaskmain = (props) => {

    const [state, setstate] = useState(" visible ")
    
   
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

    const updateTask = (id, newValue) => {

        setTask(prev => prev.map(item => (task.id === id ? newValue : item)));
        

    }; 

    const deleteHandler = (e, id) => {
        e.preventDefault();
        setTaskList(taskList.filter((taskList) => task.id !== id));

    };

    
  

   

   
    return (
        
        <div className = "add-task-page">
            <div className = "blur">

            </div>
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
            
        
            <Button className = "cancel-button"  color = "secondary" size="lg" block onClick = {() => setstate("notvisible")} >Cancel</Button>
            {state === "notvisible"}
            {taskList !== [] ?
            <ol>
                {taskList.map(t => <li className="list-item">{t.value}
                    <FaEdit onClick = {updateTask}/>
                    <MdDelete onClick = {deleteHandler}/>
                    
                    </li>
                    
                    )
                    }

           
                  
            </ol>
            : null }

        
        
        </div>

    );
           
    
}


export default AddTaskmain;

