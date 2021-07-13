import React from 'react'
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';



const Cards = (props) => {

    const deleteHandler = (e, id) => {
        e.preventDefault();
        props.setTaskList(props.taskList.filter((t) => t.id !== id));

    };
    
   

    return (
        <div className = "cards-list">

        {props.taskList !== [] ?
            <ol>
                {props.taskList.map(t => <li className="list-item">{t.props.value}
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
