import { Link } from "react-router-dom";
import CategoryIcon from "../assets/icon/icon1.png";

const CategoriesSection = () => {
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
          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2 mb-20">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Data Science & Analytics</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Web Development</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Artificial Intellegence</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Digital marketing</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2 ">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Artificial Intellegence</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Web Development</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Data Science & Analytics</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Health & Fitness</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Marketing</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Web Development</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Photography</Link>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="single-course-category style-2 ">
              <div className="course-cat-icon">
                <img src={CategoryIcon} alt="" className="img-fluid" />
              </div>
              <div className="course-cat-content">
                <h4 className="course-cat-title">
                  <Link to="/">Data Science</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
