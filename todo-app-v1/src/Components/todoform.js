import React from 'react'

function todoform() {


    return (
            <form className = 'todo-form'>
                <input
                type = 'text'
                placeholder='Search'
                name='text'
                className='todo-search'
                
                />
                <i class = "todo-search-icon">
                    <img src = "src/Icons/magnifying-glass.png"></img>
                </i>

            <button className='todo-add-button'>
                <i class = "add-icon">
                    <img src = "src/Icons/add.png"></img>
                </i>
            </button>


            </form>
       
            
            
    );
}

export default todoform
