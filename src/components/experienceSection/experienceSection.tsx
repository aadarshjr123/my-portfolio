import React, { useState } from "react";
import "./experienceSection.scss";

const experiences = [
  {
    company: "QUADRA SYSTEMS",
    location: "INDIA",
    role: "FULL-STACK DEVELOPER",
    period: "2020–2022",
    contract: "(Full Time)",
    details: [
      "Designed and implemented a CRM platform to monitor employee activity",
      "Frontend: Built reusable components using React.js, Material UI, TypeScript",
      "Backend: Developed REST APIs using Node.js and SQL; integrated Azure Blob for data storage",
      "Collaborated with a small cross-functional team to ship features in biweekly sprints",
    ],
  },
  {
    company: "E.SOLUTIONS GMBH",
    location: "GERMANY",
    role: "JUNIOR SOFTWARE ENGINEER - Working student",
    period: "2022–2024",
    contract: "(Part Time)",
    details: [
      "Built frontend components using Vue.js, TypeScript, and Naive UI",
      "Led Cypress testing efforts, boosting frontend test coverage by 80%",
    ],
  },
  {
    company: "E.SOLUTIONS GMBH",
    location: "GERMANY",
    role: "JUNIOR SOFTWARE ENGINEER",
    period: "2024–PRESENT",
    contract: "(Full Time)",
    details: [
      "Developed scalable Vue.js components with TypeScript and SCSS in a modular, test-driven codebase",
      "Used Cypress to write end-to-end and regression tests, ensuring stable releases",
      "Practiced code quality standards and engineering principles: SOLID, DRY, separation of concerns",
      "Worked in agile sprints with designers, testers, and backend developers",
    ],
  },
];

const ExperienceComic: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="experience-section">
      <h2 className="experience-section__title">
        Previously on My Life as a Developer...
      </h2>
      <div className="experience-section__container">
        <div className="experience-section__background">
          {experiences.map((exp, index) => (
            <div
              className="experience-section__card"
              key={index}
              onClick={() => setSelected(index)}
            >
              <div className="experience-section__company">{exp.company}</div>
              <div className="experience-section__location">{exp.location}</div>
              <div className="experience-section__role">{exp.role}</div>
              <div className="experience-section__period">{exp.period}</div>
              <div className="experience-section__contract">{exp.contract}</div>
            </div>
          ))}
        </div>

        {selected !== null && (
          <div className="modal" onClick={() => setSelected(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <ul>
                {experiences[selected].details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceComic;
