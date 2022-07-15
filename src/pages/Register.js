import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section className="woocommerce single page-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-xl-7">
            <div className="signup-form">
              <div className="form-header">
                <h2 className="font-weight-bold mb-3">Sign Up</h2>
                <p className="woocommerce-register">
                  Already have an account?{" "}
                  <Link to="/" className="text-decoration-underline">
                    Log in
                  </Link>
                </p>
              </div>

              <form
                method="post"
                className="woocommerce-form woocommerce-form-register register"
              >
                <div className="row">
                  <div className="col-xl-6">
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label>
                        First Name&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="first-name"
                        placeholder="First Name"
                      />
                    </p>
                  </div>
                  <div className="col-xl-6">
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label>
                        Last Name&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="last-name"
                        placeholder="Last Name"
                      />
                    </p>
                  </div>
                  <div className="col-xl-6">
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label>
                        User Name&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="user-name"
                        value=""
                        placeholder="Username"
                      />
                    </p>
                  </div>

                  <div className="col-xl-6">
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label>
                        Email&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value=""
                        placeholder="Your Email"
                      />
                    </p>
                  </div>

                  <div className="col-xl-6">
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label>
                        Password&nbsp;<span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value=""
                        placeholder="Password"
                      />
                    </p>
                  </div>
                  <div className="col-xl-6">
                    <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                      <label>
                        Re-Enter Password&nbsp;
                        <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="re-password"
                        value=""
                        placeholder="Re-Enter Password"
                      />
                    </p>
                  </div>

                  <div className="col-xl-12">
                    <div className="d-flex align-items-center justify-content-between py-2">
                      <p className="form-row">
                        <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__policy">
                          <input
                            className="woocommerce-form__input woocommerce-form__input-checkbox"
                            name="policy"
                            type="checkbox"
                            id="policy"
                            value="forever"
                          />{" "}
                          <span>Accept the Terms and Privacy Policy</span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>

                <p className="woocommerce-FormRow form-row">
                  <button
                    type="submit"
                    className="woocommerce-button button"
                    name="register"
                    value="Register"
                  >
                    Register
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
