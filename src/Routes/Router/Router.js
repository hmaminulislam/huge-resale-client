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
import WishList from "../../Layout/Dashboard/WishList/WishList";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
        element: (
          <PrivateRoute>
            <SellerRoute>
              <AddProduct></AddProduct>
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-products",
        element: (
          <PrivateRoute>
            <SellerRoute>
              <MyProducts></MyProducts>
            </SellerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-sellers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllSellers></AllSellers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-buyers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllBuyers></AllBuyers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/wishlist",
        element: <WishList></WishList>,
      },
    ],
  },
]);

export default router;
