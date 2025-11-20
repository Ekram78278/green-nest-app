import { Link } from "react-router";
import MyLink from "./MyLink";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogout = () => {
    logOut().then(() => {
      toast("Log-Out Successful")
    }).catch((error) => {
      const errorMessage = error.message;
      toast(errorMessage);
    });
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <MyLink to={"/"}>Home</MyLink>
              </li>
              <li>
                <MyLink to={"/plants"}>Plants</MyLink>
              </li>
              <li>
                <MyLink to={"/profile"}>My Profile</MyLink>
              </li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl text-green-700">GreenNest</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <MyLink to={"/"}>Home</MyLink>
            </li>

            <li>
              <MyLink to={"/plants"}>Plants</MyLink>
            </li>
            <li>
              <MyLink to={"/profile"}>My Profile</MyLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? (<button onClick={handleLogout} className="btn bg-green-700 text-white" > 
                Log-Out
            </button>) : (<Link to='/login' className="btn bg-green-700 text-white">Login</Link>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
