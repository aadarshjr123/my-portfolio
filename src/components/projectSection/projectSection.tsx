import { useMemo, useState } from "react";

import CardGrid from "../ui/CardGrid/CardGrid";
import Modal from "../ui/Modal/Modal";
import { PROJECTS } from "../../data/projects";

import "./projectSection.scss";

const ProjectComic = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(
    () => PROJECTS.find((x) => x.id === selectedId) ?? null,
    [selectedId],
  );

  return (
    <section className="project-section" id="projects">
      <h2 className="project-section__title">
        My Journey So Far as a Developer
      </h2>

      <div className="project-section__container">
        <CardGrid items={PROJECTS} onSelect={setSelectedId} />
      </div>

      <Modal
        open={Boolean(selected)}
        title={selected?.title}
        onClose={() => setSelectedId(null)}
      >
        {selected ? (
          <>
            <div className="project-section__meta">
              {selected.meta ? <span>{selected.meta}</span> : null}
              {selected.badge ? <span> • {selected.badge}</span> : null}
            </div>

            {selected.links?.length ? (
              <div className="project-section__links">
                {selected.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}

            <ul className="project-section__list">
              {selected.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </>
        ) : null}
      </Modal>
    </section>
  );
};

export default ProjectComic;
