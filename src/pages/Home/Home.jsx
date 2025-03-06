import React from 'react';
import Slider from '../../components/Slider';
import SectionTitle from '../../components/SectionTitle';
import { Category } from './Category';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SectionTitle heading={'We success for categories creative students.'} subHeading={'OUR COURSE CATEGORIES'}></SectionTitle>
            <Category></Category>
            <h1>this home apge</h1>

        </div>
    );
};

export default Home;