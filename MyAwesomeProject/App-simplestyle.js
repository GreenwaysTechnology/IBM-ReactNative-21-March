import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const { container, text } = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eaeaea"
    },
    text: {
        color: "blue",
        textAlign: "center",
        fontSize: 30
    }

});
//className ="c1 c2"
//style ="prop;prop2;prop3"
export default function App() {
    return <View style={container}>
        <Text style={text}>Hello View!</Text>
        {/**in line style */}
        <Text style={{
            color: "red",
            textAlign: "center",
            fontSize: 30
        }}>Hello View!</Text>

    </View>
}

// export default function App() {
//     return <View style={appStyles.container}>
//         <Text style={appStyles.text}>Hello View!</Text>
//         {/**in line style */}
//         <Text style={{
//             color: "red",
//             textAlign: "center",
//             fontSize: 30
//         }}>Hello View!</Text>

//     </View>
// }
// const appStyles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 24,
//         backgroundColor: "#eaeaea"
//     },
//     text: {
//         color: "#20232a",
//         textAlign: "center",
//         fontSize: 30
//     }
// });

