import React from 'react';
import about1 from '../assets/images/about_1_1.webp'
import about2 from '../assets/images/about_1_2.webp'
import about3 from '../assets/images/about_1_4.webp'
import { SiTicktick } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const MoreAbout = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='flex flex-1 gap-4'>
                <img src={about1} alt="" />
                <div className='flex flex-col gap-3'>
                    <div className='shadow-2xl text-black pt-10 bg-blue-300 w-40 h-52 text-center'>
                        <h1 className='text-5xl font-bold'>10K+</h1>
                        <p className='text-2xl'>Active Our Course</p>
                    </div>
                    <img src={about2} alt="" />
                </div>
            </div>
            <div className='flex-1 text-justify'>
                <Link to='/about' className='flex  space-x-2'>
                    <h1 className='text-blue-300'>More About</h1><FaArrowRightLong className='mt-1' />
                </Link>
                <h1 className='text-3xl'>Welcome to Great Learning Academy</h1>
                <p>Collaboratively simplify user friendly networks after principle centered coordinate effective methods of empowerment distributed niche markets pursue market positioning web-readiness after resource sucking applications.</p>
                <p>Online education, also known as e-learning, is a method of learning that takes place over the internet. It offers individuals the opportunity to acquire knowledge, skills.</p>
                <div className='grid grid-cols-2 gap-5 my-10 lg:my-16'>
                    <img src={about3} alt="" />
                    <ul>
                        <li className='flex gap-3 py-2 items-center'> <SiTicktick />Get access to 4,000+ of our top courses</li>
                        <li className='flex gap-3 py-2 items-center'> <SiTicktick />Popular topics to learn now</li>
                        <li className='flex gap-3 py-2 items-center'> <SiTicktick />Find the right instructor for you</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MoreAbout;