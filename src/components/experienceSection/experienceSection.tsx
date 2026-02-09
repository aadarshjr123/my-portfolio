import { useMemo, useState } from "react";

import CardGrid from "../ui/CardGrid/CardGrid";
import Modal from "../ui/Modal/Modal";
import { EXPERIENCES } from "../../data/experience";

import "./experienceSection.scss";

const ExperienceComic = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(
    () => EXPERIENCES.find((x) => x.id === selectedId) ?? null,
    [selectedId],
  );

  return (
    <section className="experience-section">
      <h2 className="experience-section__title">
        Previously on My Life as a Developer...
      </h2>

      <div className="experience-section__container">
        <CardGrid items={EXPERIENCES} onSelect={setSelectedId} />
      </div>

      <Modal
        open={Boolean(selected)}
        title={selected?.title}
        onClose={() => setSelectedId(null)}
      >
        {selected ? (
          <>
            {selected.subtitle ? (
              <div className="experience-section__modal-sub">
                {selected.subtitle}
              </div>
            ) : null}

            {selected.meta ? (
              <div className="experience-section__modal-meta">
                {selected.meta}
              </div>
            ) : null}

            <ul className="experience-section__list">
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

export default ExperienceComic;
