import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="page-wrapper woocommerce single">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-xl-5">
            <div className="woocommerce-notices-wrapper"></div>
            <div className="login-form">
              <div className="form-header">
                <h2 className="font-weight-bold mb-3">404</h2>
                <p className="woocommerce-register">
                  No page found{" "}
                  <Link to="/register" className="text-decoration-underline">
                    Back to home
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
