import Illustration from "../assets/images/banner/illustration.png";
import Button from "../components/Button";
const BecomeInstructor = () => {
  return (
    <section className="be-instructor section-padding-btm">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <img src={Illustration} alt="" className="img-fluid" />
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="section-heading mt-4 mt-lg-0">
              <span className="subheading">Start Today</span>
              <h2 className="font-lg mb-20">Become an instructor </h2>
              <p className="mb-20">
                Do you want to be an instructor? Do you want to share your
                knowledge with everyone? If you have any skill then you can
                easily share your knowledge online or offline through iLive
                platform & make money.
              </p>
              <p className="mb-30">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
                adipisci corporis soluta facilis eum facere nisi dolorem
                quisquam amet deleniti!
              </p>

              <Button label="Start Teaching today" link="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructor;
