import React from 'react';
import avator from '../../assets/Lottie/avator.png'
const Instructor = ({ instructor }) => {
    console.log(instructor)
    const {instructor_name,instructor_type} = instructor;
    return (
        <div className="card bg-base-100 w-96 shadow-xl text-center p-4">
            <figure>
                <img
                    src={avator}
                    alt="instructor image" className='w-full' />
            </figure>
            <div className="card-body">
                <h2 className="font-bold text-3xl text-center">{instructor_name}</h2>
                <p>{instructor_type}</p>
            </div>
        </div>
    );
};

export default Instructor;