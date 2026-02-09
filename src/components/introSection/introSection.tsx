import React from "react";
import "./IntroSection.scss";
import introSectionImage from "@assets/introSectionImage.svg";
import TextType from "@components/effects/textType/textType";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-section__content">
        <TextType
          text={["Writing code, breaking things, and learning every day."]}
          className="intro-section__title"
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />

        <p className="intro-section__description">
          Backend-leaning full-stack developer with 3+ years of experience
          building production web applications. Skilled in{" "}
          <Tippy
            className="intro-section__tooltip-content"
            content="Python-based backend development, async APIs, and system-level services"
          >
            <span className="intro-section__tooltip">
              Python & Backend Systems
            </span>
          </Tippy>
          ,{" "}
          <Tippy
            className="intro-section__tooltip-content"
            content="A typed superset of JavaScript used for scalable frontend applications"
          >
            <span className="intro-section__tooltip">TypeScript</span>
          </Tippy>{" "}
          and{" "}
          <Tippy
            className="intro-section__tooltip-content"
            content="Automated testing practices including E2E and integration testing"
          >
            <span className="intro-section__tooltip">testing</span>
          </Tippy>
          . I write clean, maintainable code and enjoy working in collaborative
          teams through code reviews, pair programming, and CI-driven workflows.
        </p>

        <button className="intro-section__button">Contact Me</button>
      </div>

      <div className="intro-section__image">
        <img src={introSectionImage} alt="Developer meme" />
      </div>
    </section>
  );
};

export default IntroSection;
