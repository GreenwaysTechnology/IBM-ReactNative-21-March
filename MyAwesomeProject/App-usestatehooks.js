import React, { useState } from 'react';
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

const App = () => {
    const [counter, setCounter] = useState(1);
    const onIncrement = () => {
        setCounter(counter + 1);    }
    return <View style={container}>
        {/**state as prop */}
        <CounterDisplay counter={counter} onIncrement={onIncrement} />
    </View>
}
//presentational component
export const CounterDisplay=({counter,onIncrement})=>{
    return <>
         <Text style={text}>Counter {counter}</Text>
         <Button title="Increment" onPress={onIncrement} color="green"/>
      </>
}



export default App;