import { Link } from "react-router-dom";
import logo from "../../../assets/footer-logo.png";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaBehanceSquare,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-700 text-white ">
        <div>
          <img src={logo} alt="" />
          <p>
            <strong>Kidol</strong> Industries Ltd.
            <br />
            Providing reliable tech since 2023
          </p>
        </div>
        <div>
          <span className="footer-title">Social Links</span>
          <a className="link flex items-center gap-2  link-hover">
            <FaFacebookSquare className="text-lg"></FaFacebookSquare>_Facebook
          </a>
          <a className="link flex items-center gap-2  link-hover">
            <FaInstagramSquare className="text-lg"></FaInstagramSquare>
            _Instagram
          </a>
          <a className="link flex items-center gap-2  link-hover">
            <FaLinkedin className="text-lg"></FaLinkedin>_Linkedin
          </a>
          <a className="link flex items-center gap-2  link-hover">
            <FaBehanceSquare className="text-lg"></FaBehanceSquare>_Behance
          </a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Others Page</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/" className="link link-hover">
            All Toys
          </Link>
          <Link to="/" className="link link-hover">
            My Toys
          </Link>
          <Link to="/" className="link link-hover">
            Blogs
          </Link>
        </div>
        <div>
          <span className="footer-title">Store Information</span>
          <a className="link link-hover">2005 Your Address Goes Here. 896,</a>
          <a className="link link-hover">
            Address 10010, HGJ Phone/Fax: 0123456789
          </a>
          <a className="link link-hover">Email: demo@example.com</a>
        </div>
      </footer>
      <div className="py-6 bg-gray-800 text-white text-center">
        <p>
          &copy; 2023 <strong>KIDOL</strong> made by Borhan
        </p>
      </div>
    </div>
  );
};

export default Footer;
