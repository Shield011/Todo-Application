import React from 'react'

function TodoForm() {

    return (
        <div className = "Todo-form-container">
            <form className = 'Todo-form'>
                <input type = 'text' placeholder= 'Search' name='text'className = 'Todo-search'></input>
                <i class = "Todo-search-icon">
                    <img src = "src/Icons/Magnifying-glass.png"></img>
                </i>
                <button className='todo-add-button'>
                    <i className = "add-icon">
                        <img src = "src/Icons/Add.png"></img>
                    </i>
                </button>
            </form>
            <form className = "todo-form-filter">
            <button className = "todo-filter-button">
                <i className = "filter-icon">
                    <img src = "todo-app-v1/src/Icons/Filter-filled-tool-symbol.png"></img>
                    <label for="Filter-menu"></label>
                    <select id="Filter-menu-list">
                    <option value="Date">Date</option>
                    <option value="Time">Time</option>
                    <option value="PriorityA">Priority-Ascending</option>
                    <option value="PriorityD">Priority-Descending</option>
                    </select>
                </i>
            </button>
            </form>

            
        </div>
            
       
            
            
    );
}

export default TodoForm
