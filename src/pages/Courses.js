import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import CourseImage from "../assets/course/img_01.jpg";
import { FaArrowRight } from "react-icons/fa";

const Courses = () => {
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
            <div className="course-item col-lg-3 col-md-6 col-sm-6">
              <div className=" course-style-5 bg-white">
                <div className="course-header">
                  <div className="course-thumb">
                    <img src={CourseImage} alt="" className="img-fluid" />
                    <div className="course-price">$300</div>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-meta meta-style-1">
                    <span className="lessons">
                      <i className="far fa-play-circle me-2"></i>26 Lectures
                    </span>
                    <span className="label">Beginner</span>
                  </div>
                  <h4>
                    {" "}
                    <Link to="/">
                      Emotional Intelligence at Work: Learn Emotions
                    </Link>{" "}
                  </h4>

                  <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                    <span className="students">
                      <i className="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <Link to="/" className="rounded-btn">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-item col-lg-3 col-md-6 col-sm-6">
              <div className=" course-style-5 bg-white">
                <div className="course-header">
                  <div className="course-thumb">
                    <img src={CourseImage} alt="" className="img-fluid" />
                    <div className="course-price">$300</div>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-meta meta-style-1">
                    <span className="lessons">
                      <i className="far fa-play-circle me-2"></i>26 Lectures
                    </span>
                    <span className="label">Intermediate</span>
                  </div>
                  <h4>
                    {" "}
                    <Link to="/">
                      SQL-Data Analysis: Crash Course For Masters
                    </Link>{" "}
                  </h4>

                  <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                    <span className="students">
                      <i className="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <Link to="/" className="rounded-btn">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-item col-lg-3 col-md-6 col-sm-6">
              <div className=" course-style-5 bg-white">
                <div className="course-header">
                  <div className="course-thumb">
                    <img src={CourseImage} alt="" className="img-fluid" />
                    <div className="course-price">Free</div>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-meta meta-style-1">
                    <span className="lessons">
                      <i className="far fa-play-circle me-2"></i>26 Lectures
                    </span>
                    <span className="label">Intermediate</span>
                  </div>
                  <h4>
                    {" "}
                    <Link to="/">
                      Learn How to Start an Amazon FBA Store
                    </Link>{" "}
                  </h4>

                  <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                    <span className="students">
                      <i className="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <Link to="/" className="rounded-btn">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-item col-lg-3 col-md-6 col-sm-6">
              <div className=" course-style-5 bg-white">
                <div className="course-header">
                  <div className="course-thumb">
                    <img src={CourseImage} alt="" className="img-fluid" />
                    <div className="course-price">Free</div>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-meta meta-style-1">
                    <span className="lessons">
                      <i className="far fa-play-circle me-2"></i>26 Lectures
                    </span>
                    <span className="label">Intermediate</span>
                  </div>
                  <h4>
                    {" "}
                    <Link to="/">
                      Learn How to Start an Amazon FBA Store
                    </Link>{" "}
                  </h4>

                  <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                    <span className="students">
                      <i className="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <Link to="/" className="rounded-btn">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-item col-lg-3 col-md-6 col-sm-6">
              <div className=" course-style-5 bg-white">
                <div className="course-header">
                  <div className="course-thumb">
                    <img src={CourseImage} alt="" className="img-fluid" />
                    <div className="course-price">Free</div>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-meta meta-style-1">
                    <span className="lessons">
                      <i className="far fa-play-circle me-2"></i>26 Lectures
                    </span>
                    <span className="label">Intermediate</span>
                  </div>
                  <h4>
                    {" "}
                    <Link to="/">
                      Learn How to Start an Amazon FBA Store
                    </Link>{" "}
                  </h4>

                  <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                    <span className="students">
                      <i className="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <Link to="/" className="rounded-btn">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-item col-lg-3 col-md-6 col-sm-6">
              <div className=" course-style-5 bg-white">
                <div className="course-header">
                  <div className="course-thumb">
                    <img src={CourseImage} alt="" className="img-fluid" />
                    <div className="course-price">Free</div>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-meta meta-style-1">
                    <span className="lessons">
                      <i className="far fa-play-circle me-2"></i>26 Lectures
                    </span>
                    <span className="label">Intermediate</span>
                  </div>
                  <h4>
                    {" "}
                    <Link to="/">
                      Learn How to Start an Amazon FBA Store
                    </Link>{" "}
                  </h4>

                  <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                    <span className="students">
                      <i className="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <Link to="/" className="rounded-btn">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-item col-lg-3 col-md-6 col-sm-6">
              <div className=" course-style-5 bg-white">
                <div className="course-header">
                  <div className="course-thumb">
                    <img src={CourseImage} alt="" className="img-fluid" />
                    <div className="course-price">Free</div>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-meta meta-style-1">
                    <span className="lessons">
                      <i className="far fa-play-circle me-2"></i>26 Lectures
                    </span>
                    <span className="label">Intermediate</span>
                  </div>
                  <h4>
                    {" "}
                    <Link to="/">
                      Learn How to Start an Amazon FBA Store
                    </Link>{" "}
                  </h4>

                  <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                    <span className="students">
                      <i className="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <Link to="/" className="rounded-btn">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="course-item col-lg-3 col-md-6 col-sm-6">
              <div className=" course-style-5 bg-white">
                <div className="course-header">
                  <div className="course-thumb">
                    <img src={CourseImage} alt="" className="img-fluid" />
                    <div className="course-price">Free</div>
                  </div>
                </div>

                <div className="course-content">
                  <div className="course-meta meta-style-1">
                    <span className="lessons">
                      <i className="far fa-play-circle me-2"></i>26 Lectures
                    </span>
                    <span className="label">Intermediate</span>
                  </div>
                  <h4>
                    {" "}
                    <Link to="/">
                      Learn How to Start an Amazon FBA Store
                    </Link>{" "}
                  </h4>

                  <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                    <span className="students">
                      <i className="far fa-user-alt me-2"></i>51 Students
                    </span>
                    <Link to="/" className="rounded-btn">
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
