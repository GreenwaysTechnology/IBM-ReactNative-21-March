import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';

const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(async () => {
        // fetch('https://reactnative.dev/movies.json')
        //     .then((response) => response.json())
        //     .then((json) => setData(json.movies))
        //     .catch((error) => console.error(error))
        //     .finally(() => setLoading(false));
        (async function () {
            try {
                const response = await fetch('https://reactnative.dev/movies.json')
                const json = await response.json();
                setData(json.movies);
            } catch (e) {
                console.error(e);
            }
            finally { setLoading(false) };
        })();
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

// const App = () => {
//     const [data, setData] = useState([]);
//     const [isLoading, setLoading] = useState(true);

//     useEffect(async () => {
//         fetch('https://reactnative.dev/movies.json')
//             .then((response) => response.json())
//             .then((json) => setData(json.movies))
//             .catch((error) => console.error(error))
//             .finally(() => setLoading(false));
//         // try {
//         //     let response = await fetch('https://reactnative.dev/movies.json');
//         //     let json = await response.json();
//         //     setData(json.movies)
//         // } catch (error) {
//         //     console.error(error);
//         // }
//         // finally {
//         //     setLoading(false)
//         // }
//     });

//     return <View style={{ flex: 1, padding: 24 }}>
//         {isLoading ? <ActivityIndicator /> : (
//             <FlatList
//                 data={data}
//                 keyExtractor={({ id }, index) => id}
//                 renderItem={({ item }) => (
//                     <Text>{item.title}, {item.releaseYear}</Text>
//                 )}
//             />
//         )}
//     </View>
// };
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
