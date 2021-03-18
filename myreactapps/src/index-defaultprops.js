import { render } from 'react-dom';
import React, { Component } from 'react';

// class ProfileComponent extends Component {
//     render() {
//         console.log(this.props)
//         const { firstName, lastName, city, state, active, likes, contact: { email, phone } } = this.props;
//         return <div>
//             <h1>Profile Information</h1>
//             <h2>FirstName {firstName}</h2>
//             <h2>Last Name {lastName}</h2>
//             <h2>City {city}</h2>
//             <h2>State {state}</h2>
//             <h2>Active {active ? 'Active' : 'Not Active'}</h2>
//             <h2>Likes {likes}</h2>
//             <h2>Contact {email} {phone}</h2>
//         </div>
//     }
// }
const ProfileComponent = ({ firstName, lastName, city, state, active, likes, contact: { email, phone } }) => <div>
    <h1>Profile Information</h1>
    <h2>FirstName {firstName}</h2>
    <h2>Last Name {lastName}</h2>
    <h2>City {city}</h2>
    <h2>State {state}</h2>
    <h2>Active {active ? 'Active' : 'Not Active'}</h2>
    <h2>Likes {likes}</h2>
    <h2>Contact {email} {phone}</h2>
</div>;


const lastName = 'Murugan';
const city = "Coimbatore";
const state = "Tamil nadu";
const active = true;
const likes = 1000;
const contact = {
    email: 'admin@foo.com',
    phone: '9003706368'
}

//default Props
ProfileComponent.defaultProps = {
    firstName: 'firstName',
    lastName:'lastName'
}

render(<ProfileComponent
   
    city={city}
    state={state}
    active={active}
    likes={likes}
    contact={contact}
/>,

    document.getElementById('root'));