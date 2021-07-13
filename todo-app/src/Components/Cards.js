import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';



const Cards = (props) => {
    let newtaskList = props.taskList;

    const deleteHandler = (e, id) => {
        e.preventDefault();
        setTaskList(taskList.filter((t) => t.id != id));

    };
    


    return (
        <div className = "cards-list">

        {newtaskList !== [] ?
            <ol>
                {newtaskList.map(t =>
                    <li className="list-item">{t.props.value}
                    <FaEdit/>
                    <MdDelete onClick = {e => deleteHandler(e, t.id)}/></li>
                    
                    )
                    }
            </ol>
            : null }
        </div>




    );
 }



export default Cards
