import { Helmet } from "react-helmet-async";
import BannerSection from "../../Banner/BannerSection";
import AboutMe from "../../AboutMe/AboutMe";
import MySkill from "../../MySkill/MySkill";
import Projects from "../../Projects/Projects";
import ClientFeedback from "../../ClientFeedback/ClientFeedback";
import Contact from "../../Contact/Contact";
import BuildTogether from "../../BuildTogether/BuildTogether";
import FAQ from "../../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>My Portfolio | Home</title>
      </Helmet>

      {/*  */}
      <BannerSection></BannerSection>
      <AboutMe></AboutMe>
      <MySkill></MySkill>
      <Projects></Projects>
      <ClientFeedback></ClientFeedback>
      <FAQ></FAQ>
      <Contact></Contact>
      <BuildTogether></BuildTogether>
    </div>
  );
};

export default Home;
