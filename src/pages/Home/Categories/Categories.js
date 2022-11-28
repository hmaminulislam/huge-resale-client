import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLaptop } from "react-icons/ai";

const Categories = () => {
  const categories = [
    {
      name: "asus",
    },
    {
      name: "lenovo",
    },
    {
      name: "hp",
    },
    {
      name: "others",
    },
  ];
  return (
    <div className="my-20">
      <div>
        <h2 className="text-center text-2xl font-semibold mb-7">
          All Categories
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {categories.map((category, index) => (
          <div key={index}>
            <Link to={`/category/${category.name}`}>
              <div className="py-5 bg-slate-200 text-center mx-auto">
                <AiOutlineLaptop className="text-8xl text-center mx-auto" />
                <h4 className="font-semibold text-primary capitalize">
                  {category.name}
                </h4>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
