import React, { useState, useEffect } from 'react';
import data from '../../data/data.json'
import CourseList from '../CourseList/CourseList';
const Courses = () => {
    const [courses,setCourses]=useState([])
    useEffect(()=>{
        setCourses(data); 
    },0)
    // console.log(courses);

    return (
        <div>      
            <div className="course-container">
                    {
                        courses.map(course => <CourseList course={course}></CourseList>)
                    }   
            </div>
        </div>
    );
};

export default Courses;