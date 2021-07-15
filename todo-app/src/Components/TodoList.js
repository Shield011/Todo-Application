import React, {useState, useEffect} from 'react'

import { InputGroup, InputGroupAddon, Button, Input} from 'reactstrap';
import AddTaskmain from './AddTaskmain';
import Cards from './Cards';





const  TodoList = () => {

    
   const [modal, setModal] = useState(false);
   const [taskList, setTaskList] = useState([])


//    useEffect(() => {
//        let arr = localStorage.getItem("taskList")
       
//        if(arr){
//            let obj = JSON.parse(arr)
//            setTaskList(obj)
//        }
//    }, [])

  

   
   const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    // localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()

}
 
   
    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        // localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    } 
    
    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        // localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }
        
            
        
        return (
            <>
           
           
            <div className = "header text-center">
          
                <h1 className = "page-heading"> ToDo List</h1>
                <br/>
                <form>
                    <InputGroup className = "search-bar">
                    <InputGroupAddon addonType="append">
                    <Button color="primary">Search</Button>
                    </InputGroupAddon>
                    <Input placeholder="Type here to search..." />
                    </InputGroup>
        
                </form>
                <br></br>
               
              

                
                <button className = "btn btn-primary addTask-button" onClick = {() => setModal(true)}>Add a New Task </button>
                
               
            </div>
           
            <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Cards taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
            </div>

            <AddTaskmain modal = {modal} toggle= {toggle} save = {saveTask} />
            
            </>
            
        );
    }

export default TodoList
