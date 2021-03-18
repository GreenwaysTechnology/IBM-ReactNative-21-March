//Component : data binding
import { render } from 'react-dom';
import React from 'react';

function getValue(){
    return 1000;
}

const DisplayBoardComponent = () => {
    const magicNo =100;
    const message = "Hello"
    const isEnabled=true;
    const product = {
        id:1,
        name:'product'
    }
    return <div>
        <h1>Data Binding</h1>
        <h2>String {"Hello"} {message}</h2>
        <h2>Number {10} {magicNo}</h2>
        <h2>Boolean {true ? "Enabled" : "Disabled"} {isEnabled ? "Enabled" : "Disabled"}</h2>
        <h2>Object {product.id} {product.name}</h2>
        <h2>Function {getValue()}</h2>
    </div>
};
render(<DisplayBoardComponent />, document.getElementById('root'));