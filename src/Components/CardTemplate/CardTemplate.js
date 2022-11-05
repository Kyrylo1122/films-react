import { getGenres } from "../../Genres/GetGenres";
import NoFoundPoster from "../../images/not_found.png";
import Watched from "../MyLibrary/Watched/Watched";

import "./CardTemplate.css";
export default function CardTemplate({ film, watched }) {
  const { poster_path, title, release_date, genre_ids } = film;
  const releaseDate = release_date?.slice(0, 4);
  let allGenres = getGenres(genre_ids);

  return (
    <>
      <div className="card__container">
        <div className="card__img--container">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : NoFoundPoster
            }
            loading="lazy"
            alt={title}
            className="card__img"
            width="100"
          />
          {watched && <Watched />}
        </div>
      </div>
      <div className="card__meta meta">
        <p className="meta__title"> {title}</p>
        <ul className="meta__list list">
          <li className="meta__item meta__item--genres"> {allGenres}</li>
          <li className="meta__item"> {releaseDate}</li>
        </ul>
      </div>
    </>
  );
}
