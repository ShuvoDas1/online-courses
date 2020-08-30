import React from 'react';

const EnrollDetails = (props) => {
    const enroll = props.enrollCourse;
    console.log(enroll);
    const totalPrice = enroll.reduce((total,course)=>total+course.price,0)
    
    let discount = 0;
    if(enroll.length > 3 ){
        discount = totalPrice / 10;
    }
        
    const grandTotal = totalPrice - discount;
      
    return (
        <div className='container'>
            <h4 className="text-center">Enroll Summery</h4>
            <br/>
            <h6>Enrolled Courses: {enroll.length}</h6>
            <p>Course price: ${totalPrice.toFixed(2)}</p>
            <p>Discount: ${discount.toFixed(2)}</p>
            <p>Total Price: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default EnrollDetails;