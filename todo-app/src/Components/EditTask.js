import React from 'react'
import { Button } from 'reactstrap';

const EditTask = (props) => {

    // const [edtitedTask, setEdtitedTask] = useState("")
    const updateTask = (id, newValue) => {
        props.setTask(prev => prev.map(item => (item.id === props.task.Id ? newValue : item)));
        

    };   
    
    return (
        <div className = "edit-task-page">
            <h2 className =" edit-task-page-heading"> Edit Task</h2>
            <br/>
                <form>
                    <div className = "form-group">
                        <textarea rows = "6" className="form-control" placeholder = "Write here.." name = "editTask"></textarea>
                    </div>
                </form>
          
            <Button className= "update-button" color = "primary" size="lg" block onClick = {e => updateTask(props.id, props.newValue)}>Update</Button>{' '}
            <Button className = "canceledit-button"  color = "secondary" size="lg" block>Cancel</Button>
        </div>
           
    )
}


export default EditTask

