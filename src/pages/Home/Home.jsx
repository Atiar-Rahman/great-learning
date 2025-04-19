import React from 'react';
import Slider from '../../components/Slider';
import SectionTitle from '../../components/SectionTitle';
import Categories from './Categories';
import MoreAbout from '../../components/MoreAbout';
import SuccessiveStudent from '../../components/SuccessiveStudent';
import Counter from './Counter';
import DiffText from './DiffText';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SectionTitle heading={'We success for categories creative students.'} subHeading={'successive student'}></SectionTitle>
            <SuccessiveStudent></SuccessiveStudent>
            <SectionTitle heading={'Our Academy favorite Course'} subHeading={'Show all courses'}></SectionTitle>
            <Categories></Categories>
            <SectionTitle heading={'More Information In our Academy'} subHeading={''}></SectionTitle>
            <MoreAbout></MoreAbout>
            <SectionTitle heading={'Course Enrollment Time'} subHeading={''}></SectionTitle>
            <Counter></Counter>
            <DiffText></DiffText>
        </div>
    );
};

export default Home;