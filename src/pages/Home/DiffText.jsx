import React from 'react';

const DiffText = () => {
    return (
        <figure className="diff aspect-16/4" tabIndex={0}>
            <div className="diff-item-1" role="img" tabIndex={0}>
                <div className="bg-primary text-primary-content grid place-content-center text-4xl font-black">
                    Great to Online Learning Academy
                </div>
            </div>
            <div className="diff-item-2" role="img">
                <div className="bg-base-200 grid place-content-center text-5xl font-black">Great Learning</div>
            </div>
            <div className="diff-resizer"></div>
        </figure>
    );
};

export default DiffText;