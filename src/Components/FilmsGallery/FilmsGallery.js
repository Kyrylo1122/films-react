import CardTemplate from "../CardTemplate/CardTemplate";
import { useDispatch } from "react-redux";
import { addSelectedId } from "../../Redux/GallerySlice";
import "./FilmsGallery.css";

import "../Backdrop/Backdrop.css";

export default function FilmsGallery({ films, openModal }) {
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="films-gallery__list">
        {films.map((film) => {
          return (
            <li
              className="films-gallery__item"
              key={film.id}
              onClick={() => {
                dispatch(addSelectedId(film.id));
                openModal();
              }}
            >
              <CardTemplate film={film} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
