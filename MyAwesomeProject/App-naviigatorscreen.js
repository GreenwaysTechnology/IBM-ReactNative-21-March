import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//stack navigator
import { createStackNavigator } from '@react-navigation/stack'

//create Stack Object
const { Navigator, Screen } = createStackNavigator();

const Home = () => {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
}

export default function App() {
    return <NavigationContainer>
        <Navigator>
            <Screen name="Home" component={Home} />
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