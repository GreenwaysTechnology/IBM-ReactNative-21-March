import React from 'react';
import ReactDOM from 'react-dom' //render engine: browser


//header component
const HeaderComponent = () => <div>
    <h1>Site Header</h1>
</div>

const FooterComponent = () => <div>
    <h1>Site Footer</h1>
</div>

const BodyComponent = () => <div>
    <p>We recommend using JSX to describe what your UI should look like.
    Each JSX element is just syntactic sugar for calling React.createElement(). You will not typically
    invoke the following methods directly if you are using JSX.
    </p>
</div>

const App = () => <div>
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
</div>


//render Heading into browser
ReactDOM.render(<App />, document.getElementById('root'))