import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { useOptionsContext } from "../context/options_context";

const TopBar = () => {
  const { options } = useOptionsContext();
  const { social } = options;
  return (
    <div className="header-topbar topbar-style-1">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-8 col-lg-8 col-sm-6">
            <div className="header-contact text-center text-sm-start text-lg-start">
              <span></span>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-sm-6">
            <div className="header-socials text-center text-lg-end">
              <ul className="list-inline">
                {social &&
                  social.map((item, index) => {
                    return (
                      <li className="list-inline-item" key={index}>
                        <a href={item.url}>
                          <FaFacebookF />
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
