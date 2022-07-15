import { useEffect } from "react";
import { courses_categories_url } from "../utils/constants";
import { Loading, Error, CourseCategoryCard } from "../components";
import { useCoursesContext } from "../context/courses_context";

const CategoriesSection = () => {
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
    <section className="section-padding">
      <div className="container-fluid container-grid">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="heading mb-50 text-center">
              <span className="subheading">Top Categories</span>
              <h2>Browse Courses By Category</h2>
            </div>
          </div>
        </div>

        <div className="row">
          {loading && <Loading />}
          {error && <Error />}
          {categories.map((category) => {
            return <CourseCategoryCard key={category.id} {...category} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
