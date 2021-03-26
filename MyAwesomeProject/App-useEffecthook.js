import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';


const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //compoentDidMount life cycle api
    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => setData(json.movies))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size="large" color="#00ff00" />
                : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <Text>{item.title}, {item.releaseYear}</Text>
                        )}
                    />
                )}
        </View>
    );
};
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        justifyContent: 'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});