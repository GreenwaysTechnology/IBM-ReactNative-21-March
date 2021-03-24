import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Greeting } from './components/greeting';

export const { container, text } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
});

const App = () => {
    return <View style={container}>
        <Greeting message="Hello Props View" />
        <Greeting message="Hello Props View" />
        <Greeting message="Hello Props View" />
        <Greeting message="Hello Props View" />
        <Greeting />
    </View>
}
export default App;


