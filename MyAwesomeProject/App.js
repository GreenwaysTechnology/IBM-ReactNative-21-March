import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'row', //column,column-reverse,row-reverse
//         backgroundColor: 'brown',
//         paddingTop: 50
//     },
// });

// const App = () => {

//     {/**container */ }
//     return <View style={styles.container}>
//         <View style={{ backgroundColor: 'yellow', width: 50, height: 50 }}>
//             <Text>Box-1</Text>
//         </View>
//         <View style={{ backgroundColor: 'pink', width: 50, height: 50 }}>
//             <Text>Box-2</Text>
//         </View>
//         <View style={{ backgroundColor: 'lightblue', width: 50, height: 50 }}>
//             <Text>Box-3</Text>
//         </View>
//     </View>

// }

// const App = () => {

//     {/**container */ }
//     return <View style={styles.container}>
//         <View  style={{ flex:1, backgroundColor: 'yellow', width: 50, height: 50 }}>
//             <Text>Box-1</Text>
//         </View>
//         <View style={{ flex:1, backgroundColor: 'pink', width: 50, height: 50 }}>
//             <Text>Box-2</Text>
//         </View>
//         <View style={{ flex:3, backgroundColor: 'lightblue', width: 50, height: 50 }}>
//             <Text>Box-3</Text>
//         </View>
//     </View>

// }
const App = () => {
    return (<View style={styles.container}>
        <Text style={styles.headerStyle}>flex</Text>
        <View style={[{ flex: 1 }, styles.elementsContainer]}>
            <View style={{ flex: 1, backgroundColor: '#EE2C38' }} />
            <View style={{ flex: 2, backgroundColor: '#FAA030' }} />
            <View style={{ flex: 4, backgroundColor: '#32B76C' }} />
        </View>
    </View>
    );
}


const styles = {
    container: {
        marginTop: 48,
        flex: 1,
        backgroundColor:'pink'
    },
    headerStyle: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 24
    },
    elementsContainer: {
        backgroundColor: 'black',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24
    }
}


export default App;
