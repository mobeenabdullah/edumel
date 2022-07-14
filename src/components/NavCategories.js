import { Link } from "react-router-dom";
import { FaTh } from "react-icons/fa";

const NavCategories = () => {
  return (
    <div className="header-category-menu d-none d-xl-block">
      <ul>
        <li className="has-submenu">
          <Link to="courses">
            <FaTh />
            <span> Categories</span>
          </Link>
          <ul className="submenu">
            <li>
              <Link to="/">Design</Link>
            </li>
            <li>
              <Link to="/">Developemnt</Link>
            </li>
            <li>
              <Link to="/">Marketing</Link>
            </li>
            <li>
              <Link to="/">Freelancing</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavCategories;
