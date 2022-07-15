import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CourseCard = ({
  id,
  title,
  featured_image_url,
  course_info: { price, lectures_count, level, enrolled_students },
}) => {
  return (
    <div className="course-item col-lg-4 col-md-6 col-sm-6">
      <div className=" course-style-5 bg-white">
        <div className="course-header">
          <div className="course-thumb">
            <img src={featured_image_url} alt={title} className="img-fluid" />
            <div className="course-price">{price}</div>
          </div>
        </div>

        <div className="course-content">
          <div className="course-meta meta-style-1">
            <span className="lessons">
              <i className="far fa-play-circle me-2"></i>
              {lectures_count} Lectures
            </span>
            <span className="label">{level}</span>
          </div>
          <h4>
            <Link to={`/courses/${id}`}>{title}</Link>
          </h4>

          <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
            <span className="students">
              <i className="far fa-user-alt me-2"></i>
              {enrolled_students} Students
            </span>
            <Link to={`/courses/${id}`} className="rounded-btn">
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
