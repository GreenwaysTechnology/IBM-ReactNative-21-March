import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//stack navigator
import { createStackNavigator } from '@react-navigation/stack'

//create Stack Object
const { Navigator, Screen } = createStackNavigator();

const HomeScreen = props => {
    console.log(props);
    return <View style={styles.container}>
        <Text>Home Screen : {props.extraData}</Text>
    </View>
}
const DetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
        </View>
    );
}

export default function App() {
    return <NavigationContainer>
        <Navigator initialRouteName="Home">
            {/* <Screen options={{title:"Whats App"}} name="Home" component={Home} /> */}
            <Screen name="Home" options={{ title: 'Welcome to Start Token' }}>
                {props => <HomeScreen {...props} extraData={"Start Token"} />}
            </Screen>
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