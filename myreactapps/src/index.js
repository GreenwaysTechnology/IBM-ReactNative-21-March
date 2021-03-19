import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';


//Sending request to store
//action ; literal object ;
const IncrementAction = {
    type: 'INCREMENT'
};

//reducer
const CounterReducer = (counter = 10, action) => {
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
/////////////////////////////////////////////////////////////////////////////////
//mapper function ; convert redux state into react props

function mapStateToProp(counter) {
    //mapper object
    return {
        //left: right - prop:state
        counter: counter
    }
}
//Step 3: Declare React component
function IncrementComponent(props) {
    //event listener
    function onIncrement(e) {
        //TODO
        props.dispatch(IncrementAction)
    }
    return <div>
        <h1>React - Redux - Counter App</h1>
        <h2>Increment : {props.counter}</h2>
        <button onClick={onIncrement}>+</button>
    </div>
}
//Higher order Component - feature merged
const IncrementContainer = connect(mapStateToProp)(IncrementComponent);


const App = () => <div>
    <Provider store={store}>
        <IncrementContainer />
    </Provider>
</div>
render(<App />, document.getElementById('root'));


