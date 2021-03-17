//create a simple component
import React from 'react';
import ReactDOM from 'react-dom' //render engine: browser

//create component using jsx language 
const Heading = <h1>Hello React!</h1>;

//render Heading into browser
ReactDOM.render(Heading,document.getElementById('root'))
