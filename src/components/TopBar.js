import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="header-topbar topbar-style-1">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-8 col-lg-8 col-sm-6">
            <div className="header-contact text-center text-sm-start text-lg-start">
              <span>1010 Moon ave, New York, NY US</span>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-sm-6">
            <div className="header-socials text-center text-lg-end">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="https://facebook.com">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com">
                    <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://linkedin.com">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://instagram.com">
                    <FaInstagram />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://youtube.com">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
