import React from 'react';

const WelCome = ({user}) => {
    return (
        <div className='flex space-x-2 text-2xl font-bold text-center'>
            <h1>Welcome</h1>
            <h1>{user}</h1>
        </div>
    );
};

export default WelCome;