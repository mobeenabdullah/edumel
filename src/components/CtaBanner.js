import { Link } from "react-router-dom";

const CtaBanner = () => {
    return (
        <section className="cta-intro section-padding-btm">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-12">
                        <div className="cta-inner-wrapper">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-8 col-lg-8 col-md-6">
                                    <div className="section-heading mb-3 mb-lg-0 text-center text-md-start">
                                        <span className="text-color">Let Us Help</span>
                                        <h4>Finding Your Right Courses</h4>
                                    </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-6">
                                <div className="text-center text-md-end">
                                    <Link to="/" className="btn btn-main rounded">Get started</Link>
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

export default CtaBanner;