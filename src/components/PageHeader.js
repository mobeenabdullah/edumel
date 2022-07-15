import { Link } from "react-router-dom";

const PageHeader = ({ title }) => {
  return (
    <section className="page-header">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-8">
            <div className="title-block">
              <h1>{title}</h1>
              <ul className="header-bradcrumb justify-content-center">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active" aria-current="page">
                  {title}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
