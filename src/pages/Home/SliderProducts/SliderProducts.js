import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '../../../assets/images/slider/slider-1.png'
import './SliderProducts.css'
import { Autoplay } from "swiper";

const SliderProducts = ({category}) => {
    const products = [
        {
            name: 'Asus TK034',
            category: 'Asus',
            price: '90402',
            condition: 'Good',
            image: image1
        },
        {
            name: 'Asus TK034',
            category: 'Asus',
            price: '90402',
            condition: 'Good',
            image: image1
        },
        {
            name: 'Asus TK034',
            category: 'Asus',
            price: '90402',
            condition: 'Good',
            image: image1
        },
        {
            name: 'Asus TK034',
            category: 'Asus',
            price: '90402',
            condition: 'Good',
            image: image1
        },
        {
            name: 'Asus TK034',
            category: 'Asus',
            price: '90402',
            condition: 'Good',
            image: image1
        },
        {
            name: 'Asus TK034',
            category: 'Asus',
            price: '90402',
            condition: 'Good',
            image: image1
        },
    ]
    return (
      <div className="my-14">
        <div>
          <h2 className="text-3xl font-semibold mb-5">{category}</h2>
        </div>
        <div>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop={Infinity}
            className="mySwiper"
          >
            {products.map((pro) => (
              <SwiperSlide>
                <>
                  <div className="border border-gray-400 p-5 text-center">
                    <img src={image1} alt="" />
                    <p>{pro.category}</p>
                    <h3 className="text-xl font-semibold">{pro.name}</h3>
                    <p className="text-primary">${pro.price}</p>
                    <button className="btn btn-primary btn-sm mt-2">
                      Book Now
                    </button>
                  </div>
                </>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn btn-primary">View All</button>
        </div>
      </div>
    );
};

export default SliderProducts;