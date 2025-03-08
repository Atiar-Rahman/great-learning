import React from 'react';
import teamLottieData from '../../assets/Lottie/teamLottieData.json'
import Lottie from 'lottie-react';
const Tbanner = () => {
    return (
        <div className="hero bg-base-200 h-[75vh] pb-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Lottie className="flex-1 rounded-lg shadow-2xl" animationData={teamLottieData}></Lottie>
                <div className='flex-1 '>
                    <h1 className="text-5xl font-bold">Our Best Instructors</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Tbanner;