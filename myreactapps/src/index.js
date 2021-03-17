import React from 'react';
import ReactDOM from 'react-dom' //render engine: browser
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
import { BodyComponent } from './body/body'

const App = () => <div>
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
</div>


//render Heading into browser
ReactDOM.render(<App />, document.getElementById('root'))