import {createSlice} from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: "task",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                description: action.payload.description,
                isDone:false
            }
            state.push(newTask)
        
        },
        deleteTask: (state, action) => {
            return state.filter((item) => 
                item.id !== action.payload,
            );
        },
        editTask: (state, action) => {
            return state.map((el) => {
                return el.id === action.payload.id
                    ? {
                        id: action.payload.id,
                        description: action.payload.description
                    }
                    : {...el}
            })
        },
        checkTask: (state, action)=>{
            return state.map((el)=>{
                return el.id=== action.payload.id?
                {
                    ...el,
                    isDone: !action.payload.isDone
                }
                : el
            })
        },

}})

export const {addTask, deleteTask, editTask, checkTask} = taskSlice.actions;

export default taskSlice.reducer;
