import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./navber.css";
import shape from "../../../assets/shape/shape.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="">
      <div className="navbar px-4 md:px-8 bg-white justify-between">
        <div className="navbar-start w-auto">
          <Link className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden w-auto lg:flex navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className="font-medium text-lg" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/allToys" className="font-medium text-lg">
                All Toys
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/myToys" className="font-medium text-lg">
                  My Toys
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/addToys" className="font-medium text-lg">
                  Add a Toys
                </Link>
              </li>
            )}
            <li>
              <Link to="/blog" className="font-medium text-lg">
                Blogs
              </Link>
            </li>
            {user ? (
              <li>
                <Link onClick={handleLogout} className="font-medium text-lg">
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login" className="font-medium text-lg">
                  Login
                </Link>
              </li>
            )}
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
      </div>
    </div>
  );
};

export default Navbar;
