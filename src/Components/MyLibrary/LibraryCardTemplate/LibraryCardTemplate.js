import NoFoundPoster from "../../../images/not_found.png";
import getModalGenres from "../../GetModalGenres/GetModalGenres";
import Watched from "../Watched/Watched";

export default function LibraryCardTemplate({ film, watched }) {
  const { poster_path, title, release_date, genres } = film;

  const releaseDate = release_date?.slice(0, 4);

  const allGenres = getModalGenres(genres);
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
          <li className="meta__item meta__item--genres">{allGenres}</li>
          <li className="meta__item"> {releaseDate}</li>
        </ul>
      </div>
    </>
  );
}
