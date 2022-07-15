import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="page-wrapper woocommerce single">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-xl-5">
            <div className="woocommerce-notices-wrapper"></div>
            <div className="login-form">
              <div className="form-header">
                <h2 className="font-weight-bold mb-3">Login</h2>
                <p className="woocommerce-register">
                  Don't have an account yet?{" "}
                  <Link to="/register" className="text-decoration-underline">
                    Sign Up for Free
                  </Link>
                </p>
              </div>
              <form
                className="woocommerce-form woocommerce-form-login login"
                method="post"
              >
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label for="username">
                    Username or email address&nbsp;
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="woocommerce-Input woocommerce-Input--text input-text form-control"
                    name="username"
                    id="username"
                    autocomplete="username"
                    value=""
                    placeholder="Username or Email"
                  />
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  <label for="password">
                    Password&nbsp;<span className="required">*</span>
                  </label>
                  <input
                    className="woocommerce-Input woocommerce-Input--text input-text form-control"
                    type="password"
                    name="password"
                    id="password"
                    autocomplete="current-password"
                    placeholder="Password"
                  />
                </p>

                <div className="d-flex align-items-center justify-content-between py-2">
                  <p className="form-row">
                    <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                      <input
                        className="woocommerce-form__input woocommerce-form__input-checkbox"
                        name="rememberme"
                        type="checkbox"
                        id="rememberme"
                        value="forever"
                      />{" "}
                      <span>Remember me</span>
                    </label>
                  </p>

                  <p className="woocommerce-LostPassword lost_password">
                    <Link to="/">Forgot password?</Link>
                  </p>
                </div>

                <p className="form-row">
                  <input
                    type="hidden"
                    id="woocommerce-login-nonce"
                    name="woocommerce-login-nonce"
                    value="a414dce984"
                  />
                  <input
                    type="hidden"
                    name="_wp_http_referer"
                    value="/my-account/"
                  />
                  <button
                    type="submit"
                    className="woocommerce-button button woocommerce-form-login__submit"
                    name="login"
                    value="Log in"
                  >
                    Log in
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

export default Login;
