import React, { useEffect } from 'react';
import Form from './components/Form'
import ToDoList from './components/ToDolist';
import './App.css'
import { useSelector } from 'react-redux';


const App = () => {

    const todos = useSelector(state => state.todos)

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])


    return (
        <>
            <div className='header'>
                <h2 className='header-title'>My Todo List</h2>
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