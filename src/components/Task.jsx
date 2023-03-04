import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteTask, editTask, checkTask} from '../redux/taskSlice'

export const Task = ({id, title, isDone}) => {

    const [newTodo, setNewTodo]= useState ('');
    const [showForm, setShowForm]= useState (false);

    const dispatch = useDispatch();

    const cancelTask = () => {
        dispatch(deleteTask(id))
    }


    return (
        <div>
            <span>{title}</span>
            <button onClick={() => {
                    cancelTask()
                }}>X</button>
                <button onClick={(e)=>{setShowForm(!showForm)}}>update</button>
            {showForm?
                    <>
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(event) => setNewTodo(event.target.value)}/>
                        <button onClick={(e=>{ dispatch(editTask({id:id, description:newTodo})); setShowForm(false) })}>submit</button>
                    </>
            : null
            }

            <button onClick={(e=>{dispatch(checkTask({id:id, isDone:isDone}))})} >check</button>
        </div>
    )
}

export default Task;

