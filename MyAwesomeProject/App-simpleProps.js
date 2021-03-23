import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const { container, text } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    text: {
        color: "blue",
        textAlign: "center",
        fontSize: 30
    }
});

const Greeting = props => <>
    <Text style={text}>{props.message}</Text>
</>

const App = () => {
    return <View style={container}>
        <Greeting message="Hello Props View" />
        <Greeting message="Hello Props View" />
        <Greeting message="Hello Props View" />
        <Greeting message="Hello Props View" />
    </View>
}
export default App;


