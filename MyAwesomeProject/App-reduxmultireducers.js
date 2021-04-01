import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

//action constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT';

//reducer
const incrementReducer = (state = 10, { type }) => {
    switch (type) {
        case INCREMENT:
            return state + 1;
        default:
            return state;
    }
};
const decrementReducer = (state = 100, { type }) => {
    switch (type) {
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

// const rootReducer = combineReducers({
//     increment: incrementReducer,
//     decrement: decrementReducer
// });
// const rootReducer = combineReducers({
//     incrementReducer: incrementReducer,
//     decrementReducer: decrementReducer
// });
const rootReducer = combineReducers({
    incrementReducer,
    decrementReducer
});

//create store
const store = createStore(rootReducer);

// store.subscribe(function () {
//     console.log(store.getState());
// });

// store.dispatch({ type: INCREMENT })
//Create Containers
/////////////////////////////////////////////////////////////////////////////////
//Mapper function: extract data from redux reducer(state) supply to React Component(props)
//here we two reducer, then how to mapper function

// function mapStateToPropIncr(state) {
//     const value = state.incrementReducer
//     return {
//         incvalue: value
//     }
// }
const mapStateToPropIncr = state => {
    const incvalue = state.incrementReducer
    return {
        incvalue
    }
}

const mapStateToPropDecr(state) => {
    const decvalue = state.decrementReducer
    return {
        decvalue
    }
}

/////////////////////////////////////////////////////////////////////////////////
function IncrementComponent(props) {
    //event listener
    function onIncrement(e) {
        //TODO
        props.dispatch({ type: INCREMENT })
    }
    return <View>
        <Text>Increment : {props.incvalue}</Text>
        <Button onPress={onIncrement} title="+" />
    </View>
}
function DecrementComponent(props) {
    //event listener
    function onDecrement(e) {
        //TODO
        props.dispatch({ type: DECREMENT })
    }
    return <View>
        <Text>Decrement : {props.decvalue}</Text>
        <Button onPress={onDecrement} title="-" />
    </View>
}
//create Containers
const IncrementContainer = connect(mapStateToPropIncr)(IncrementComponent)
const DecrementContainer = connect(mapStateToPropDecr)(DecrementComponent)

export default function App() {
    return (<Provider store={store}>
        <View style={styles.container}>
            <IncrementContainer />
            <DecrementContainer />
            <StatusBar style="auto" />
        </View>
    </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
