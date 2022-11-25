import React from 'react';
import Categories from '../Categories/Categories';
import Slider from '../Slider/Slider';
import SliderProducts from '../SliderProducts/SliderProducts';

const Home = () => {
    return (
        <div className='w-[1200px] mx-auto'>
            <Slider></Slider>
            <Categories></Categories>
            <SliderProducts category={'Asus'}></SliderProducts>
            <SliderProducts category={'Dell'}></SliderProducts>
            <SliderProducts category={'Lenevo'}></SliderProducts>
        </div>
    );
};

export default Home;