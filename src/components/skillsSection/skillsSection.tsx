import React, { useState } from "react";

import skillsSectionImg1 from "@assets/skillsSectionImg1.svg";
import skillsSectionImg2 from "@assets/skillsSectionImg2.svg";

import "./skillsSection.scss";

const techStack = [
  // Languages
  "Python",
  "TypeScript",

  // Backend
  "FastAPI",
  "REST APIs",
  "Async Programming",
  "Redis",
  "PostgreSQL",
  "Authentication (JWT)",

  // Systems & Reliability
  "Background Workers",
  "Queues & Pub/Sub",
  "Retry & Backoff",
  "Rate Limiting",
  "API Health Monitoring",

  // Frontend (Professional)
  "Vue.js",
  "SCSS",
  "Naive UI",

  // Testing
  "Cypress",
  "Jest",

  // DevOps & Tooling
  "Docker",
  "Docker Compose",
  "Linux (Ubuntu)",
  "Git",
  "CLI Tools",

  // Observability
  "Prometheus",
  "Structured Logging",
  "OpenTelemetry",
];

const SkillsSection: React.FC = () => {
  const [showCursor, setShowCursor] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="skills-section" id="skills">
      <div
        className="skills-section__image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={isHovered ? skillsSectionImg1 : skillsSectionImg2}
          alt="Developer meme"
        />
      </div>

      <div className="skills-section__container">
        <section
          className="skills-section__toolkit"
          onMouseEnter={() => setShowCursor(true)}
          onMouseLeave={() => setShowCursor(false)}
        >
          <h2 className="skills-section__toolkit__title">My toolkit</h2>
          <div className="skills-section__toolkit__tags">
            {techStack.map((tech, index) => (
              <div key={index} className="cursor-target">
                <span className="skills-section__toolkit__tag">{tech}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default SkillsSection;
