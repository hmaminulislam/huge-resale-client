import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Spinner from "../../pages/shared/Spinner/Spinner";

const AdminRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();

  //fecth admin role check
  const { data: admin = [], isLoading } = useQuery({
    queryKey: [user?.email, "admin"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/admin?email=${user?.email}`,
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

  if (admin.role) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
