import React, { useEffect, useState } from 'react';
import Course from '../../components/Course';

const ShowAllCourse = () => {
    const [courses,setCourses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/course')
        .then(res=>res.json())
        .then(data=>{
            setCourses(data)
        })
    },[])
    return (
        <div className='container mx-auto'>
            <h1 className='text-center font-bold text-3xl my-10'>Show all courses</h1>
            <table className='table text-3xl'>
            <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Course Duration</th>
                        <th>InstructorName</th>
                        <th>Course Enrollment Money</th>
                        <th>Update & Delete operation</th>
                    </tr>
                </thead>
            </table>
            {
                courses.map(course=><Course key={course._id} course={course}></Course>)
            }
        </div>
    );
};

export default ShowAllCourse;