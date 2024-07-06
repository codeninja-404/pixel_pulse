import { Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "/pplogo.svg";
import { TfiSearch } from "react-icons/tfi";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice";
import { signoutSuccess } from "../../redux/user/userSlice";
import { useEffect, useState } from "react";
import { HiXCircle } from "react-icons/hi";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useSelector((state) => state.theme);
  const [toggleNav, setToggleNav] = useState(false);
  const [isFloatingSearchVisible, setIsFloatingSearchVisible] = useState(false);
  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/projects", text: "Projects" },
  ];
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);
  useEffect(() => {
    const handleScroll = () => {
      setToggleNav(false);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setToggleNav(false);
        setIsFloatingSearchVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setToggleNav(false);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setToggleNav(false);
        setIsFloatingSearchVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setToggleNav(false);
  }, [location.pathname]);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };
  return (
    <Navbar className="border-b-2 fixed w-screen z-50 navbar flex flex-col">
      <Link to="/">
        <img className="w-20 object-contain" src={logo} alt="" />
      </Link>
      <form onSubmit={handleSubmit}>
        <div className="relative hidden lg:block ">
          <input
            type="text"
            placeholder="Search...."
            className="border rounded-lg dark:bg-[#374151] pr-10 pl-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            type="submit"
            className="absolute !bg-teal-500 inset-y-0 right-0 rounded-bl-3xl rounded-tl-3xl  flex items-center h-full"
          >
            <TfiSearch className="" />
          </Button>
        </div>
      </form>

      {/* floting input */}
      <Button
        className="lg:hidden h-9 m-1 flex justify-center items-center overflow-hidden"
        color="gray"
        pill
        onClick={() => setIsFloatingSearchVisible(true)}
      >
        <TfiSearch />
      </Button>
      {isFloatingSearchVisible && (
        <div className="fixed lg:hidden inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50">
          <div className=" rounded-lg shadow-lg  max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex items-center">
              <div className="relative ">
                <input
                  type="text"
                  placeholder="Search...."
                  className="border text-white rounded-lg bg-[#374151] pr-10 pl-4 py-2 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Button
                  type="submit"
                  className="absolute !bg-teal-500 inset-y-0 right-0 rounded-bl-3xl rounded-tl-3xl  flex items-center"
                >
                  <TfiSearch className="" />
                </Button>
              </div>
              <Button
                type="button"
                onClick={() => setIsFloatingSearchVisible(false)}
                className="ml-1 px-0 w-8 !bg-red-500 flex justify-center items-center rounded-br-3xl rounded-tr-3xl"
              >
                <HiXCircle className="text-xl" />
              </Button>
            </form>
          </div>
        </div>
      )}

      <div className="flex gap-2 md:order-2 ">
        <Button
          onClick={() => {
            dispatch(toggleTheme());
          }}
          className="  w-9 h-9 m-1
           md:flex justify-center items-center bg-gray-200  rounded-full overflow-hidden "
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
                  className="object-cover w-9 h-9 m-1 rounded-full"
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
          className=" w-9 h-9 m-1
           flex justify-center items-center bg-gray-200  rounded-full overflow-hidden "
          color="gray"
        >
          <span className="flex flex-col justify-center items-center">
            {/* Top bar of the hamburger/X */}
            <span
              className={`w-5 h-[3px] rounded-full bg-black dark:bg-white transition-all duration-300 transform origin-center ${
                toggleNav ? "rotate-45 translate-y-[3px]" : "rotate-0 mb-1"
              }`}
            ></span>

            {/* Middle bar (hidden when X is active) */}
            <span
              className={`w-5 h-[3px] rounded-full bg-black dark:bg-white transition-all duration-300 transform origin-center ${
                toggleNav ? "opacity-0" : ""
              }`}
            ></span>

            {/* Bottom bar of the hamburger/X */}
            <span
              className={`w-5 h-[3px] rounded-full bg-black dark:bg-white transition-all duration-300 transform origin-center ${
                toggleNav ? "-rotate-45 -translate-y-[3px]" : "rotate-0 mt-1"
              }`}
            ></span>
          </span>
        </Button>
      </div>
      <ul
        className={`absolute mt-4 flex flex-col md:mt-0 md:flex-row md:text-sm md:font-medium  md:block md:w-auto  transform transition-transform duration-300 rounded-b-lg shadow-md navactive ${
          toggleNav
            ? "translate-y-0 top-10 md:top-[58px]"
            : " -translate-y-full"
        }  left-0 right-0  py-2 text-center bg-slate-100 dark:bg-[#1f2937]`}
      >
        {/* {navlinks} */}
        {navLinks.map((link, index) => (
          <li key={index} className=" ">
            <NavLink
              className={`p-2 block w-1/2 my-2 mx-auto hover:bg-slate-300 dark:hover:bg-slate-700 rounded-md`}
              to={link.to}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </Navbar>
  );
};

export default Header;
