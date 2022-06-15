import React from 'react';
import Todo from './Todo';
import './ToDoList.css';
import { useSelector } from 'react-redux';

const ToDoList = (props) => {


    const listaToDos = useSelector(state => state.todos)



    return (
        <div className='containerForm todo-List-Container'>
            <div className="contentForm">
                <div className='formContainer'>
                    <div className='todo-Container-title'>
                        <h2>Tasks</h2>
                    </div>
                    {
                        listaToDos.length === 0
                            ?
                            <div className='success-message'>
                                There's any task. Add one {':)'}
                            </div>
                            :
                            (
                                listaToDos.map(todo => (
                                    <Todo
                                        key={todo.id}
                                        id={todo.id}
                                        title={todo.title}
                                        description={todo.description}
                                        completed={todo.completed}

                                    />
                                ))
                            )
                    }
                </div>
            </div>
        </div>


    )
}

export default ToDoList;