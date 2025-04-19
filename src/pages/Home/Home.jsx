import React from 'react';
import Slider from '../../components/Slider';
import SectionTitle from '../../components/SectionTitle';
import Categories from './Categories';
import MoreAbout from '../../components/MoreAbout';
import SuccessiveStudent from '../../components/SuccessiveStudent';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SectionTitle heading={'We success for categories creative students.'} subHeading={'successive student'}></SectionTitle>
            <SuccessiveStudent></SuccessiveStudent>
            <SectionTitle heading={'Our Academy favorite Course'} subHeading={'Show all courses'}></SectionTitle>
            <Categories></Categories>
            <MoreAbout></MoreAbout>
        </div>
    );
};

export default Home;