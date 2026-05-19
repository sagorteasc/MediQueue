import Banner from "@/components/Home/Banner";
import HomeTutorData from "@/components/Home/HomeTutorData";
import LearningCategories from "@/components/Home/LearningCategories";
import WhyChooseMediQueue from "@/components/Home/WhyChooseMediQueue";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeTutorData />
      <LearningCategories />
      <WhyChooseMediQueue />
    </div>
  );
};

export default Home;