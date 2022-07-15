import PageHeader from "../components/PageHeader";
import CourseCard from "../components/CourseCard";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useCoursesContext } from "../context/courses_context";

const Courses = () => {
  const {
    courses_loading: loading,
    courses_error: error,
    courses,
  } = useCoursesContext();

  return (
    <div>
      <PageHeader title="Courses" />

      <section className="section-padding page">
        <div className="course-top-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <p>Showing 1-6 of 8 results</p>
              </div>

              <div className="col-lg-4">
                <div className="topbar-search">
                  <form method="get" action="#">
                    <input
                      type="text"
                      placeholder="Search our courses"
                      className="form-control"
                    />
                    <label>
                      <i className="fa fa-search"></i>
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row ">
            {loading && <Loading />}
            {error && <Error />}
            {courses.map((course) => {
              console.log(course);
              return <CourseCard key={course.id} {...course} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
