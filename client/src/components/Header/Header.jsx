import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import logo from "/pplogo.svg";
import { TfiSearch } from "react-icons/tfi";
import { FaMoon } from "react-icons/fa";
const Header = () => {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
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
        <Button className="hidden sm:inline" color="dark" pill>
          <FaMoon />
        </Button>
        <Link>
          <Button gradientDuoTone="pinkToOrange" className="" outline>
            Sign In
          </Button>
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
