import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Users } from './mock-data/users';
import Constants from 'expo-constants';

const App = () => {
    const [users, setUsers] = useState(Users);

    return <View styles={styles.container}>
        <FlatList keyExtractor={(item)=>item.id} data={users}
         renderItem={({item}) => (
            <Text style={styles.item}>{item.name}</Text>
        )} />
    </View>
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 25,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
})