import React, { Component } from 'react';
import { render } from 'react-dom';


class Counter extends Component {
    //application state(data)
    state = {
        counter: 0
    };
    //listener method
    onIncrement = evt => {
        //mutate the state, react uses pure function ;setState
        // this.setState((previousState) => {
        //     return {
        //         counter: previousState.counter + 1
        //     }
        // })
        // this.setState(previousState => {
        //     let counter = previousState.counter + 1;
        //     return {
        //        // counter: counter
        //        counter
        //     }
        // });
        let counter = this.state.counter + 1;
        this.setState({ counter });
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return <div>
            <h1>Counter : {this.state.counter}</h1>
            <button onClick={this.onIncrement}>+</button>
        </div>
    }
}

const App = () => <>
    <Counter />
</>;
render(<App />, document.getElementById('root'));