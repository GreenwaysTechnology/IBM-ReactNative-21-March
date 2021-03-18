import { render } from 'react-dom';
import React from 'react';


// const Courses = props => {
//     console.log(props.courses)
//     return <div>
//         <h1>Courses</h1>
//         <ul>
//             {courses.map((course, index) => {
//                 return <li key={index}>{course}</li>
//             })}
//         </ul>
//     </div>
// };
const Courses = props => {
    console.log(props.courses)
    return <div>
        <h1>Courses</h1>
        <ul>
            {courses.map((course, index) => <li key={index}>{course}</li>)}
        </ul>
    </div>
};

const courses = ['javascript', 'react', 'node', 'angular', 'reactnative'];

render(<Courses courses={courses} />, document.getElementById('root'));