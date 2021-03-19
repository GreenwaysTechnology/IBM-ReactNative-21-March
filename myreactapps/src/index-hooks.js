import React, { Component, useState } from 'react';
import { render } from 'react-dom';


// class Counter extends Component {
//     //application state(data)
//     state = {
//         counter: 0
//     };
//     //listener method
//     onIncrement = evt => {
//         let counter = this.state.counter + 1;
//         this.setState({ counter });
//     }

//     render() {
//         console.log(this.props)
//         console.log(this.state)
//         return <div>
//             <h1>Counter : {this.state.counter}</h1>
//             <button onClick={this.onIncrement}>+</button>
//         </div>
//     }
// }

const Counter = props => {
    const [counter, setCounter] = useState(0)
    //function
    function onIncrement() {
        setCounter(counter + 1);
    }
    function onDecrement() {
        setCounter(counter - 1);
    }
    return <div>
        <CounterDisplay counter={counter}  onDecrement={onDecrement}  onIncrement={onIncrement} />
        {/* <button onClick={() => setCounter(counter - 1)} >-</button> */}
    </div>
}
const CounterDisplay = props => <>
    <h1>Counter {props.counter}</h1>
    <button onClick={props.onIncrement} >+</button>
    <button onClick={props.onDecrement} >-</button>

</>

const App = () => <>
    <Counter />
</>;
render(<App />, document.getElementById('root'));