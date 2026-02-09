import type { CardItem } from "../../../types/timeline";
import "./cardGrid.scss";

type CardGridProps = {
  items: CardItem[];
  onSelect: (id: string) => void;
};

const CardGrid = ({ items, onSelect }: CardGridProps) => {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <button
          key={item.id}
          className="card-grid__card"
          onClick={() => onSelect(item.id)}
          type="button"
        >
          <div className="card-grid__title">{item.title}</div>
          {item.subtitle ? (
            <div className="card-grid__subtitle">{item.subtitle}</div>
          ) : null}
          {item.meta ? (
            <div className="card-grid__meta">{item.meta}</div>
          ) : null}
          {item.badge ? (
            <div className="card-grid__badge">({item.badge})</div>
          ) : null}
        </button>
      ))}
    </div>
  );
};

export default CardGrid;
