import React from 'react';
import ReactDOM from 'react-dom' //render engine: browser

//variable pattern
const Heading = <h1>Hello React!</h1>;
//render Heading into browser
//ReactDOM.render(Heading,document.getElementById('root'))

// function Hello(){
//     //return React Element.
//     return <h1>Hello!!!</h1> // 
// }
const Hello = () => <h1>Hello!!!</h1>;
//imperative style : dont use
//ReactDOM.render(Hello(),document.getElementById('root'));
//declarative style
//ReactDOM.render(<Hello />, document.getElementById('root'));

class Greeting extends React.Component {
   render(){
       return <h1>Greeting!!!</h1>
   }
}
ReactDOM.render(<Greeting />, document.getElementById('root'));

