import { createStore, combineReducers, applyMiddleware } from 'redux';
import { incrementReducer, decrementReducer,todoReducer } from './reducers'
import thunk from 'redux-thunk';

//middleware code 
const WelcomeMiddleware = function (store) {
    return function (next) {
        return function (action) {
            // your middleware-specific code goes here
            console.info(`Welcome to Redux`);
            return next(action);
        }
    }
};
const Logger = function (store) {
    return function (next) {
        return function (action) {
            // your middleware-specific code goes here
            console.log('dispatching', action)
            let result = next(action)
            console.log('next state', store.getState())
            return result
        }
    }
};

const middlewareConfig = applyMiddleware(WelcomeMiddleware, Logger, thunk);
const rootReducer = combineReducers({
    incrementReducer,
    decrementReducer,
    todoReducer
});
//create store
const store = createStore(rootReducer, middlewareConfig);

export { store }