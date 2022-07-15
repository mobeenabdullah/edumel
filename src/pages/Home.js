import HeroBanner from "../components/HeroBanner";
import FeaturesIntro from "../components/FeaturesIntro";
import CategoriesSection from "../components/CategoriesSection";
import StatsSection from "../components/StatsSection";
import PopularCourses from "../components/PopularCourses";
import CtaBanner from "../components/CtaBanner";
import WorkProcess from "../components/WorkProcess";
import TestimonialsSection from "../components/TestimonialsSection";
import BecomeInstructor from "../components/BecomeInstructor";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FeaturesIntro />
      <CategoriesSection />
      <StatsSection />
      <PopularCourses />
      <CtaBanner />
      <WorkProcess />
      <TestimonialsSection />
      <BecomeInstructor />
    </div>
  );
};

export default Home;
