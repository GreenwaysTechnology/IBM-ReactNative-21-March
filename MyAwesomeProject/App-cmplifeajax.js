import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

class ChildOne extends React.Component {
  constructor() {
    super();
    console.log('Child One is called')
  }
  componentDidMount() {
    console.log('Child one Ui is rendered')
  }
  render() {
    console.log('Child one render is called')
    return <View>
      <Text>Child One</Text>
      <ChildTwo></ChildTwo>
    </View>
  }
}
class ChildTwo extends React.Component {
  constructor() {
    super();
    console.log('Child Two is called')
  }
  componentDidMount() {
    console.log('Child Two Ui is rendered')
  }
  render() {
    console.log('Child Two render is called')
    return <View>
      <Text>Child Two</Text>
    </View>
  }
}

export default class App extends React.Component {
  //add constructor
  constructor(props) {
    super(props);
    this.state = {
      error: null, // if any ajax error
      isLoaded: false, //Progress bar enabler
      items: []  // data to be filed
    };
    console.log('Parent constructor is called')
  }
  componentDidMount() {
    console.log('Parent Ui is rendered')
    //api code.
    const url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

  }
  static getDerivedStateFromProps(props, state) {
    //  console.log(`Current State ${JSON.stringify(state)} Current Prop ${JSON.stringify(prop)}`)

  }
  componentDidUpdate() {
    console.log('Ui is updated')
  }


  render() {
    const { error, isLoaded, items } = this.state;
    console.log('Parent  render is called')
    if (error) {
      return <View style={styles.error}> Error: {error.message}</View>;
    } else if (!isLoaded) {
      return <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>;
    } else {
      return (<View styles={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id + ""}
          data={items}
          renderItem={({ item }) => {
            //  console.log(item);
            return <Text style={styles.item}>{item.title}</Text>
          }} />
      </View>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 25,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
