import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./navber.css";
import shape from "../../../assets/shape/shape.png";
import { useContext } from "react";
import { AuthContext } from "../../../Routes/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <div className="navbar relative bg-white">
        <div className="navbar-start">
          <Link className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-medium text-lg" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-medium text-lg">All Toys</Link>
            </li>
            <li>
              <Link className="font-medium text-lg">My Toys</Link>
            </li>
            <li>
              <Link className="font-medium text-lg">Add a Toys</Link>
            </li>
            <li>
              <Link className="font-medium text-lg">Blogs</Link>
            </li>
            <li>
              <Link to="/login" className="font-medium text-lg">
                Login
              </Link>
            </li>
            {user && (
              <img
                className="h-20 border-gray-700 border-2 w-20 rounded-full"
                title={user.displayName}
                src={user.photoURL}
                alt="User"
              />
            )}
          </ul>
        </div>
        <div className="w-full left-0 absolute -bottom-5">
          <img className="w-full" src={shape} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
