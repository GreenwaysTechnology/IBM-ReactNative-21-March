import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux'
import { IncrementContainer } from './components/incrementcontainer';
import { TodoContainer } from './components/todocontainer';
import { store } from './store'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MyApp = () => {
    return (<Provider store={store}>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={TodoContainer} />
                <Tab.Screen name="Settings" component={IncrementContainer} />
            </Tab.Navigator>
        </NavigationContainer>
    </Provider>
    )
}
export default function App() {
    return <MyApp />
}

