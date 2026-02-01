import { Link } from "react-router-dom";
import NavLogo from "../../../assets/People/logo.png";

const NavBar = () => {
  const NavOptions = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/projects"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/blogs"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          to="/contact"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          Dashboard
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar mt-15 fixed z-10 bg-black bg-opacity-50 text-gray-100 max-w-screen-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-gray-200"
            >
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
              className="menu menu-sm dropdown-content bg-gray-900 text-gray-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavOptions}
            </ul>
          </div>

          {/* Left - Logo with Image */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-400">
              <img
                src={NavLogo}
                alt="Mojahid"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-white uppercase font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tight">
              Mojahid
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{NavOptions}</ul>
        </div>

        <div className="navbar-end flex items-center space-x-3">
          <Link
            to="/login"
            className="font-bold text-gray-100 hover:text-purple-400 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="btn btn-accent btn-active rounded-lg font-bold text-white hover:bg-purple-600"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
