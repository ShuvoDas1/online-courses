import React, { useState, useEffect } from 'react';
import data from '../../data/data.json'
import CourseList from '../CourseList/CourseList';
import EnrollDetails from '../EnrollDetails/EnrollDetails';
import './Courses.css'
const Courses = () => {
    const [courses,setCourses]=useState([])
    const [enrollCourse,setEnrollCourse] = useState([])
    useEffect(()=>{
        setCourses(data); 
    },0)
    console.log(courses);
    const handleEnrollBtn = (course) =>{
        const newEnroll = [...enrollCourse,course];
        setEnrollCourse(newEnroll);
    }
   


    return (
        <div className='contents'>      
            <div className="course-container">
                    {
                        courses.map(course => <CourseList course={course} handleEnrollBtn={handleEnrollBtn}></CourseList>)
                    }   
            </div>
            <div className="enroll-details">
                <EnrollDetails enrollCourse={enrollCourse}></EnrollDetails>
            </div>
        </div>
    );
};

export default Courses;