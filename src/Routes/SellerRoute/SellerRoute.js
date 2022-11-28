import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Spinner from "../../pages/shared/Spinner/Spinner";

const SellerRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  //fetch seller role
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
    return <Spinner></Spinner>
  }

  if (isLoading) {
    return <Spinner></Spinner>
  }

  if (seller.role) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default SellerRoute;
