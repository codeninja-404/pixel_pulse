import { Footer } from "flowbite-react";
import logo from "/pplogo.svg";
import { Link } from "react-router-dom";
import {
  FaSquareDribbble,
  FaSquareFacebook,
  FaSquareGithub,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-slate-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1 ">
          <div>
            <Link to="/">
              <img className="w-28 object-contain" src={logo} alt="" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                  BookShelf
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PIXEL PULSE
                </Footer.Link>
                <Footer.Link>Event.CO</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/codeninja-404"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legals" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="" target="_blank">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Pixel Pulse"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={FaSquareFacebook} />
            <Footer.Icon href="#" icon={FaSquareInstagram} />
            <Footer.Icon href="#" icon={FaSquareXTwitter} />
            <Footer.Icon href="#" icon={FaSquareGithub} />
            <Footer.Icon href="#" icon={FaSquareDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
