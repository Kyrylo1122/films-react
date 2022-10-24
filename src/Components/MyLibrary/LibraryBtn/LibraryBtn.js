import { useDispatch } from "react-redux";
import { deleteFilmAtMyLibrary } from "../../../Redux/GallerySlice";
import "./LibraryBtn.css";
export default function LibraryBtn({ isWatched, onClick, film }) {
  const dispatch = useDispatch();
  return (
    <ul className="library-btn__list">
      <li className="library-btn__item">
        <button
          type="button"
          className="btn btn--active  library-btn__btn"
          onClick={() => onClick()}
        >
          {isWatched ? "Reset" : "Watched"}
        </button>
      </li>
      <li className="library-btn__item">
        <button
          type="button"
          className="btn btn--regular library-btn__btn"
          onClick={() => {
            dispatch(deleteFilmAtMyLibrary(film.id));
          }}
        >
          Delete
        </button>
      </li>
    </ul>
  );
}
