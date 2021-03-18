import React, { Fragment } from 'react';
import { render } from 'react-dom';

// const Greeting = () => <div>
//                           <h1>Hello</h1><p>welcome</p>
//                     </div>;
// const Greeting = () => <React.Fragment>
//     <h1>Hello</h1><p>welcome</p>
// </React.Fragment>;
// const Greeting = () => <Fragment>
//     <h1>Hello</h1><p>welcome</p>
// </Fragment>;
const Greeting = () => <>
    <h1>Hello</h1><p>welcome</p>
</>;
render(<Greeting />, document.getElementById('root'));