import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from '../../../assets/images/slider/slider-1.png'
import './SliderProducts.css'
import { Autoplay, Navigation } from "swiper";
import "swiper/css/navigation";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

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
            navigation={true}
            modules={[Autoplay, Navigation]}
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
                    <div className="absolute top-12 right-5">
                      <AiOutlineEye className="text-primary w-6 h-6 cursor-pointer mb-2" />
                      <AiOutlineHeart className="text-primary w-6 h-6 cursor-pointer" />
                    </div>
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