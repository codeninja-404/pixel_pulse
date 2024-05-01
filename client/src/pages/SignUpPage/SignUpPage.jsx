import { Link } from "react-router-dom";
import logo from "/pplogo.svg";
import { Button, Label, TextInput } from "flowbite-react";
const SignUpPage = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className=" flex md:items-center   max-w-3xl p-3 mx-auto flex-col md:flex-row gap-5">
        {/* left */}
        <div className="flex-1">
          {" "}
          <Link to="/">
            <img className="w-52 object-contain" src={logo} alt="" />
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign in with your email and password
            or with Google.
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div className="">
              <Label value="Your name" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div className="">
              <Label value="Your email" />
              <TextInput type="text" placeholder="Email" id="email" />
            </div>
            <div className="">
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button gradientDuoTone="pinkToOrange">Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
