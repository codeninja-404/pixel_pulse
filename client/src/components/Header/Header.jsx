import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logo from "/pplogo.svg";
import { TfiSearch } from "react-icons/tfi";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice";
import { signoutSuccess } from "../../redux/user/userSlice";
import { useState } from "react";
const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [toggleNav, setToggleNav] = useState(false);

  const navlinks = (
    // <div className="">
    <ul
      className={`absolute mt-4 flex flex-col md:mt-0 md:flex-row md:text-sm md:font-medium  md:block md:w-auto  transform transition-transform duration-300 rounded-b-lg shadow-md ${
        toggleNav ? "translate-y-0 top-10 md:top-[58px]" : " -translate-y-full"
      }  left-0 right-0  py-2 text-center bg-[#1f2937]`}
    >
      <li
        className="p-2 w-1/2 my-2 mx-auto hover:bg-slate-700 rounded-md "
        active={path === "/"}
        as={"div"}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className="p-2 w-1/2 my-2 mx-auto hover:bg-slate-700 rounded-md "
        active={path === "/about"}
        as={"div"}
      >
        <Link to="/about">About</Link>
      </li>
      <li
        className="p-2  w-1/2 my-2 mx-auto hover:bg-slate-700 rounded-md "
        active={path === "/projects"}
        as={"div"}
      >
        <Link to="/projects">Projects</Link>
      </li>
    </ul>
    // </div>
  );

  const handleSignout = async () => {
    try {
      const res = await fetch("api/user/signout", { method: "POST" });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar className="border-b-2 fixed w-screen z-50 navbar flex flex-col">
      <Link to="/">
        <img className="w-20 object-contain" src={logo} alt="" />
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search...."
          rightIcon={TfiSearch}
          className="hidden lg:inline"
        ></TextInput>
      </form>
      <Button
        className="
           lg:hidden"
        color="gray"
        pill
      >
        <TfiSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button
          onClick={() => {
            dispatch(toggleTheme());
          }}
          className="hidden sm:inline "
          color="gray"
          pill
        >
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        <Link>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <img
                  src={currentUser?.profilePicture}
                  alt="user"
                  className="object-cover w-10 h-10 rounded-full"
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">@{currentUser.username}</span>
                <span className="block text-sm font-medium truncate">
                  {currentUser.email}
                </span>
              </Dropdown.Header>
              <Link to={"/dashboard?tab=profile"}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>

              <Dropdown.Item onClick={handleSignout}>
                <Link to="/sign-out">Sign Out</Link>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="pinkToOrange" className="" outline>
                Sign In
              </Button>
            </Link>
          )}
        </Link>
        <Button
          onClick={() => setToggleNav(!toggleNav)}
          className=" w-10 h-10 bg-gray-200  rounded-full overflow-hidden "
          color="gray"
        >
          <span className="flex flex-col justify-center items-center">
            {/* Top bar of the hamburger/X */}
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                toggleNav ? "rotate-45 translate-y-[1.7px]" : "rotate-0 mb-1"
              }`}
            ></span>

            {/* Middle bar (hidden when X is active) */}
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                toggleNav ? "opacity-0" : ""
              }`}
            ></span>

            {/* Bottom bar of the hamburger/X */}
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 transform origin-center ${
                toggleNav ? "-rotate-45 -translate-y-[1.7px]" : "rotate-0 mt-1"
              }`}
            ></span>
          </span>
        </Button>
      </div>
      {navlinks}
    </Navbar>
  );
};

export default Header;
