import { connect } from 'react-redux';
import React from 'react';
import { INCREMENT } from '../actionconstants'
import { Text, View, Button } from 'react-native';
import { incActionCreator } from '../actioncreators/incrementaction'

const mapStateToProp = state => {
    const incvalue = state.incrementReducer
    return {
        incvalue
    }
}
function IncrementComponent(props) {
    //event listener
    function onIncrement(e) {
        //TODO
        //props.dispatch({ type: INCREMENT })
        props.dispatch(incActionCreator())
    }
    return <View>
        <Text>Increment : {props.incvalue}</Text>
        <Button onPress={onIncrement} title="+" />
    </View>
}
const IncrementContainer = connect(mapStateToProp)(IncrementComponent)

export { IncrementContainer };