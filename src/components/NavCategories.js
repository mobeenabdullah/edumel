import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTh } from "react-icons/fa";
import { courses_categories_url } from "../utils/constants";
import { Loading, Error } from "../components";
import { useCoursesContext } from "../context/courses_context";

const NavCategories = () => {
  const {
    course_categories_loading: loading,
    course_categories_error: error,
    course_categories: categories,
    fetchCourseCategories,
  } = useCoursesContext();

  useEffect(() => {
    fetchCourseCategories(`${courses_categories_url}`);
  }, []);

  return (
    <div className="header-category-menu d-none d-xl-block">
      <ul>
        <li className="has-submenu">
          <Link to="courses">
            <FaTh />
            <span> Categories</span>
          </Link>
          <ul className="submenu">
            {loading && <Loading />}
            {error && <Error />}
            {categories.map((category) => {
              return (
                <li key={category.id} {...category}>
                  <Link to={`/${category.slug}`}>{category.name}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavCategories;
