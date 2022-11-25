import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLaptop } from "react-icons/ai";

const Categories = () => {
    const categories = [
        {
            name: 'asus'
        },
        {
            name: 'lenovo'
        },
        {
            name: 'hp'
        },
        {
            name: 'others'
        }
    ]
    return (
      <div className="my-10">
        <div>
          <h2 className="text-center text-xl font-semibold mb-7">
            All Categories
          </h2>
        </div>
        <div className="flex justify-evenly">
          {categories.map((category, index) => (
            <>
              <Link key={index} to={`/category/${category.name}`}>
                <div className="w-40 py-5 bg-slate-200 text-center mx-auto">
                  <AiOutlineLaptop className="text-8xl text-center mx-auto" />
                  <h4 className="font-semibold text-primary capitalize">{category.name}</h4>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    );
};

export default Categories;