import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/error/error-404.png'

const ErrorPage = () => {
    return (
      <div className="flex justify-center text-center items-center h-screen">
        <div>
          <img src={image} alt="" />
          <Link to="/">
            <button className="btn btn-primary mt-8">Back to Home</button>
          </Link>
        </div>
      </div>
    );
};

export default ErrorPage;