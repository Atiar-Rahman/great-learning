import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const { course,_id, title, file, duration, description, money, instructorName, lessonNo, rating } = useLoaderData();

    console.log(course)

    return (
        <div>
            <div className=" min-h-screen  flex flex-col items-center p-6">
                <div className="w-full bg-yellow-50 p-8 rounded-2xl shadow-lg">
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <img
                                src={file}
                                alt={title}
                                className="w-full h-96 object-cover rounded-xl"
                            />
                        </div>
                        <div className="md:w-1/2  md:pl-8 mt-6 md:mt-0">
                            <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
                            <p className="text-lg text-gray-700 mb-4">{description}</p>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-blue-600 font-semibold text-lg">${money}</span>
                                <span className="text-gray-600">Duration: {duration} hours</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-gray-600">Instructor: {instructorName}</span>
                                <span className="text-gray-600">Lessons: {lessonNo}</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <span className="text-yellow-400">&#9733;</span>
                                    <span className="ml-1 text-gray-700">{rating} / 5</span>
                                </div>
                                <Link to={`/courseenroll/${_id}`}><button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full md:w-auto">
                                    Enroll Now
                                </button></Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;