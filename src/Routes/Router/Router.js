import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import MyOrders from "../../Layout/Dashboard/MyOrders/MyOrders";
import ErrorPage from "../../pages/shared/ErrorPage/ErrorPage";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddProduct from "../../Layout/Dashboard/AddProduct/AddProduct";
import MyProducts from "../../Layout/Dashboard/MyProducts/MyProducts";
import AllSellers from "../../Layout/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../Layout/Dashboard/AllBuyers/AllBuyers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <Category></Category>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard/my-orders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts></MyProducts>
      },
      {
        path: "/dashboard/all-sellers",
        element: <AllSellers></AllSellers>
      },
      {
        path: "/dashboard/all-buyers",
        element: <AllBuyers></AllBuyers>
      },
    ],
  },
]);

export default router;
