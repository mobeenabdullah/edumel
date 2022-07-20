import { Link } from "react-router-dom";
import { useOptionsContext } from "../context/options_context";
import { FaFacebookF } from "react-icons/fa";
import { Loading, Error } from "../components";

const Footer = () => {
  const { options } = useOptionsContext();

  if (Object.keys(options).length === 0) {
    return <Loading />;
  }

  const { social, footer, site_title } = options;

  return (
    <section className="footer">
      <div className="footer-mid">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 me-auto col-sm-8">
              <div className="footer-logo mb-3">
                <img
                  src={footer.footer_logo.url}
                  alt={site_title}
                  className="img-fluid"
                />
              </div>
              <div className="widget footer-widget mb-5 mb-lg-0">
                <p>{footer.about_us}</p>
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
                    <Link to="/">Design</Link>
                  </li>
                  <li>
                    <Link to="/">Development</Link>
                  </li>
                  <li>
                    <Link to="/">Marketing</Link>
                  </li>
                  <li>
                    <Link to="/">Freelancing</Link>
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
                    <span>{footer.address.phone}</span>
                  </li>
                  <li>
                    <h6 className="text-white">Email</h6>
                    <span>{footer.address.email}</span>
                  </li>
                </ul>
                <div className="footer-socials mt-4">
                  {social &&
                    social.map((item, index) => {
                      return (
                        <a href={item.url} key={index}>
                          <FaFacebookF />
                        </a>
                      );
                    })}
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
