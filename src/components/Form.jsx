import React, { useEffect, useState } from 'react';
import './Form.css'
import { addTodo, todoEdit, todoUpdate } from '../actionCreators/actions';
import { useDispatch, useSelector } from 'react-redux';



const initialFormValues = {
    title: '',
    description: ''
}


const Form = () => {

    const [formValues, setFormValues] = useState(initialFormValues)
    const { title, description } = formValues
    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState(null)

    const dispatch = useDispatch()
    const editState = useSelector(state => state.todoEdit)

    useEffect(e => {
        editState ? setFormValues(editState) : setFormValues(initialFormValues)
    }, [editState])

    useEffect(() => {
        errorMsg && title.trim() && setErrorMsg({ ...errorMsg, title: null });
    }, [title])

    useEffect(() => {
        errorMsg && description.trim() && setErrorMsg({ ...errorMsg, description: null })
    }, [description])


    function handleSubmit(e) {
        e.preventDefault()

        setErrorMsg(validation({ title, description }))
        const error = validation({ title, description })


        if (Object.keys(error).length === 0) {
            const newTodo = {
                id: Date.now(),
                ...formValues,
                completed: false
            }
            if (!editState) {
                dispatch(addTodo(newTodo))
                setFormValues(initialFormValues)
                setSuccessMsg('Successfully created')
            }
            if (editState) {
                dispatch(todoUpdate(formValues))
                dispatch(todoEdit(null))
                setSuccessMsg('Successfully updated')
            }
            setTimeout(() => {
                setSuccessMsg('')
            }, 2000)

        }
    }


    function validation({ title, description }) {
        let errors = {}

        if (!title.trim()) {
            errors.title = 'Add a title'
        } else if (/^([a-zA-Z]+)(\s[a-zA-Z]*$)/.test(title.trim())) {
            errors.title = 'Add a valid input'

        }
        if (!description.trim()) {
            errors.description = 'Add a description'
        }
        return errors

    }


    return (
        <div className='containerForm'>

            <div className='newtask-title'>
                <h1 className=''>{editState ? 'Edit ...' : 'New Task'}</h1>
            </div>
            <div className='contentForm' >




                <form className='formContainer' name='formAct' onSubmit={handleSubmit}>
                    <div className='form-input'>
                        <input
                            type='text'
                            placeholder='Write the title'
                            className='form-input1'
                            value={title}
                            onChange={e => setFormValues({ ...formValues, title: e.target.value })}
                        />
                        {
                            errorMsg && <span className='form-error'>{errorMsg.title}</span>
                        }
                    </div>
                    <div className='form-input form-input-description'>
                        <textarea
                            type="text"
                            oninput="this.size = this.value.length"
                            placeholder='Add the description'
                            className='form-input2'
                            value={description}
                            onChange={e => setFormValues({ ...formValues, description: e.target.value })}
                        ></textarea>
                        {
                            errorMsg && <span className='form-error form-error2'>{errorMsg.description}</span>

                        }
                    </div>
                    <div className='form-buttons'>
                        <div className='form-canceledit'>
                            {editState &&
                                <button
                                    className='form-cancel-button'
                                    onClick={e => dispatch(todoEdit(null))}
                                >
                                    Cancel Edit
                                </button>
                            }
                        </div>
                        <div className='form-button'>
                            <button
                                className='form-button-add'
                            >
                                {editState ? 'Update the task' : 'Add task'}
                            </button>
                        </div>

                    </div>
                    {
                        successMsg &&
                        <div className='success-message'>
                            {successMsg}
                        </div>
                    }

                </form>



            </div>

        </div>

    )
}

export default Form;


