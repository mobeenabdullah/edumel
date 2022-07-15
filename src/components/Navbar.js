import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import NavCategories from "./NavCategories";
import Button from "../components/Button";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="header-navbar navbar-sticky">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="site-logo">
            <Link to="/">
              <img src={Logo} alt="Edumel" className="img-fluid" />
            </Link>
          </div>

          <div className="offcanvas-icon d-block d-lg-none">
            <a href="#" className="nav-toggler">
              <FaBars />
            </a>
          </div>

          <NavCategories />

          <nav className="site-navbar ms-auto">
            <ul className="primary-menu">
              <li className="current">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
              <li>
                <Link to="courses">Courses</Link>
              </li>
              <li>
                <Link to="instructors">Instructors</Link>
              </li>
              <li>
                <Link to="blog">Blog</Link>
              </li>
              <li>
                <Link to="contact">Contact</Link>
              </li>
            </ul>

            <a href="#" className="nav-close">
              <FaTimes />
            </a>
          </nav>

          <div className="header-btn d-none d-xl-block">
            <Link to="login" className="login">
              Login
            </Link>
            <Button label="Sign up" link="/register" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
