import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import WishLIstItem from './WishLIstItem';

const WishList = () => {
    const {user} = useContext(AuthContext)
    
    const { data: wishlists = [], refetch } = useQuery({
      queryKey: [user?.email],
      queryFn: async () => {
        const res = await fetch(
          `http://localhost:5000/wishlists?email=${user?.email}`,
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      },
    });
    return (
      <div>
        <h2 className="text-3xl font-semibold mb-5 mt-10">My Wishlist</h2>
        {wishlists ? (
          <div className="mr-20">
            {wishlists?.map((wishlist) => (
              <WishLIstItem
                key={wishlist._id}
                wishlist={wishlist}
                refetch={refetch}
              ></WishLIstItem>
            ))}
          </div>
        ) : (
          <h3 className="text-2xl font-semibold text-primary">No Wishlist</h3>
        )}
      </div>
    );};

export default WishList;