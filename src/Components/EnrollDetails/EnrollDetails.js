import React from 'react';

const EnrollDetails = (props) => {
    const enroll = props.enrollCourse;
    console.log(enroll);
    const totalPrice = enroll.reduce((total,course)=>total+course.price,0)
    
        
      
    return (
        <div className='container'>
            <h4>Enroll Summery</h4>
            <h6>Enrolled Courses: {enroll.length}</h6>
            {/* <p>Discount: {discount}</p> */}
            <p>Total Price: ${totalPrice}</p>
        </div>
    );
};

export default EnrollDetails;