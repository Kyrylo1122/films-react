import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fullFilmInformation } from "../../../API/fetchAPI";
export default function ModalFilmIfo() {
  const [film, setFilm] = useState({});
  const { selectedId } = useSelector((state) => state.gallery);
  useEffect(() => {
    fullFilmInformation(selectedId).then((data) => setFilm(data));
  }, [selectedId]);
  const {
    poster,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genre,
    overview,
  } = film;
  return (
    <ul>
      <li className="modal__item modal__item--top">
        <div className="modal-card--top">
          <img
            src="https://image.tmdb.org/t/p/w500/{poster}"
            alt="poster"
            className="film__img"
          />
        </div>
      </li>
      <li className="modal__item ">
        <div className="modal-card--bottom">
          <h2 className="film__title">{title}</h2>
          <ul className="film__list list">
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
              <span className="film__span">{genre} </span>
            </li>
          </ul>
          <h3 className="film__about">About</h3>
          <p className="film__description">{overview}</p>
          <ul className="film__btn-list list">
            <li className="film__btn-item">
              <button type="button" className="btn btn--active">
                ADD TO WATCHED
              </button>
            </li>
            <li className="film__btn-item">
              <button type="button" className="btn btn--regular">
                ADD TO QUEUE
              </button>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}
