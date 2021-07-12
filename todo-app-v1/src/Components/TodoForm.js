import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';
import './TodoForm.css';



const TodoForm = () => {

    const clickHandler = (onClick) =>{
        console.log("Clicked!!!")
    }

    return (
        <div className = "Todo-form-container">
            <form className = 'Todo-form'>
                <fieldset>
                <input type = 'text' placeholder= 'Search...' name='text' className = 'Todo-search'>  
                </input>
                <button className='todo-search-button' onClick = {clickHandler}>
                    <FaSearch />
                </button>
                </fieldset>
                

            </form>
                
                
                
           
            <form className = "todo-form-filter">
            <button className='todo-add-button' onClick = {clickHandler}>
                   New Todo <FaPlus />
                </button>
            
            <label for="Filter-menu">Filter:</label>
                    <select id="Filter-menu-list">
                    <option value="Name">Name</option>
                    <option value="PriorityA">Priority-Ascending</option>
                    <option value="PriorityD">Priority-Descending</option>
                    </select>

            </form>

            
        </div>
            
       
            
            
    );
}

export default TodoForm
