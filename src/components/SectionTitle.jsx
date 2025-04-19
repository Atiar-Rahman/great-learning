import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='uppercase text-center my-10 border-b-4 rounded-3xl border-amber-400 md:w-[800px] mx-auto'>
            <h3 className='text-xl text-blue-300'>{subHeading}</h3>
            <h1 className='text-3xl'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;