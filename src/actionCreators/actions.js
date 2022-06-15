const DONE = 'DONE';
const EDIT = 'EDIT';
const DELETE = 'DELETE';
const ADD = 'ADD';
const UPDATE_ = 'UPDATE_';


export const ToGetDone = (id) => {
    return {
        type: DONE,
        payload: id
    }
}

export const todoDelete = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}

export const todoEdit = (payload) => {
    return {
        type: EDIT,
        payload
    }
}

export const addTodo = (payload) => {
    return {
        type: ADD,
        payload,
    }
}

export const todoUpdate = (payload) => {
    return {
        type: UPDATE_,
        payload
    }
}

