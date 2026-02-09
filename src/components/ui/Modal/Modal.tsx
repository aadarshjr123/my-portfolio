import { useEffect } from "react";
import "./modal.scss";

type ModalProps = {
  open: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ open, title, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="ui-modal"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="ui-modal__backdrop" onClick={onClose} />
      <div className="ui-modal__panel">
        <div className="ui-modal__header">
          <h3 className="ui-modal__title">{title}</h3>
          <button
            className="ui-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="ui-modal__body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
