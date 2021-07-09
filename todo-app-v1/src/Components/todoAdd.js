import React from 'react'

function todoAdd() {
    return (
        <div className = "todo-add">
            <form className = "todo-add-form">
                <label>Add a Task:</label>
                <input type = "text" placeholder = "Enter here" className = "todo-add-new-item" />
                <label for="Priority-menu">Priority</label>
                    <select id="priority-menu-list">
                    <option value="High">High</option>
                    <option value="Mid">Mid</option>
                    <option value="Low">Low</option>
                    </select>
               
            </form>
            <button className = "create-todo-button">Add</button>
            <button className = "cancel-todo-button">Cancel</button>
            
        </div>
    )
}

export default todoAdd
