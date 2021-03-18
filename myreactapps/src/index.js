import { render } from 'react-dom';
import React from 'react';
// import './App.css'
// import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

const Courses = props => {
    console.log(props.courses)
    return <div className="container">
        <h1>Courses</h1>
        <ul className="list-group list-group-flush">
            {courses.map((course, index) =>
                <li className="list-group-item" key={index}>{course}</li>)}
        </ul>
    </div>
};

const courses = ['javascript', 'react', 'node', 'angular', 'reactnative'];

render(<Courses courses={courses} />, document.getElementById('root'));