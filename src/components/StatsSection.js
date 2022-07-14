import {
    FaGg    
  } from "react-icons/fa";

const StatsSection = () => {
    return (
        <section className="counter-section-2">
            <div className="container">
                <div className="row align-items-center justify-content-center" >
                    <div className="col-xl-5 pr-xl-5 col-lg-8">
                        <div className="section-heading mb-5 mb-xl-0 text-center text-xl-start">
                            <span className="subheading">10,000+ Trusted Clients All Over The World</span>
                            <h2 className="font-lg">Some reasons why Start Your Online Learning with Us</h2>
                        </div>
                    </div>

                    <div className="col-xl-7">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-box bg-1 mb-4 mb-lg-0">
                                    <FaGg size="60" color="#ffffff" />
                                    <div className="count">
                                        <span className="counter h2">2</span><span>k</span>
                                    </div>
                                    <p>Students</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="counter-box bg-2 mb-4 mb-lg-0">
                                    <FaGg size="60" color="#ffffff" />
                                    <div className="count">
                                        <span className="counter h2">120</span><span>+</span>
                                    </div>
                                    <p>Online Courses</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="counter-box bg-3">
                                    <FaGg size="60" color="#ffffff" />
                                    <div className="count">
                                        <span className="counter h2">100</span><span>%</span>
                                    </div>
                                    <p>Satisfaction</p>     
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        </section>
    );
};

export default StatsSection;