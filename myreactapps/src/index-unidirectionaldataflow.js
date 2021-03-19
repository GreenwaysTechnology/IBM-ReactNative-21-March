import { render } from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

//component communication;unidirectional data flow; presentation and containers

const CourseContainer = props => {
    // const { courses, author, duration } = props;
    return <div className="container">
        <h1>Courses</h1>
        {/** Child Component/Presentational Component */}
        {/* <CoursePresentation courses={courses} author={author} duration={duration} /> */}
        {/** Using Spread operator to merge props and component specific props */}
        <CoursePresentation {...props} authorlable={"Teacher"} durationlable="Duration" />

    </div>
}
const CoursePresentation = props => {
    return <>
        <h2>{props.authorlable} : {props.author}  {props.durationlable} : {props.duration}</h2>
        <ul className="list-group list-group-flush">
            {props.courses.map((course, index) =>
                <li className="list-group-item" key={index}>{course}</li>)}
        </ul>
    </>
};

const courses = ['javascript', 'react', 'node', 'angular', 'reactnative'];

const App = () => <>
    <CourseContainer courses={courses} author="Subramanian" duration="7 days" />
</>

render(<App />, document.getElementById('root'));