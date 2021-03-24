import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const { container, text } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea",
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default class App extends Component {
    state = {
        counter: 1
    };
    //listener function
    onIncrement = () => {
        //alert('button is clicked')
        this.setState((state) => {
            return {
                counter: state.counter + 1
            }
        })
    }
    render() {
        return <View style={container}>
            <Text style={text}>Counter {this.state.counter}</Text>
            <Button title="Increment" onPress={this.onIncrement} />
        </View>
    }
}