import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Users } from './mock-data/users';
import Constants from 'expo-constants';

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         backgroundColor: 'pink',
//         flexDirection: 'column',
//     },
//     scrollView: {
//         backgroundColor: 'yellow',
//         marginHorizontal: 20,
//     }
// })

// const App = () => {
//     return <View style={styles.container}>
//         {
//             Users.map((user, index) => {
//                 return <ScrollView style={styles.scrollView} key={index}>
//                     <Text>{user.name}</Text>
//                 </ScrollView>
//             })
//         }
//     </View>
// }
// export default App;

export default function App() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Text>
                {
                    Users.map((user, index) => {
                        return <Text>{user.name}</Text>
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
});