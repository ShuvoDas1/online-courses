import React from 'react';
import './CourseList.css'
const CourseList = (props) => {
    const {name,price,instructor} = props.course;
    return (
        <div className='course my-3'>
            <h4 className='text-primary'>{name}</h4>
            <br/>
            <p>Price: ${price}</p>
            <p><small>Instructor: {instructor}</small></p>
            <button className='btn btn-success mb-3'>Enroll now</button>
        </div>
    );
};

export default CourseList;