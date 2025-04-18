import React from 'react';
import avator from '../../assets/Lottie/avator.png'
import { Link } from 'react-router-dom';
const Instructor = ({ instructor }) => {
    // console.log(instructor)
    const {_id, instructor_name, instructor_type } = instructor;
    return (
        <Link to={`/team/${_id}`}>
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
        </Link>
    );
};

export default Instructor;