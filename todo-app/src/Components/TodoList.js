import React, {useState, useEffect} from 'react'
import AddTask from '../modals/AddTask'

const  TodoList = () => {
const [modal, setModal] = useState(false);
const [taskList, setTaskList] = useState([])

useEffect(() => {

    let arr = localStorage.getItem("taskList")
    if(arr) {
        let obj = JSON.parse(arr)
        setTaskList(obj)


    }
}, [])

const toggle = () => {
    setModal(!modal);
}

const saveTask = (taskObj) => {
    let tempList = taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    setModal(false)

}

    return (
        <>
        <div className = "header text-center">
            <h1> ToDo List</h1>
            <form>
                <input type = "text"  placeholder = "Search..." >   
                </input>
                <button> Search</button>
            </form>
            <br></br>
            <button className = "btn btn-primary" onClick = {() =>setModal(true)}> Add New Task </button>

        </div>

        <div className = "task-container">
            {taskList.map((obj) => <li>{obj.Name}</li>)}

        </div>
        <AddTask toggle = {toggle} modal = {modal} save = {saveTask}/>        
        </>
    )
}

export default TodoList
