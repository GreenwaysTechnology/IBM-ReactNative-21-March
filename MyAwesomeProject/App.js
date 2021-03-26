import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';

export const { container, text } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
        alignItems: 'center',
        justifyContent: 'center',
    },
});
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
function IncrementComponent(props) {
    //event listener
    function onIncrement(e) {
        //TODO
        props.dispatch(IncrementAction)
    }
    return <View style={container}>
        <Text>React Native - Redux - Counter App</Text>
        <Text>Increment : {props.counter}</Text>
        <Button title="+" onPress={onIncrement} />
    </View>
}
const IncrementContainer = connect(mapStateToProp)(IncrementComponent);

const App = () => {

    return <View style={container}>
        {/**state as prop */}
        <Provider store={store}>
            <IncrementContainer />
        </Provider>
    </View>
}

export default App;