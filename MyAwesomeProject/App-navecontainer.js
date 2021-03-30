import * as React from 'react';
import { Text, View ,StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const Home = () => {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
}

export default function App() {
    return <NavigationContainer>
             {/**screen render- Menu */}
              <Home></Home>
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