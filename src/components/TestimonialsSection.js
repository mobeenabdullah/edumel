import TestimonialAvatar from "../assets/clients/testimonial-avata-01.jpg";
const TestimonialsSection = () => {
  return (
    <section className="testimonial section-padding">
      <div className="container-fluid container-grid">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-heading text-center mb-50">
              <span className="subheading">Students Feedback</span>
              <h2 className="font-lg">Our Students Says</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 col-xl-12">
            <div className="testimonials-slides-3 owl-carousel owl-theme">
              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quote-icon">
                    <i className="flaticon-left-quote"></i>
                  </div>

                  <div className="testimonial-text mb-30">
                    Cras vel purus fringilla, lobortis libero ut Proin a velit
                    convallis, fermentum orci in, rutrum diam. Duis elementum
                    odio a pharetra commodo.
                  </div>

                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src={TestimonialAvatar}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Cory Zamora</h4>
                      <span className="meta">Marketing Specialist</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quote-icon">
                    <i className="flaticon-left-quote"></i>
                  </div>

                  <div className="testimonial-text  mb-30">
                    Cras vel purus fringilla, lobortis libero ut Proin a velit
                    convallis, fermentum orci in, rutrum diam. Duis elementum
                    odio a pharetra commodo.
                  </div>

                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src={TestimonialAvatar}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Jackie Sanders</h4>
                      <span className="meta">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quote-icon">
                    <i className="flaticon-left-quote"></i>
                  </div>

                  <div className="testimonial-text  mb-30">
                    Cras vel purus fringilla, lobortis libero ut Proin a velit
                    convallis, fermentum orci in, rutrum diam. Duis elementum
                    odio a pharetra commodo.
                  </div>

                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src={TestimonialAvatar}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Nikolas Brooten</h4>
                      <span className="meta">Sales Manager</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quote-icon">
                    <i className="flaticon-left-quote"></i>
                  </div>

                  <div className="testimonial-text mb-30">
                    Cras vel purus fringilla, lobortis libero ut Proin a velit
                    convallis, fermentum orci in, rutrum diam. Duis elementum
                    odio a pharetra commodo.
                  </div>

                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src={TestimonialAvatar}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Terry Ambady</h4>
                      <span className="meta">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-inner">
                  <div className="quote-icon">
                    <i className="flaticon-left-quote"></i>
                  </div>

                  <div className="testimonial-text mb-30">
                    Cras vel purus fringilla, lobortis libero ut Proin a velit
                    convallis, fermentum orci in, rutrum diam. Duis elementum
                    odio a pharetra commodo.
                  </div>

                  <div className="client-info d-flex align-items-center">
                    <div className="client-img">
                      <img
                        src={TestimonialAvatar}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-author">
                      <h4>Nikolas Brooten</h4>
                      <span className="meta">Sales Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
