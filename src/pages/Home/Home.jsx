import React from 'react';
import Slider from '../../components/Slider';
import SectionTitle from '../../components/SectionTitle';
import Categories from './Categories';
import MoreAbout from '../../components/MoreAbout';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SectionTitle heading={'We success for categories creative students.'} subHeading={'OUR COURSE CATEGORIES'}></SectionTitle>
            <Categories></Categories>
            <MoreAbout></MoreAbout>


        </div>
    );
};

export default Home;