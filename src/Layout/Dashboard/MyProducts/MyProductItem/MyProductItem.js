import React, { useEffect, useState } from 'react';

const MyProductItem = ({product}) => {
    const [sold, setSold] = useState(null)
    const {img, name, resalePrice, _id} = product;
    useEffect(() => {
      fetch(`http://localhost:5000/bookings/${_id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setSold(data));
    }, [_id]);

    
    return (
      <div className="flex justify-between items-center border border-gray-300 px-10 py-5">
        <div className="w-32">
          <img src={img} alt="" />
        </div>
        <div className="w-40">
          <h3 className="font-semibold">{name}</h3>
        </div>
        <div className="w-24">
          <p className="text-primary font-bold">${resalePrice}</p>
        </div>
        <div className="w-24">
          {sold ? (
            <p className="text-primary font-bold">Sold</p>
          ) : (
            <p className="text-primary font-bold">Avialable</p>
          )}
        </div>
        <div>
          <button className="btn btn-primary btn-sm">Advertise</button>
        </div>
      </div>
    );
};

export default MyProductItem;