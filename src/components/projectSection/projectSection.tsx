import React, { useState } from "react";
import "./projectSection.scss";

type Project = {
  name: string;
  subtitle?: string; // e.g., "Personal Project"
  period: string;
  status: "In Progress" | "Completed";
  links?: { label: string; url: string }[];
  details: string[];
};

const projects: Project[] = [
  {
    name: "Distributed API Health & Monitoring System",
    subtitle: "Personal Project",
    period: "2025 – Present",
    status: "In Progress",
    links: [
      // Add when you have it:
      // { label: "GitHub", url: "https://github.com/<you>/<repo>" },
      // { label: "Docs", url: "https://<link>" },
    ],
    details: [
      "Built a backend system to monitor API uptime, latency, and failures",
      "Implemented Redis-based workers with retries and dead-letter queues",
      "Added caching, rate limiting, and basic observability (metrics/logs/tracing)",
    ],
  },
  {
    name: "BlackWire — Remote Touchpad & Keyboard for Ubuntu",
    subtitle: "Personal Project",
    period: "2025",
    status: "Completed",
    links: [
      { label: "GitHub", url: "https://github.com/aadarshjr123/blackwire" },
    ],
    details: [
      "Built a Python-based LAN service enabling remote keyboard and touchpad control",
      "Implemented secure one-time QR pairing and IP whitelisting",
      "Integrated systemd user services and .deb packaging for native installation",
    ],
  },
  {
    name: "Real-Time Chat Backend",
    subtitle: "Personal Project",
    period: "2024 – 2025",
    status: "Completed",
    links: [
      // Add when you have it:
      // { label: "GitHub", url: "https://github.com/<you>/<repo>" },
    ],
    details: [
      "Built a real-time chat backend using WebSockets and Redis Pub/Sub",
      "Implemented JWT-based authentication with refresh tokens",
      "Designed the system to support multiple backend instances",
    ],
  },
];

const ProjectComic: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="project-section">
      <h2 className="project-section__title">
        My Journey So Far as a Developer
      </h2>

      <div className="project-section__container">
        <div className="project-section__background">
          {projects.map((p, index) => (
            <div
              className="project-section__card"
              key={p.name}
              onClick={() => setSelected(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelected(index);
              }}
            >
              <div className="project-section__company">{p.name}</div>

              <div className="project-section__role">
                {p.subtitle ? p.subtitle : "Project"}
              </div>

              <div className="project-section__period">{p.period}</div>

              <div className="project-section__contract">
                {p.status === "In Progress" ? "(In Progress)" : "(Completed)"}
              </div>
            </div>
          ))}
        </div>

        {selected !== null && (
          <div className="modal" onClick={() => setSelected(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div style={{ marginBottom: "0.75rem" }}>
                <h3 style={{ margin: 0 }}>{projects[selected].name}</h3>
                <div style={{ opacity: 0.8, marginTop: "0.25rem" }}>
                  {projects[selected].period} • {projects[selected].status}
                </div>
              </div>

              {projects[selected].links?.length ? (
                <div style={{ marginBottom: "0.75rem" }}>
                  {projects[selected].links!.map((l) => (
                    <a
                      key={l.url}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ marginRight: "0.75rem" }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}

              <ul>
                {projects[selected].details.map((item, idx) => (
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

export default ProjectComic;
