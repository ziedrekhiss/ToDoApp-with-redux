import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTask} from '../redux/taskSlice'

const AddTask = () => {
    const [addTodo, setAddTodo] = useState("");

    const dispatch = useDispatch()

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch(addTask({description: addTodo}));

        setAddTodo("");
    }

    return (
        <div>
            <input
                type="text"
                value={addTodo}
                onChange={(event) => setAddTodo(event.target.value)}/>
            <button onClick={onSubmit}>ADD</button>
        </div>
    )
}

export default AddTask