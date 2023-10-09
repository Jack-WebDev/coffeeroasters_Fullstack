import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    setToggleMenu((prev) => !prev);
  }

  return (
    <div className="bg-gray-700 relative">
      <nav className="flex justify-between px-[2rem] py-[1rem]">
        <Link className="text-white">Logo</Link>

        <ul
          className={
            toggleMenu
              ? "mobile grid gap-[1.5rem] text-center text-white bg-red-700 translate-y-[15%] -translate-x-[2rem] py-[2rem] w-full md:hidden absolute"
              : "mobile grid gap-[1.5rem] text-center text-white bg-red-700 -translate-y-[150%] -translate-x-[2rem] py-[2rem] w-full md:hidden absolute"
          }
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <div className="hamburger md:hidden cursor-pointer" onClick={handleToggle}>
          <i
            className={
              toggleMenu
                ? "fa-solid fa-xmark text-white"
                : "fa-solid fa-bars text-white"
            }
          ></i>
        </div>

        <ul className="desktop hidden md:flex gap-[1.5rem] text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
