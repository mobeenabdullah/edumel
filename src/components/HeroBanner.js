//import BannerImage from "../assets/images/banner/banner_img.png";
import BannerImage from "../assets/images/banner/banner_img.png";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <section className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12 col-xl-6 col-lg-6">
            <div className="banner-content">
              <h1>Distant learning for further expansion </h1>
              <p>
                The ultimate planning solution for people who want to reach
                their personal goals Effortless comfortable.
              </p>

              <div className="banner-form me-5">
                <form action="#" className="form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What do you want to learn?"
                  />
                  <Link to="/">
                    {" "}
                    Search<i className="far fa-search"></i>
                  </Link>
                </form>
              </div>
              <div className="category-name">
                <span>Popular:</span>
                <Link to="/">Design ,</Link>
                <Link to="/">Development ,</Link>
                <Link to="/">Marketing ,</Link>
                <Link to="/">Affiliate</Link>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-xl-6 col-lg-6">
            <div className="banner-img-round mt-5 mt-lg-0">
              <img src={BannerImage} alt="Hero Banner" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
