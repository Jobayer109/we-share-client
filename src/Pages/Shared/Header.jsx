import React, { useContext } from "react";
import { FaAlignJustify, FaEnvelope, FaHome, FaList, FaListAlt, FaUserAlt } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMenuAlt2 />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/media">Media</Link>
            </li>
            <li>
              <Link to="/message">Messages</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          We Share
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              <FaHome className="text-xl mx-6" />
            </Link>
          </li>
          <li>
            <Link to="/media">
              <FaListAlt className="text-xl mx-6" />
            </Link>
          </li>
          <li>
            <Link to="/message">
              <FaEnvelope className="text-xl mx-6" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FaUserAlt className="text-xl mx-6" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        {user?.email ? (
          <>
            {" "}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 w-44 rounded-md border"
              >
                <li>
                  <Link to="/about" className="justify-between">
                    Profile
                  </Link>
                </li>
                {user ? (
                  <li>
                    <Link to="/login">
                      <button onClick={handleSignOut} className="text-start mr- w-28 font-semibold">
                        Sign Out
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link to="/login">
                      <button className="text-start mr- w-28 font-semibold">Sign In</button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </>
        ) : (
          <li>
            <Link to="/login">
              <button className="w-28  mr-2 py-1 font-semibold border border-blue-400">
                Sign in
              </button>
            </Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Header;
