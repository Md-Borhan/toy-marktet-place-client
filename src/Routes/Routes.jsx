import Home from "../Pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Loader from "../Pages/Loader/Loader";
import Blog from "../Pages/Blog/Blog";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import ToysDetails from "../Pages/ToysDetails/ToysDetails";

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
  {
    path: "/allToys",
    element: <AllToys></AllToys>,
    loader: () => fetch("http://localhost:5500/allToys"),
  },
  {
    path: "/toyDetails/:id",
    element: <ToysDetails></ToysDetails>,
    loader: ({ params }) => fetch(`http://localhost:5500/allToys/${params.id}`),
  },
]);

export default router;
