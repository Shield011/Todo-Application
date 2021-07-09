import React from 'react'

function todoform() {

    return (
        <div className = "todo-form-container">
            <form className = 'todo-form'>
                <input type = 'text' placeholder='Search' name='text'className='todo-search'></input>
                <i class = "todo-search-icon">
                    <img src = "src/Icons/magnifying-glass.png"></img>
                </i>
                <button className='todo-add-button'>
                    <i className = "add-icon">
                        <img src = "src/Icons/add.png"></img>
                    </i>
                </button>
            </form>
            <form className = "todo-filter-form">
            <button className = "todo-filter-button">
                <i className = "filter-icon">
                    <img src = "src/Icons/filter-filled-tools-symbol.png"></img>
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

export default todoform
