import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SellerRoute = ({children}) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  const { data: seller = [], isLoading } = useQuery({
    queryKey: [user?.email, "seller"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/seller?email=${user?.email}`,
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

  if (loader) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <div>...</div>;
  }

  if (seller.role) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;