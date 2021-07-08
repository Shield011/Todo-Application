import React from 'react'

function todoAdd() {
    return (
        <div className = "todo-add">
            <form className = "todo-add-form">
                <label>Add a new Todo:</label>
                <input type = "text" placeholder = "Enter here" className = "todo-add-new-item" />
                <button className = "create-todo-button">Add</button>
                <button className = "cancel-todo-button">Cancel</button>
                    
                
            </form>
            
        </div>
    )
}

export default todoAdd
