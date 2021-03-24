import { View, StyleSheet, Text, Button, TextInput,Alert, Platform } from 'react-native';
import React, { useState } from 'react';

const GetInput = () => {
    const [text,setText]= useState('ram');
  
    const update = name => {
        setText(name)
    }
    const getName = ()=>{
        Alert.alert(text);
    }
    return <>
        <Text>Your App is Running on {Platform.OS}</Text>
        <Text>Enter Name</Text>
        <TextInput style={styles.input} value={text} onChangeText={update} />
        <Button title="Enter Name" onPress={getName} color="green"/>
    </>
}

const App = () => <View style={styles.container}>
    <GetInput />
</View>

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 25,
        color: 'red'
    },
    input: {
        width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'pink'
    }
});

