import logo from "../assets/AKlogo.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-6">
        <div className="flex items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
          <div className="ml-40 text-4xl font-semibold">Sanku Arunkumar</div>
        </div>
        <div className="flex items-center gap-5">
          <Link to="about" smooth={true} duration={500} className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
            About
          </Link>
          <Link to="experience" smooth={true} duration={500} className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
            Experience
          </Link>
          <Link to="Projects" smooth={true} duration={500} className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="px-4 py-2 hover:bg-gray-700 rounded-md cursor-pointer">
            Contact
          </Link>
        </div>
        <div className="m-8 flex items-center justify-center gap-5 text-2xl cursor-pointer">
          <FaLinkedin
            onClick={() => window.open("https://www.linkedin.com/in/arun-kumar-sanku-b6376a1a5/", "_blank")}
            aria-label="LinkedIn profile"
          />
          <FaGithub
            onClick={() => window.open("https://github.com/arunkumarsanku", "_blank")}
            aria-label="GitHub profile"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
