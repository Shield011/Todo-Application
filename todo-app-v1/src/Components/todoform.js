import React from 'react'

function todoform() {


    return (
        <div className = "todo-search">
            <form className = 'todo-form'>
                <input
                type = 'text'
                placeholder='Search'
                name='text'
                className='todo-search'
                
            />
            <button className='todo-add-button'>
                <i class = "search-icon">
                    <img src = "src/Icons/magnifying-glass.png"></img>
                </i>
            </button>
            </form>
        </div>
            
            
    );
}

export default todoform
