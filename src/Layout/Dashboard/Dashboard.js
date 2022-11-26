import React, { useContext, useEffect, useState } from "react";
import Footer from "../../pages/shared/Footer/Footer";
import Navbar from "../../pages/shared/Navbar/Navbar";
import { BiRightArrow } from "react-icons/bi";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Dashboard = () => {
  const [roleUser, setRoleUser] = useState(null)
  const {user} = useContext(AuthContext)

  useEffect( () => {
    fetch(`http://localhost:5000/users/${user?.email}`)
    .then(res => res.json())
    .then(data => setRoleUser(data))
  } ,[user?.email])
  
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
              {roleUser?.role === "buyer" && (
                <li>
                  <Link to="/dashboard/my-orders">My orders</Link>
                </li>
              )}
              {roleUser?.role === "seller" && (
                <li>
                  <Link to="/dashboard/add-product">Add Product</Link>
                </li>
              )}
              {roleUser?.role === "admin" && (
                <>
                  <li>
                    <Link to="/dashboard">All Sellers</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">All Buyers</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
