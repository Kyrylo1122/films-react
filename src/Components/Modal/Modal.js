import "./Modal.css";
import ModalFilmIfo from "./ModalFilmInfo/ModalFilmIfo";
import { ImCross } from "react-icons/im";
import { useEffect } from "react";

export default function Modal({ closeModal }) {
  useEffect(() => {
    const Escape = (e) => {
      

      if (e.code === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", Escape);

    return () => window.removeEventListener("keydown", Escape);
  });

  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="modal">
        <button
          type="button"
          onClick={() => {
            closeModal();
          }}
          className="modal__close-btn"
        >
          <ImCross color="inherit" size="1.5rem" />
        </button>
        <ModalFilmIfo />
      </div>
    </div>
  );
}
