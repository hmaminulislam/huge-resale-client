import React from "react";
import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import Slider from "../Slider/Slider";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="px-5 sm:px-10 md:px-20">
      <Slider></Slider>
      <CompanyInfo></CompanyInfo>
      <Categories></Categories>
      <Banner></Banner>
      <Advertise></Advertise>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
