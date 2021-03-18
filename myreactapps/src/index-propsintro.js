import { render } from 'react-dom';
import React from 'react';

//function is pure function.
function display(data1, data2) {
    return data1;
}
const res = display(100, 200)
console.log(res);

//component : pure function 
//data is variable which points literal object
// function Display(foo) {
//     console.log(foo)
//     return <h1>
//        {foo.message} {foo.name}
//     </h1>
// }
// function Display(props) {
//     console.log(props)
//     return <h1>
//         {props.message} {props.name}
//     </h1>
// }
// const Display = (props) => {
//     console.log(props)
//     return <h1>
//         {props.message} {props.name}
//     </h1>
// }
// const Display = props => <h1>
//     {props.message} {props.name}
// </h1>
const Display = ({ message, name }) => <h1>
    {message} {name}
</h1>

render(<Display name="Subramanian" message="Hello" />, document.getElementById('root'))