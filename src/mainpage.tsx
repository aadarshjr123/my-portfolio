import Header from "@components/header/header";
import IntroSection from "@components/introSection/introSection";
import Squares from "@components/effects/squares/squares";
import ExperienceComic from "@components/experienceSection/experienceSection";
import FooterSection from "@components/footerSection/footerSection";

import ProjectComic from "@components/projectSection/projectSection";
import SkillsSection from "@components/skillsSection/skillsSection";
import "./mainpage.scss";

const App = () => {
  return (
    <div className="mainpage">
      <div className="mainpage__background">
        <Squares
          speed={0.2}
          squareSize={10}
          borderColor="#221e221a"
          hoverFillColor="#222"
        />
      </div>

      <div className="mainpage__content">
        <Header />
        <IntroSection />
        <ExperienceComic />
        <SkillsSection />
        <ProjectComic />
        <FooterSection />
      </div>
    </div>
  );
};

export default App;
