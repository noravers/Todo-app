import React from 'react';
import Form from './components/Form'
import ToDoList from './components/ToDolist';
import './App.css'

const App = () => {
    return (
        <>
            <div className='header'>
                <h2>My Todo List</h2>
            </div>
            <div className='big-container'>
                <div className='big-container-new-task'>
                    <Form />
                </div>
                <div className='big-container-tasks'>
                    <ToDoList />
                </div>
            </div>
        </>
    )
}

export default App;