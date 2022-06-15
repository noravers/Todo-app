import React from 'react';
import './Todo.css';
import { ToGetDone, todoDelete, todoEdit } from '../actionCreators/actions';
import { useDispatch, } from 'react-redux';


const Todo = (props) => {

    const dispatch = useDispatch()



    function handleEdit() {

        let editObject = {
            id: props.id,
            title: props.title,
            description: props.description,
            completed: props.completed
        }
        dispatch(todoEdit(editObject))

    }





    return (
        <div className='todo-Container'>
            <div className='todo todo-firstline'>
                <h3>{props.title}</h3>
                <button
                    className='todo-button-done'
                    onClick={e => dispatch(ToGetDone(props.id))}>
                    {!props.completed ? <div className='check'></div> : 'Finished'}

                </button>
            </div>



            <div className='todo todo-secondline'>
                <p className='todo-description'>
                    {props.description}
                </p>
                <button
                    className='todo-button-edit'
                    onClick={(e) => handleEdit()}

                >
                    Edit

                </button>
                <button
                    className='todo-button-delete'
                    onClick={e => dispatch(todoDelete(props.id))}

                >
                    Delete
                </button>

            </div>



        </div>
    )
}

export default Todo;