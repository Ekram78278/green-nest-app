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
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
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
              className="relative menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
    {user ? (
      <div className="dropdown dropdown-end">
        {/* Profile Picture Trigger */}
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 h-10 rounded-full ring ring-green-700 ring-offset-base-100 ring-offset-2">
            <img
              alt="User Profile"
              src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              onError={(e) => {
                console.error("Image failed to load:", e);
                e.target.src = "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";
              }}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Dropdown Menu */}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-3 w-52 p-2 shadow-lg border border-gray-200"
        >
          {/* User Info Section */}
          <li className="menu-title">
            <div className="flex flex-col px-2 py-2">
              <span className="font-semibold text-sm">
                {user.displayName || "User"}
              </span>
              <span className="text-xs text-gray-500 truncate">
                {user.email}
              </span>
            </div>
          </li>
          <hr className="my-1" />

          {/* Profile Link */}
          <li>
            <Link to="/profile" className="justify-between">
              My Profile
              <span className="badge badge-sm bg-green-700 text-white">View</span>
            </Link>
          </li>

          {/* Logout Button */}
          <li>
            <a onClick={handleLogout} className="text-red-600 hover:bg-red-50">
              Logout
            </a>
          </li>
        </ul>
      </div>
    ) : (
      <Link to="/login" className="btn bg-green-700 text-white">
        Login or Register
      </Link>
    )}
  </div>


      </div>
    </div>
  );
};

export default Navbar;
