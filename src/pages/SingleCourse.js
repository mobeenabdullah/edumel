import { Link } from "react-router-dom";
import CourseAuthor from "../assets/course/course-author.png";
import CourseThumbnail from "../assets/course/img_01.jpg";
import BlogAurthor from "../assets/blog/author.jpg";
import {
  FaStar,
  FaUser,
  FaCheck,
  FaArrowRight,
  FaStarHalf,
} from "react-icons/fa";

const SingleCourse = () => {
  return (
    <div>
      <section className="course-page-header  page-header-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <div className="course-header-wrapper mb-0 bg-transparent">
                <h1 className="mb-3">Mastering PHP from zero to hero</h1>
                <p>
                  Grursus mal suada faci lisis Lorem ipsum dolarorit more
                  ametion consectetur elit. Vesti at bulum nec odio. Dacere
                  agemusque constantius concessis elit videmusne quia stoici
                  constructio dissimillimas audiunt homerus commendationes
                </p>

                <div className="course-header-meta">
                  <ul className="inline-list list-info">
                    <li>
                      <div className="course-author">
                        <img src={CourseAuthor} alt="#" />
                        Madge Alvarez
                      </div>
                    </li>

                    <li>
                      <div className="list-rating">
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span>
                          <FaStar />
                        </span>
                        <span className="rating-count">(19)</span>
                      </div>
                    </li>
                    <li>
                      <FaUser />
                      11 enrolled students
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tutori-course-single tutori-course-layout-3 page-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="single-course-details mb-4">
                <h4 className="course-title">Description</h4>
                <p>
                  Knowing PHP has allowed me to make enough money to stay home
                  and make courses like this one for students all over the
                  world. Being a PHP developer can allow anyone to make really
                  good money online and offline, developing dynamic
                  applications. Knowing PHP will allow you to build web
                  applications, websites or Content Management systems, like
                  WordPress, Facebook, Twitter or even Google. There is no limit
                  to what you can do with this knowledge. PHP is one of the most
                  important web programming languages to learn, and knowing it,
                  will give you SUPER POWERS in the web
                </p>

                <div className="course-widget course-info">
                  <h4 className="course-title">What You will Learn?</h4>
                  <ul>
                    <li>
                      <FaCheck />
                      Clean up face imperfections, improve and repair photos
                    </li>
                    <li>
                      <FaCheck />
                      Remove people or objects from photos
                    </li>
                    <li>
                      <FaCheck />
                      Master selections, layers, and working with the layers
                      panel
                    </li>
                    <li>
                      <FaCheck />
                      Use creative effects to design stunning text styles
                    </li>
                    <li>
                      <FaCheck />
                      working with the layers panel
                    </li>
                    <li>
                      <FaCheck />
                      Cut away a person from their background
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tutori-course-curriculum">
                <div className="curriculum-scrollable">
                  <ul className="curriculum-sections">
                    <li className="section">
                      <div className="section-header">
                        <div className="section-left">
                          <h5 className="section-title">
                            Change simplification
                          </h5>
                          <p className="section-desc">
                            Dacere agemusque constantius concessis elit
                            videmusne quia stoici constructio dissimillimas
                            audiunt homerus commendationes
                          </p>
                        </div>
                      </div>

                      <ul className="section-content">
                        <li className="course-item has-status course-item-lp_lesson">
                          <Link className="section-item-link" to="/">
                            <span className="item-name">
                              The importance of data nowsaday
                            </span>
                            <div className="course-item-meta">
                              <span className="item-meta duration">
                                10.30 min
                              </span>
                              <i className="item-meta course-item-status"></i>
                            </div>
                          </Link>
                        </li>

                        <li className="course-item has-status course-item-lp_lesson">
                          <Link className="section-item-link" to="/">
                            <span className="item-name">
                              Why my organization should know about data
                            </span>
                            <div className="course-item-meta">
                              <span className="item-meta duration">
                                20.30 min
                              </span>
                              <i className="item-meta course-item-status"></i>
                            </div>
                          </Link>
                        </li>

                        <li className="course-item course-item-lp_assignment course-item-lp_lesson">
                          <Link className="section-item-link" to="/">
                            <span className="item-name">Assignments</span>
                            <div className="course-item-meta">
                              <span className="item-meta count-questions">
                                14 questions
                              </span>
                              <span className="item-meta duration">
                                10.21 min
                              </span>
                              <i className="fa item-meta course-item-status trans"></i>
                            </div>
                          </Link>
                        </li>
                        <li className="course-item course-item-lp_quiz course-item-lp_lesson">
                          <Link className="section-item-link" to="/">
                            <span className="item-name">Quiz 1</span>
                            <div className="course-item-meta">
                              <span className="item-meta count-questions">
                                14 questions
                              </span>
                              <span className="item-meta duration">
                                5.67 min
                              </span>
                              <i className="fa item-meta course-item-status trans"></i>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="section">
                      <div className="section-header">
                        <div className="section-left">
                          <h5 className="section-title">Key concepts </h5>
                          <p className="section-desc">
                            Dacere agemusque constantius concessis elit
                            videmusne quia stoici constructio dissimillimas
                            audiunt homerus commendationes
                          </p>
                        </div>
                      </div>

                      <ul className="section-content">
                        <li className="course-item has-status course-item-lp_lesson">
                          <Link className="section-item-link" to="/">
                            <span className="item-name">
                              Basic understanding of data management concepts
                            </span>
                            <div className="course-item-meta">
                              <span className="item-meta duration">10 min</span>
                              <i className="item-meta course-item-status"></i>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="section">
                      <ul className="section-content">
                        <li className="course-item has-status course-item-lp_lesson">
                          <Link className="section-item-link" to="/">
                            <span className="item-name">
                              Apply the principles{" "}
                            </span>
                            <div className="course-item-meta">
                              <span className="item-meta duration">10 min</span>
                              <i className="item-meta course-item-status"></i>
                            </div>
                          </Link>
                        </li>

                        <li className="course-item has-status course-item-lp_lesson">
                          <Link className="section-item-link" to="/">
                            <span className="item-name">Lesson 2</span>
                            <div className="course-item-meta">
                              <span className="item-meta duration">20 min</span>
                              <i className="item-meta course-item-status"></i>
                            </div>
                          </Link>
                        </li>

                        <li className="course-item has-status course-item-lp_lesson">
                          <Link className="section-item-link" to="/">
                            <span className="item-name">Lesson 3</span>
                            <div className="course-item-meta">
                              <span className="item-meta duration">5 min</span>
                              <i className="item-meta course-item-status"></i>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="course-reviews ">
                <h4 className="course-title mb-4">Reviews</h4>
                <ul className="course-reviews-list course-reviews-2">
                  <li>
                    <div className="course-review ">
                      <div className="course-single-review">
                        <div className="user-image">
                          <img src={BlogAurthor} alt="" className="img-fluid" />
                        </div>

                        <div className="user-content user-review-content">
                          <div className="review-header mb-10">
                            <h4 className="user-name">Tutori</h4>
                            <p className="review-title">Cover all topicc </p>
                            <div className="rating review-stars-rated">
                              <Link to="/">
                                <FaStar />
                              </Link>
                              <Link to="/">
                                <FaStar />
                              </Link>
                              <Link to="/">
                                <FaStar />
                              </Link>
                              <Link to="/">
                                <FaStar />
                              </Link>
                              <Link to="/">
                                <FaStarHalf />
                              </Link>
                            </div>
                          </div>
                          <div className="review-text">
                            <div className="review-content">
                              The course identify things we want to change and
                              then figure out the things that need to be done to
                              create the desired outcome. The course helped me
                              in clearly define problems and generate a wider
                              variety of quality solutions. Support more
                              structures analysis of options leading to better
                              decisions.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="course-review">
                      <div className="course-single-review">
                        <div className="user-image">
                          <img src={BlogAurthor} alt="" className="img-fluid" />
                        </div>

                        <div className="user-content user-review-content">
                          <div className="review-header mb-10">
                            <h4 className="user-name">Tutori</h4>
                            <p className="review-title">Cover all topicc </p>
                            <div className="rating review-stars-rated">
                              <Link to="/">
                                <FaStar />
                              </Link>
                              <Link to="/">
                                <FaStar />
                              </Link>
                              <Link to="/">
                                <FaStar />
                              </Link>
                              <Link to="/">
                                <FaStar />
                              </Link>
                              <Link to="/">
                                <FaStarHalf />
                              </Link>
                            </div>
                          </div>
                          <div className="review-text">
                            <div className="review-content">
                              The course identify things we want to change and
                              then figure out the things that need to be done to
                              create the desired outcome. The course helped me
                              in clearly define problems and generate a wider
                              variety of quality solutions. Support more
                              structures analysis of options leading to better
                              decisions.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="course-sidebar course-sidebar-3 mt-5 mt-lg-0">
                <div className="course-widget course-details-info ">
                  <div className="course-thumbnail">
                    <img src={CourseThumbnail} alt="" className="img-fluid" />
                  </div>

                  <div className="course-sidebar-details">
                    <div className="price-header">
                      <h2 className="course-price">
                        $120.00 <span>$150</span>
                      </h2>
                      <span className="course-price-badge onsale">39% off</span>
                    </div>
                    <ul className="course-sidebar-list">
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-sliders-h"></i>Level
                          </span>
                          Beginnner
                        </div>
                      </li>

                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="fas fa-play-circle"></i>Lectures
                          </span>
                          2
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-user"></i>Students
                          </span>
                          20
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-clock"></i>Duration
                          </span>
                          6 hours
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-globe"></i>Language
                          </span>
                          English
                        </div>
                      </li>

                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-calendar"></i>Updated{" "}
                          </span>
                          October 15, 2022
                        </div>
                      </li>
                    </ul>

                    <div className="buy-btn">
                      <button className="button button-enroll-course btn btn-main rounded">
                        <i className="far fa-shopping-cart me-2"></i> Enroll
                        Course
                      </button>
                    </div>

                    <div className="course-meterial">
                      <h4 className="mb-3">Material Includes</h4>
                      <ul className="course-meterial-list">
                        <li>
                          <FaArrowRight />
                          Videos
                        </li>
                        <li>
                          <FaArrowRight />
                          Files For Development
                        </li>
                        <li>
                          <FaArrowRight />
                          Documentation Files
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="course-latest">
                <h4 className="mb-4">Popular Courses</h4>
                <ul className="recent-posts course-popular">
                  <li>
                    <div className="widget-post-thumb">
                      <Link to="/">
                        <img src={CourseAuthor} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="widget-post-body">
                      <h6>
                        {" "}
                        <Link to="/">Wordpress Theme Development</Link>
                      </h6>
                      <h5>$120</h5>
                    </div>
                  </li>
                  <li>
                    <div className="widget-post-thumb">
                      <Link to="/">
                        <img src={CourseAuthor} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="widget-post-body">
                      <h6>
                        {" "}
                        <Link to="/">mastering Photoshop for beginners</Link>
                      </h6>
                      <h5>$100</h5>
                    </div>
                  </li>
                  <li>
                    <div className="widget-post-thumb">
                      <Link to="/">
                        <img src={CourseAuthor} alt="" className="img-fluid" />
                      </Link>
                    </div>
                    <div className="widget-post-body">
                      <h6>
                        {" "}
                        <Link to="/">Photography mastering adobe tool</Link>
                      </h6>
                      <h5>$100</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleCourse;
