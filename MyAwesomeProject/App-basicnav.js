import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const { Navigator, Screen } = createStackNavigator();

function HomeScreen(props) {
    console.log(props)
    const onMove = () => {
        // props.navigation.navigate('Details', {
        //     itemId: 86,
        //     otherParam: 'anything you want here',
        // });
        //default Param
        props.navigation.navigate('Details');
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen - {props.extraData}</Text>
            <TouchableOpacity>
                <View>
                    <Text onPress={onMove} style={{ backgroundColor: 'green' }}>Go to Details</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
function DetailsScreen({ route, navigation }) {
    /* 2. Get the param */
    const { itemId, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => {
                    navigation.setParams({ itemId: 900, otherParam: 'foo' })
                    navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}
export default function App() {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="Home">
                {/* <Screen options={{ title: 'Welcome to Start Token' }} name="Home" component={HomeScreen} /> */}
                <Screen name="Home" options={{ title: 'Welcome to Start Token' }}>
                    {props => <HomeScreen {...props} extraData={"Start Token"} />}
                </Screen>

                <Screen name="Details" initialParams={{ itemId: 42, otherParam: 'default Param' }} component={DetailsScreen} />

            </Navigator>
        </NavigationContainer>
    );
}