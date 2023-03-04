import React from 'react'
import {useSelector} from 'react-redux'
import Task from './Task'

export const ListTask = () => {

    const listTask = useSelector((state) => {
        return state.task;
    });
    console.log(listTask)

    return (
        <div>
            <h1>To Do Tasks</h1>
            <ul >
                {
                    listTask.map((todo) => (
                        <li key={todo.id}>
                            <Task id={todo.id} title={todo.description} isDone={todo.isDone}/>
                        </li>
                    ))
                }
            </ul>
        </div>

    );
}

export default ListTask;