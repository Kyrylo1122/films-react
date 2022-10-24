import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fullFilmInformation } from "../../../API/fetchAPI";
import { addFilmToMyLibrary } from "../../../Redux/GallerySlice";
import getModalGenres from "../../GetModalGenres/GetModalGenres";
import Loader from "../../Loader/Loader";

import "./ModalFilmInfo.css";

export default function ModalFilmIfo() {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectedId = useSelector((state) => state.gallery.selectedId);
  const dispatch = useDispatch();

  const addFilm = () => {
    dispatch(addFilmToMyLibrary(film));
  };

  useEffect(() => {
    setLoading(true);
    try {
      fullFilmInformation(selectedId)
        .then((data) => setFilm(data))
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, [selectedId]);

  if (loading) {
    return <Loader />;
  }
  if (!film) {
    return;
  }
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = film;
  const allGenres = getModalGenres(genres);

  return (
    <ul className="modal__list">
      <li className="modal__item modal__item--top">
        <div className="modal-card--top">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={original_title}
            className="film__img"
          />
        </div>
      </li>
      <li className="modal__item ">
        <div className="modal-card--bottom">
          <h2 className="film__title">{title}</h2>
          <ul className="film__list ">
            <li className="film__items">
              <p className="film__items-text">Vote / Votes:</p>
              <div>
                <span className="film__span--vote">{vote_average}</span>
                <span className="film__span"> / {vote_count}</span>
              </div>
            </li>
            <li className="film__items">
              <p className="film__items-text">Popularity:</p>
              <span className="film__span">{popularity}</span>
            </li>
            <li className="film__items">
              <p className="film__items-text">Original Title:</p>
              <span className="film__span">{original_title}</span>
            </li>
            <li className="film__items">
              <p className="film__items-text">Genre:</p>
              <span className="film__span">{allGenres} </span>
            </li>
          </ul>
          <h3 className="film__about">About</h3>
          <p className="film__description">{overview}</p>

          <button type="button" className="btn btn--active" onClick={addFilm}>
            Add to My Library
          </button>
        </div>
      </li>
    </ul>
  );
}
