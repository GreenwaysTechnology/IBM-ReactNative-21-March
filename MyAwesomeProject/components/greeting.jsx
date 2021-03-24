import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const { text } = StyleSheet.create({
    text: {
        color: "blue",
        textAlign: "center",
        fontSize: 30
    }
});

export const Greeting = props => <>
    <Text onPress={() => alert('pressed')} style={text}>{props.message}</Text>
</>
//default Property
Greeting.defaultProps = {
    message: 'Default Message'
}