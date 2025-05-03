import React, { useEffect, useState } from 'react';
import Instructor from '../../components/Instructor';
import url from '../../url';

const ShowAllInstructor = () => {
    const [instructors,setInstructors] = useState([]);

    useEffect(()=>{
        fetch(`${url}/instructor`)
        .then(res=>res.json())
        .then(data=>{
            setInstructors(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-3xl text-center my-10 font-bold'>Show all instructor</h1>
            <table className='table'>
            <thead>
                        <tr>
                            
                            <th>Name & professional type</th>
                            <th>Education</th>
                            <th>Description</th>
                            <th>Experience</th>
                            <th>Update & delete</th>
                        </tr>
                    </thead>
            </table>
            {
                instructors.map(instructor=><Instructor key={instructor._id} instructor={instructor}></Instructor>)
            }
        </div>
    );
};

export default ShowAllInstructor;