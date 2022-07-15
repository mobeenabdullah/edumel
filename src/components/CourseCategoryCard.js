import { Link } from "react-router-dom";
const CourseCategoryCard = ({ icon, name, slug }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="single-course-category style-2 mb-20">
        <div className="course-cat-icon">
          {icon && <img src={icon} alt={name} className="img-fluid" />}
        </div>
        <div className="course-cat-content">
          <h4 className="course-cat-title">
            <Link to={`/${slug}`}>{name}</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CourseCategoryCard;
