import React from 'react';

const Sylebus = ({sylebus}) => {
    
    return (
        <div className='border-b p-10 container mx-auto '>
            <h1 className='text-3xl font-bold'>{sylebus.title}</h1>
            <p>{sylebus.description}</p>
            <ul className=''>
                <h1 className='text-2xl my-4'>List of Topic</h1>
                {
                    sylebus.syllabus.map(item=><li>{item}</li>)
                }
            </ul>
        </div>
    );
};

export default Sylebus;