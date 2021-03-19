import { render } from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'


const Panel = props => <div>
    {props.children}
</div>

const TextAdv = () => <h1>
    Text adv....
</h1>
const ImageAdv = () => <h1>
     ImageAdv
</h1>
const App = () => <Panel>
    <TextAdv/>
    <ImageAdv />
</Panel>

render(<App />, document.getElementById('root'));