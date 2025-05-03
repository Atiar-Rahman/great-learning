import React, { useEffect, useState } from 'react';
import Sylebus from './Sylebus';
import url from '../../url';

const Courses = () => {
    const [sylebus,setSylebus] = useState([]);

    useEffect(()=>{
        fetch(`${url}/syllabus`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setSylebus(data);
        })
    },[])
    return (
        <div>
            <h1 className='text-center text-2xl font-bold border-b-4 rounded-2xl w-3/4 mx-auto border-b-amber-600'>show all courses Syllabus</h1>
            {
                sylebus.map(sylebus=><Sylebus key={sylebus.title} sylebus={sylebus}></Sylebus>)
            }
        </div>
    );
};

export default Courses;