import React from 'react';
import Slider from '../../components/Slider';
import SectionTitle from '../../components/SectionTitle';
import Categories from './Categories';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SectionTitle heading={'We success for categories creative students.'} subHeading={'OUR COURSE CATEGORIES'}></SectionTitle>
            <Categories></Categories>
            


        </div>
    );
};

export default Home;