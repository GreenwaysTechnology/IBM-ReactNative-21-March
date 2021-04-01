import { connect } from 'react-redux';
import React from 'react';
import { FINDALL } from '../actionconstants'
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';
import { findAllTodos } from '../actioncreators/todoactioncreator'

const mapStateToProp = state => {
    const todos = state.todoReducer
    return {
        todos
    }
}
function TodoComponent(props) {
    //event listener
    function findAll(e) {
        //TODO
        //props.dispatch({ type: INCREMENT })
        props.dispatch(findAllTodos())
    }
    return <View style={styles.container}>
        <Button onPress={findAll} title="findAll" />
        <FlatList keyExtractor={(item) => item.id + ""} data={props.todos}
            renderItem={({ item }) => (
                <Text style={styles.item}>{item.title}</Text>
            )} />
    </View>
}
const TodoContainer = connect(mapStateToProp)(TodoComponent)

export { TodoContainer };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
        backgroundColor: '#fff'
    },
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 25,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 24
    }
})