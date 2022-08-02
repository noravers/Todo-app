
const localTodos = JSON.parse(localStorage.getItem('todos'))

const initialState = {
    todos: localTodos || [
        {
            id: 1,
            title: 'To-do #1',
            description: 'Description To-do #1',
            completed: false
        },
        {
            id: 2,
            title: 'To-do #2',
            description: 'Description To-do #2',
            completed: false
        }
    ],
    todoEdit: null,
    errorTodos: `There's any task. Add one :) `
}


export default function rootReducer(state = initialState, action) {




    const opciones = {
        DONE() {
            let newState = state.todos.map(e => e.id === action.payload ? { ...e, completed: !e.completed } : e);
            return {
                ...state, todos: newState
            }
        },
        EDIT() {

            return {
                ...state, todoEdit: action.payload
            }

        },

        DELETE() {
            let newState = state.todos.filter(e => e.id !== action.payload);

            return {
                ...state, todos: newState
            }

        },
        ADD() {
            return {
                ...state, todos: [action.payload, ...state.todos]
            }
        },
        UPDATE_() {
            let newState = state.todos.map(e => e.id === action.payload.id ? action.payload : e);
            return {
                ...state, todos: newState
            }
        }
    }



    if (action.type === 'DONE' || action.type === 'DELETE' || action.type === 'ADD' || action.type === 'EDIT' || action.type === 'UPDATE_') return opciones[action.type]();

    return opciones[action.type] || state

}