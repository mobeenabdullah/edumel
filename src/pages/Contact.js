const Contact = () => {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-lg-5">
            <div className="contact-info-wrapper mb-5 mb-lg-0">
              <h3>
                what's your story?
                <span>Get in touch</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Asperiores Feel Free to contact with us
              </p>

              <div className="contact-item">
                <i className="fa fa-envelope"></i>
                <h5>support@email.com</h5>
              </div>

              <div className="contact-item">
                <i className="fa fa-phone-alt"></i>
                <h5>+45 234 345467</h5>
              </div>

              <div className="contact-item">
                <i className="fa fa-map-marker"></i>
                <h5>Moon Street Light Avenue, 14/05 Jupiter </h5>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-6">
            <form
              className="contact__form form-row "
              method="post"
              action="mail.php"
              id="contactForm"
            >
              <div className="row">
                <div className="col-12">
                  <div
                    className="alert alert-success contact__msg"
                    role="alert"
                  >
                    Your message was sent successfully.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      id="message"
                      name="message"
                      cols="30"
                      rows="6"
                      className="form-control"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="text-center">
                  <button className="btn btn-main w-100 rounded" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
