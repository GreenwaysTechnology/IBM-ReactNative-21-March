import { createStore } from 'redux';

//reducer
const CounterReducer = (counter = 0, action) => {
    //logic
    switch (action.type) {
        case 'INCREMENT':
            //return new state
            return counter + 1;
        default:
            //must return default state
            return counter;
    }
}
//create store
const store = createStore(CounterReducer);

//get new state
//calling store methods
store.subscribe(() =>{
    //get the new state
    console.log(store.getState());
});

//Sending request to store
//action ; literal object ;
const IncrementAction = {
    type: 'INCREMENT'
};
store.dispatch(IncrementAction);
store.dispatch(IncrementAction);
store.dispatch(IncrementAction);
store.dispatch(IncrementAction);









