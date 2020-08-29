import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './CourseList.css'
const CourseList = (props) => {
    const {name,price,instructor,img} = props.course;
    return (
        <div className='course my-3'>
            <div>
                <img className='img-fluid' src={img} alt=""/>
            </div>
            <div>         
                <h4 className='text-primary'>{name}</h4>
                <br/>
                <p className='text-warning'>Price: ${price}</p>
                <p><small>Instructor: {instructor}</small></p>
                <button className='btn btn-success mb-3' onClick={()=>props.handleEnrollBtn(props.course)}><FontAwesomeIcon icon={faArrowRight} /> Enroll now</button>
            </div>
        </div>
    );
};

export default CourseList;