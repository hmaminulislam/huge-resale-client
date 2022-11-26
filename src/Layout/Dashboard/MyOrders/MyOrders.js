import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import MyOrderItem from "./MyOrderItem/MyOrderItem";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [user?.email]);
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-5 mt-10">My orders</h2>
      {bookings && (
        <div className="mr-20">
          {bookings?.map((booking) => (
            <MyOrderItem key={booking._id} booking={booking}></MyOrderItem>
          ))}
        </div>
      )}
      {bookings.length === 0 && (
        <h3 className="text-2xl font-semibold text-primary">No Book</h3>
      )}
    </div>
  );
};

export default MyOrders;
