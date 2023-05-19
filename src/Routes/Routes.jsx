import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Loader from "../Pages/Loader/Loader";
import Blog from "../Pages/Blog/Blog";
import AddToys from "../Pages/AddToys/AddToys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
    element: <AddToys></AddToys>,
  },
]);

export default router;
