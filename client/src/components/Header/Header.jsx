import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logo from "/pplogo.svg";
import { TfiSearch } from "react-icons/tfi";
import { FaMoon, FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice";
import {signoutSuccess} from "../../redux/user/userSlice";
const Header = () => {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);

  const handleSignout = async ()=>{
    try {
      const res = await fetch('api/user/signout',{method: 'POST',})
      const data = await res.json()
      if(!res.ok){
        console.log(data.message)
      }else{
        dispatch(signoutSuccess())
      }

    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Navbar className="border-b-2 fixed w-screen z-50">
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
                <Avatar alt="user" img={currentUser?.profilePicture} rounded />
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
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
