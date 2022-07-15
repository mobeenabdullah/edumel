import { Link } from "react-router-dom";
import CourseImage from "../assets/course/img_01.jpg";

const PopularCourses = () => {
  return (
    <section className="section-padding course-filter-section">
      <div className="container">
        <div className="row align-items-center justify-content-between mb-30">
          <div className="col-xl-12">
            <div className="heading text-center mb-40">
              <span className="subheading">Course Trending</span>
              <h2 className="font-lg">Explore popular courses</h2>
            </div>

            <div className="filter-wrap text-center">
              <ul className="course-filter ">
                <li className="active">
                  <a to="/" data-filter="*">
                    {" "}
                    All
                  </a>
                </li>
                <li>
                  <Link to="/" data-filter=".cat1">
                    printing
                  </Link>
                </li>
                <li>
                  <Link to="/" data-filter=".cat2">
                    Web
                  </Link>
                </li>
                <li>
                  <Link to="/" data-filter=".cat3">
                    illustration
                  </Link>
                </li>
                <li>
                  <Link to="/" data-filter=".cat4">
                    media
                  </Link>
                </li>
                <li>
                  <Link to="/" data-filter=".cat5">
                    crafts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid container-padding">
        <div className="row course-gallery justify-content-center">
          <div className="course-item cat1 cat5 col-lg-3 col-md-6 col-sm-6">
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
                  <a to="/">
                    Emotional Intelligence at Work: Learn Emotions
                  </a>{" "}
                </h4>

                <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                  <span className="students">
                    <i className="far fa-user-alt me-2"></i>51 Students
                  </span>
                  <Link to="/" className="rounded-btn">
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="course-item cat2 cat4 col-lg-3 col-md-6 col-sm-6">
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
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="course-item cat3 cat2 col-lg-3 col-md-6 col-sm-6">
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
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="course-item cat5 cat1 col-lg-3 col-md-6 col-sm-6">
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
                  <span className="label">Expert</span>
                </div>
                <h4>
                  {" "}
                  <Link to="/">
                    Writing With Flair: Become a Top Rated Writer
                  </Link>{" "}
                </h4>

                <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                  <span className="students">
                    <i className="far fa-user-alt me-2"></i>51 Students
                  </span>
                  <Link to="/" className="rounded-btn">
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="course-item cat3 cat2 col-lg-3 col-md-6 col-sm-6">
            <div className=" course-style-5 bg-white">
              <div className="course-header">
                <div className="course-thumb">
                  <img src={CourseImage} alt="" className="img-fluid" />
                  <div className="course-price">$240</div>
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
                    Cinematography Course: Shoot Better Video{" "}
                  </Link>{" "}
                </h4>

                <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                  <span className="students">
                    <i className="far fa-user-alt me-2"></i>51 Students
                  </span>
                  <Link to="/" className="rounded-btn">
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="course-item cat3 cat2 col-lg-3 col-md-6 col-sm-6">
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
                    Data Competitive Strategy law & Organization{" "}
                  </Link>{" "}
                </h4>

                <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                  <span className="students">
                    <i className="far fa-user-alt me-2"></i>51 Students
                  </span>
                  <Link to="/" className="rounded-btn">
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="course-item cat3 cat2 col-lg-3 col-md-6 col-sm-6">
            <div className=" course-style-5 bg-white">
              <div className="course-header">
                <div className="course-thumb">
                  <img src={CourseImage} alt="" className="img-fluid" />
                  <div className="course-price">$460</div>
                </div>
              </div>

              <div className="course-content">
                <div className="course-meta meta-style-1">
                  <span className="lessons">
                    <i className="far fa-play-circle me-2"></i>26 Lectures
                  </span>
                  <span className="label">Expert</span>
                </div>
                <h4>
                  {" "}
                  <Link to="/">
                    Adobe Lightroom classNameic : Photo Editing MasterclassName
                  </Link>{" "}
                </h4>

                <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                  <span className="students">
                    <i className="far fa-user-alt me-2"></i>51 Students
                  </span>
                  <Link to="/" className="rounded-btn">
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="course-item cat3 cat2 col-lg-3 col-md-6 col-sm-6">
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
                    The Complete Salesforce classNameic Certification{" "}
                  </Link>{" "}
                </h4>

                <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                  <span className="students">
                    <i className="far fa-user-alt me-2"></i>51 Students
                  </span>
                  <Link to="/" className="rounded-btn">
                    <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
