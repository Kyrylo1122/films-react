import "./Modal.css";
import ModalFilmIfo from "./ModalFilmInfo/ModalFilmIfo";

export default function Modal({ closeModal }) {
  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <div className="modal">
        <ModalFilmIfo />
      </div>
    </div>
  );
}
