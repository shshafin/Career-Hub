import { NavLink } from "react-router-dom";
import "./Header.css";



const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "listItem" : ""
          }
          to={`/`}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "listItem" : ""
          }
          to={`/Statistics`}
        >
          Statistics
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "listItem" : ""
          }
          to={`/Applied`}
        >
          Applied Jobs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "listItem" : ""
          }
          to={`/Blog`}
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="div">
      <div className="navbar max-w-7xl mx-auto   ">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="font-bold text-3xl">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-8 font-semibold text-gray-600 menu-horizontal px-1 ">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" btn buttonClr text-white">Start Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
