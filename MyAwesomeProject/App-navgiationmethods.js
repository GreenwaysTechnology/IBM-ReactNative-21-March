import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//stack navigator
import { createStackNavigator } from '@react-navigation/stack'

//create Stack Object
const { Navigator, Screen } = createStackNavigator();

// const HomeScreen = props => {
//     console.log(props);
//     return <View style={styles.container}>
//         <Text>Home Screen : {props.extraData}</Text>
//         <Button title="Go to Details" onPress={() => props.navigation.navigate('Details')} />
//     </View>
// }
const HomeScreen = props => {
    const { navigation, route } = props;
    return <View style={styles.container}>
        <Text>Home Screen : {props.extraData}</Text>
        <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
    </View>
}
const DetailsScreen = (props) => {
    const { navigation, route } = props;
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
            <Button
                title="Go Back"
                onPress={() => navigation.goBack()}
            />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

export default function App() {
    return <NavigationContainer>
        <Navigator initialRouteName="Home">
            <Screen name="Home" component={HomeScreen} options={{ title: 'Welcome to Start Token' }} />
            <Screen name="Details" component={DetailsScreen} />
        </Navigator>
    </NavigationContainer>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});