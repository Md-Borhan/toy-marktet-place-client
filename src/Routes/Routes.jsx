import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Loader from "../Pages/Loader/Loader";
import Blog from "../Pages/Blog/Blog";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";
import MyToys from "../Pages/MyToys/MyToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ProtectRoute from "./ProtectRoute";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import CategoryDetails from "../Pages/Home/ShopCategory/CategoryDetails/CategoryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/loader",
    element: <Loader></Loader>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/addToys",
    element: (
      <ProtectRoute>
        <AddToys></AddToys>
      </ProtectRoute>
    ),
  },
  {
    path: "/allToys",
    element: <AllToys></AllToys>,
    loader: () => fetch("https://assignment-11-sever-delta.vercel.app/allToys"),
  },
  {
    path: "/toyDetails/:id",
    element: (
      <ProtectRoute>
        <ToysDetails></ToysDetails>
      </ProtectRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://assignment-11-sever-delta.vercel.app/allToys/${params.id}`
      ),
  },
  {
    path: "/myToys",
    element: (
      <ProtectRoute>
        <MyToys></MyToys>
      </ProtectRoute>
    ),
  },
  {
    path: "/updateToys/:id",
    element: <UpdateToys></UpdateToys>,
    loader: ({ params }) =>
      fetch(
        `https://assignment-11-sever-delta.vercel.app/updateToy/${params.id}`
      ),
  },
  {
    path: "/categoryDetails/:id",
    element: <CategoryDetails></CategoryDetails>,
    loader: ({ params }) =>
      fetch(
        `https://assignment-11-sever-delta.vercel.app/allToys/${params.id}`
      ),
  },
]);

export default router;
