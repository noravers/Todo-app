import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import rootReducer from '../reducer/reducer';


// const composeEnhancer = (typeof window !== 'undefined' && windows.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
});

export default store;


// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from '../reducer/reducer';
// import thunk from 'redux-thunk';


// const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// export default store;


