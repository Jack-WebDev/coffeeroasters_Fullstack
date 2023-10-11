import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/userApiSlice";
import { logout } from "../slices/authSlice";
import './Header.css'

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const handleLogOut = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  function handleToggle() {
    setToggleMenu((prev) => !prev);
  }

  return (
    <div className="relative">
      <nav className="navbar flex justify-between px-[1rem] py-[1rem] md:px-[2rem]">
        <Link className="text-white"><img className="w-[70%]" src="src/assets/shared/desktop/logo.svg" alt="" /></Link>

        <ul
          className={
            toggleMenu
              ? "mobile grid gap-[1.5rem] text-center bg-gray-300 translate-y-[15%] -translate-x-[.5rem] py-[2rem] w-[90%] mx-auto md:hidden absolute"
              : "mobile grid gap-[1.5rem] text-center bg-gray-300 -translate-y-[150%] -translate-x-[.5rem] py-[2rem] w-[90%] mx-auto md:hidden absolute"
          }
        >
          {userInfo ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/createPlan">Create Your Plan</Link>
              </li>
              <div onClick={handleLogOut}>
                <Link to="/logout">Log Out</Link>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>

        <div
          className="hamburger md:hidden cursor-pointer"
          onClick={handleToggle}
        >
          <i
            className={
              toggleMenu
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars"
            }
          ></i>
        </div>

        <ul className="desktop hidden md:flex gap-[1.5rem]">
          {userInfo ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/createPlan">Create Your Plan</Link>
              </li>
              <div onClick={handleLogOut}>
                <Link to="/logout">Log Out</Link>
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
