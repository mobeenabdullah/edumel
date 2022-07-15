import Logo from "../assets/images/logo-white.png";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-mid">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 me-auto col-sm-8">
              <div className="footer-logo mb-3">
                <img src={Logo} alt="Edumel" className="img-fluid" />
              </div>
              <div className="widget footer-widget mb-5 mb-lg-0">
                <p>
                  Edumel is a Bootstrap Template for online courses education
                  websites support multiple courses
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-sm-4">
              <div className="footer-widget mb-5 mb-xl-0">
                <h5 className="widget-title">Explore</h5>
                <ul className="list-unstyled footer-links">
                  <li>
                    <Link to="about">About us</Link>
                  </li>
                  <li>
                    <Link to="contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                  <li>
                    <Link to="register">Register</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-sm-4">
              <div className="footer-widget mb-5 mb-xl-0">
                <h5 className="widget-title ">Categories</h5>
                <ul className="list-unstyled footer-links">
                  <li>
                    <Link to="/">SEO Business</Link>
                  </li>
                  <li>
                    <Link to="/">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/">Graphic Design</Link>
                  </li>
                  <li>
                    <Link to="/">Social Marketing</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-sm-4">
              <div className="footer-widget mb-5 mb-xl-0">
                <h5 className="widget-title">Links</h5>
                <ul className="list-unstyled footer-links">
                  <li>
                    <Link to="/">News & Blogs</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">Return Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-sm-4">
              <div className="footer-widget mb-5 mb-xl-0">
                <h5 className="widget-title">Address</h5>
                <ul className="list-unstyled footer-links">
                  <li>
                    <h6 className="text-white">Phone</h6>
                    <span>+0800 327 8534</span>
                  </li>
                  <li>
                    <h6 className="text-white">Email</h6>
                    <span>support@edumel.com</span>
                  </li>
                </ul>
                <div className="footer-socials mt-4">
                  <a href="https://facebook.com">
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com">
                    <FaTwitter />
                  </a>
                  <a href="https://linkedin.com">
                    <FaLinkedinIn />
                  </a>
                  <a href="https://instagram.com">
                    <FaInstagram />
                  </a>
                  <a href="https://youtube.com">
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-btm">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12 col-sm-12 col-lg-12">
              <p className="mb-0 copyright text-center">
                &copy; 2022 Edumel - All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed-btm-top">
        <a href="#top-header" className="js-scroll-trigger scroll-to-top">
          <i className="fa fa-angle-up"></i>
        </a>
      </div>
    </section>
  );
};

export default Footer;
