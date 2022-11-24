import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css/pagination";
import './Slider.css'
import image1 from '../../../assets/images/slider/slider-1.png'
import image2 from '../../../assets/images/slider/slider-2.png'
import image3 from '../../../assets/images/slider/slider-3.png'

const Slider = () => {
    const sliderItem = [
      {
        title: "Welcome! Huge Resale",
        description: "Stay with us for your favorite products",
        image: image1,
        button: "Buy Now",
        bgColor: "bg-1",
      },
      {
        title: "Welcome! Huge Resale",
        description: "Sell your new and old products",
        image: image2,
        button: "Sell Now",
        bgColor: "bg-2",
      },
      {
        title: "Welcome! Huge Resale",
        description: "Stay with us for your favorite products",
        image: image3,
        button: "Buy Now",
        bgColor: "bg-3",
      },
    ];
    return (
      <div className="mt-10">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {sliderItem.map((slider, index) => (
            <SwiperSlide key={index}>
              <>
                <div className={`flex py-10 rounded-md ${slider.bgColor}`}>
                  <div className="flex-1">
                    <div className="flex h-full justify-center items-center">
                      <div className="w-9/12">
                        <h2 className="text-5xl font-semibold text-white mb-3">
                          {slider.title}
                        </h2>
                        <h3 className="text-lg text-zinc-100 mb-5">
                          {slider.description}
                        </h3>
                        <button className="btn btn-secondary">
                          {slider.button}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <img className="w-full h-96" src={slider.image} alt="" />
                  </div>
                </div>
              </>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Slider;