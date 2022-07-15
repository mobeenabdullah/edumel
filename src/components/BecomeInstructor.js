import Illustration from "../assets/images/banner/illustration.png";
import Button from "../components/Button";
const BecomeInstructor = () => {
  return (
    <section class="be-instructor section-padding-btm">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-lg-6">
            <img src={Illustration} alt="" class="img-fluid" />
          </div>

          <div class="col-xl-6 col-lg-6">
            <div class="section-heading mt-4 mt-lg-0">
              <span class="subheading">Start Today</span>
              <h2 class="font-lg mb-20">Become an instructor </h2>
              <p class="mb-20">
                Do you want to be an instructor? Do you want to share your
                knowledge with everyone? If you have any skill then you can
                easily share your knowledge online or offline through iLive
                platform & make money.
              </p>
              <p class="mb-30">
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
