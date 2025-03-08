
import React, { useEffect, useState } from 'react';
import Instructor from './Instructor';

const Instructors = () => {
    const [instructors,setInstructors] = useState([]);
    
    useEffect(()=>{
        fetch('../../../public/instructor.json')
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                instructors.map((instructor)=><Instructor key={instructor.id} instructor={instructor}></Instructor>)
            }
        </div>
    );
};

export default Instructors;