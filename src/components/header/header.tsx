import React from "react";
import "./header.scss";
import ScrambledText from "@components/effects/scrambledText/scrambledText";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <ScrambledText
          radius={10}
          duration={1.2}
          speed={0.5}
          scrambleChars=".:"
        >
          Aadarsh Sasi Kumar
        </ScrambledText>
      </div>
      <nav className="header__nav">
        <a href="#projects" className="header__nav-item">
          Projects
        </a>
        <a href="#skills" className="header__nav-item">
          Skills
        </a>
      </nav>
    </header>
  );
};

export default Header;
