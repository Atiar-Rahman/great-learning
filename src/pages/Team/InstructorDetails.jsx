
import { useLoaderData } from 'react-router-dom';

const InstructorDetails = () => {
    const instructor = useLoaderData();
    // console.log(instructor)
    const {name,instructor_type,education,file,experience,description} = instructor;
    return (
        <div className='my-10 shadow-2xl shadow-blue-300 p-10'>
            <img src={file} alt="" />
            <h1>Instructor Name: {name}</h1>
            <p>Instructor Type: {instructor_type}</p>
            <p>Educational background: {education}</p>
            <p>Experience: {experience}</p>
            <p>Description: {description}</p>

        </div>
    );
};

export default InstructorDetails;