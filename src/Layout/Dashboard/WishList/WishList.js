import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import WishLIstItem from './WishLIstItem';

const WishList = () => {
    const {user} = useContext(AuthContext)
    const [wishlists, setWishlists] = useState([])
    useEffect( () => {
        fetch(`http://localhost:5000/wishlists?email=${user?.email}`)
          .then((res) => res.json())
          .then((data) => setWishlists(data));
    },[user?.email])
    return (
      <div>
        <h2 className="text-3xl font-semibold mb-5 mt-10">My Wishlist</h2>
        {wishlists ? (
          <div className="mr-20">
            {wishlists?.map((wishlist) => (
              <WishLIstItem
                key={wishlist._id}
                wishlist={wishlist}
              ></WishLIstItem>
            ))}
          </div>
        ) : (
          <h3 className="text-2xl font-semibold text-primary">No Wishlist</h3>
        )}
      </div>
    );};

export default WishList;