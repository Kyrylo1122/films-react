import "./Modal.css";
import ModalFilmIfo from "./ModalFilmInfo/ModalFilmIfo";
import { ImCross } from "react-icons/im";

export default function Modal({ closeModal }) {
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
