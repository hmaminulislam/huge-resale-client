import React from "react";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";
import { BiRightArrow } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <>
        <div className="drawer drawer-mobile">
          <input
            id="dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
            <label
              htmlFor="dashboard-drawer"
              className="lg:hidden flex items-center cursor-pointer text-sky-400"
            >
              Dashboard <BiRightArrow></BiRightArrow>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="dashboard-drawer"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
              <li>
                <Link to="/dashboard">My orders</Link>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
