import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Constants from 'expo-constants'

export default function App() {
  return (
    <View style={{
      backgroundColor: 'yellow',
      flex: 1, 
      flexDirection:'column',
      justifyContent:'center'
    }}>
      <Text style={{ flex:1, backgroundColor: 'white' }}>Hello-1 </Text>
      <Text style={{flex:1, backgroundColor: 'pink' }}>Hello-2 </Text>
      <Text style={{flex:1, backgroundColor: 'gray' }}>Hello-3</Text>
      <Text style={{flex:4, backgroundColor: 'green' }}>Hello-4</Text>

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