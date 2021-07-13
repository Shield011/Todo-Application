import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';



const Cards = (deleteHandler) => {

    return (
        <div className = "cards-list">

        {props.taskList !== [] ?
            <ol>
                {props.taskList.map(t =>
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
