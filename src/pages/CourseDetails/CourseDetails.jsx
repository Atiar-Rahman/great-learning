import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const {course,title} = useLoaderData();

    console.log(course)
   
    return (
        <div>
            <h1>Course title:{title}</h1>
        </div>
    );
};

export default CourseDetails;