import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div>
        <h2 className="text-2xl font-semibold text-center mb-3">Login</h2>
        <div className="flex justify-center items-center bg-primary w-full sm:w-8/12 md:w-7/12 lg:w-4/12 mx-auto">
          <div className="w-full px-10 mt-10">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="input w-full"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Type here"
                  className="input w-full"
                />
              </div>
              <div className="mb-4">
                <button className="btn btn-secondary w-full">Login</button>
              </div>
              <p className="text-center text-white">
                Don't have an account?{" "}
                <Link className="text-secondary font-bold" to="/signup">
                  Sign Up
                </Link>
              </p>
            </form>
            <div className="divider">OR</div>
            <div className="flex justify-center items-center bg-lime-500 mb-10 py-2 text-white">
              <FcGoogle className="text-3xl mr-4"></FcGoogle>
              <span>Google</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;