import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCoursesContext } from "../context/courses_context";
import { single_course_url, course_reviews_url } from "../utils/constants";
import { Loading, Error, Stars } from "../components";
import { formatPrice } from "../utils/helpers";

import {
  FaStar,
  FaUser,
  FaLongArrowAltRight,
  FaStarHalf,
} from "react-icons/fa";

const SingleCourse = () => {
  const { id } = useParams();
  const {
    single_course_loading: loading,
    single_course_error: error,
    single_course: course,
    fetchSingleCourse,
    course_reviews,
    fetchCourseReviews,
  } = useCoursesContext();

  useEffect(() => {
    fetchSingleCourse(`${single_course_url}${id}`);
  }, [id]);

  useEffect(() => {
    fetchCourseReviews(`${course_reviews_url}${id}`);
  }, []);

  if (loading || Object.keys(course).length === 0) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    title,
    featured_image_url,
    content,
    excerpt,
    course_info: {
      regular_price,
      sale_price,
      discount,
      lectures_count,
      level,
      enrolled_students,
      duration,
      language,
      updated,
    },
    course_content: { sections },
    material_includes: { material_items },
    instructor_id,
    reviews,
  } = course;

  return (
    <div>
      <section className="course-page-header  page-header-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <div className="course-header-wrapper mb-0 bg-transparent">
                <h1 className="mb-3">{title}</h1>
                <div>{excerpt}</div>

                <div className="course-header-meta">
                  <ul className="inline-list list-info">
                    <li>
                      <div className="course-author">
                        <img src="" alt="#" />
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
                      <FaUser /> {enrolled_students} enrolled students
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
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
              <div className="tutori-course-curriculum">
                <div className="curriculum-scrollable">
                  <ul className="curriculum-sections">
                    {sections.map((item, index) => {
                      return (
                        <li className="section" key={index}>
                          <div className="section-header">
                            <div className="section-left">
                              <h5 className="section-title">
                                {item.section_title}
                              </h5>
                              <p className="section-desc">
                                {item.section_description}
                              </p>
                            </div>
                          </div>

                          <ul className="section-content">
                            {item.content.map((item, index) => {
                              const [icon] = item.content_type;
                              return (
                                <li
                                  className="course-item has-status course-item-lp_lesson"
                                  key={index}
                                >
                                  <Link className="section-item-link" to="/">
                                    {icon && icon === "video" ? (
                                      <svg
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-labelledby="videoIconTitle"
                                        stroke="#000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        color="#000"
                                      >
                                        <path d="m18 12-9 4.9V7z" />
                                        <circle cx="12" cy="12" r="10" />
                                      </svg>
                                    ) : (
                                      ""
                                    )}
                                    {icon && icon === "assignment" ? (
                                      <svg
                                        width="24"
                                        height="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          d="M10.748 2h2.505a2.25 2.25 0 0 1 2.245 2.096l.005.154v.25h1.242a3.25 3.25 0 0 1 3.25 3.25v12.005a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 19.755V7.75A3.25 3.25 0 0 1 7.25 4.5h1.247v-.25a2.25 2.25 0 0 1 2.096-2.245L10.748 2h2.505-2.505Zm5.997 4H7.25A1.75 1.75 0 0 0 5.5 7.75v12.005c0 .414.336.75.75.75h11.495a.75.75 0 0 0 .75-.75V7.75A1.75 1.75 0 0 0 16.745 6Zm-1.494 7.5c.966 0 1.75.784 1.75 1.75v1.997a1.75 1.75 0 0 1-1.75 1.75H8.752a1.75 1.75 0 0 1-1.75-1.75V15.25c0-.966.784-1.75 1.75-1.75h6.499Zm0 1.5H8.752a.25.25 0 0 0-.25.25v1.997c0 .138.112.25.25.25h6.499a.25.25 0 0 0 .25-.25V15.25a.25.25 0 0 0-.25-.25ZM10.75 9.5h2.5a.75.75 0 0 1 .102 1.493L13.25 11h-2.5a.75.75 0 0 1-.102-1.493l.102-.007h2.5-2.5Zm2.503-6h-2.505a.75.75 0 0 0-.744.648l-.006.102-.001.25h4.006v-.25a.75.75 0 0 0-.648-.743l-.102-.007Z"
                                          fill="#212121"
                                        />
                                      </svg>
                                    ) : (
                                      ""
                                    )}
                                    {icon && icon === "quiz" ? (
                                      <svg
                                        fill="#000000"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 18 18"
                                        width="30"
                                        height="30"
                                      >
                                        <path d="M 4.5 2 C 3.675781 2 3 2.675781 3 3.5 L 3 12.5 C 3 13.324219 3.675781 14 4.5 14 L 11.5 14 C 12.324219 14 13 13.324219 13 12.5 L 13 5.292969 L 9.707031 2 Z M 4.5 3 L 9 3 L 9 6 L 12 6 L 12 12.5 C 12 12.78125 11.78125 13 11.5 13 L 4.5 13 C 4.21875 13 4 12.78125 4 12.5 L 4 3.5 C 4 3.21875 4.21875 3 4.5 3 Z M 10 3.707031 L 11.292969 5 L 10 5 Z M 6 8 L 6 9 L 10 9 L 10 8 Z M 6 10 L 6 11 L 9 11 L 9 10 Z" />
                                      </svg>
                                    ) : (
                                      ""
                                    )}
                                    <span className="item-name">
                                      {item.content_title}
                                    </span>
                                    <div className="course-item-meta">
                                      <span className="item-meta duration">
                                        {item.content_duration} Min
                                      </span>
                                      <i className="item-meta course-item-status"></i>
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div id="course-reviews ">
                <h4 className="course-title mb-4">Reviews</h4>
                <ul className="course-reviews-list course-reviews-2">
                  {course_reviews.map((item) => {
                    return (
                      <li key={item.id}>
                        <div className="course-review ">
                          <div className="course-single-review">
                            <div className="user-image">
                              <img
                                src={item.profile_image}
                                alt={item.title}
                                className="img-fluid"
                              />
                            </div>

                            <div className="user-content user-review-content">
                              <div className="review-header mb-10">
                                <h4 className="user-name">{item.name}</h4>
                                <p className="review-title">{item.title}</p>
                                <div className="rating review-stars-rated">
                                  <Stars stars={item.stars} />
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
                                <div
                                  className="review-content"
                                  dangerouslySetInnerHTML={{
                                    __html: item.content,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <div className="course-sidebar course-sidebar-3 mt-5 mt-lg-0">
                <div className="course-widget course-details-info ">
                  <div className="course-thumbnail">
                    <img
                      src={featured_image_url}
                      alt={title}
                      className="img-fluid"
                    />
                  </div>

                  <div className="course-sidebar-details">
                    <div className="price-header">
                      <h2 className="course-price">
                        {formatPrice(regular_price)}
                        {/* <span>$150</span> */}
                      </h2>
                      {/* <span className="course-price-badge onsale">39% off</span> */}
                    </div>
                    <ul className="course-sidebar-list">
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-sliders-h"></i>Level
                          </span>
                          {level}
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
                          {enrolled_students}
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-clock"></i>Duration
                          </span>
                          {duration}
                        </div>
                      </li>
                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-globe"></i>Language
                          </span>
                          {language}
                        </div>
                      </li>

                      <li>
                        <div className="d-flex justify-content-between align-items-center">
                          <span>
                            <i className="far fa-calendar"></i>Updated{" "}
                          </span>
                          {updated}
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
                        {material_items.map((item, index) => {
                          return (
                            <li key={index}>
                              <FaLongArrowAltRight />
                              {item.material_item}
                            </li>
                          );
                        })}
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
                        <img src="" alt="" className="img-fluid" />
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
                        <img src="" alt="" className="img-fluid" />
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
                        <img src="" alt="" className="img-fluid" />
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
