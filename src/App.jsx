import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListTask from './components/ListTask'
import AddTask from './components/AddTask'

function App() {

    return (
        <div className="App">
            <h4>My Tasks</h4>
            <AddTask/>
            <ListTask/>
        </div>
    )
}

export default App
