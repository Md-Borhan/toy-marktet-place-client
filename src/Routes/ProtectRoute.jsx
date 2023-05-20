import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Pages/Loader/Loader";
import { Navigate, useLocation } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { loader, user } = useContext(AuthContext);
  const location = useLocation();

  if (loader) {
    return <Loader></Loader>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default ProtectRoute;
