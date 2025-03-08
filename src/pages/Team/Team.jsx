import React from 'react';
import Tbanner from './Tbanner';
import SectionTitle from '../../components/SectionTitle';
import Instructors from './Instructors';

const Team = () => {
    return (
        <div>
            <Tbanner/>
            <SectionTitle heading={'Become A Instruction Instructor Teacher'} subHeading={'Meet OUR Team'}></SectionTitle>
            <Instructors></Instructors>
        </div>
    );
};

export default Team;