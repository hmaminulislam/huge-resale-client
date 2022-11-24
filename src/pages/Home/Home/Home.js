import React from 'react';
import Slider from '../Slider/Slider';
import SliderProducts from '../SliderProducts/SliderProducts';

const Home = () => {
    return (
        <div className='w-[1200px] mx-auto'>
            <Slider></Slider>
            <SliderProducts category={'Asus'}></SliderProducts>
            <SliderProducts category={'Dell'}></SliderProducts>
            <SliderProducts category={'Lenevo'}></SliderProducts>
        </div>
    );
};

export default Home;