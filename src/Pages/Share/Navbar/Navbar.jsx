import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./navber.css";
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
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
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
                  className="h-16 border-gray-700 border-2 w-16 rounded-full"
                  title={user.displayName}
                  src={user.photoURL}
                  alt="User"
                />
              )}
            </ul>
          </div>
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
                className="h-16 border-gray-700 border-2 w-16 rounded-full"
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
