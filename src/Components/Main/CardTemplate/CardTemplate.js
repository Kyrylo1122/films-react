import { getGenres } from "../../../Genres/GetGenres";
import "./CardTemplate.css";
export default function CardTemplate({ film }) {
  const { poster_path, title, genre_ids, release_date } = film;
  const releaseDate = release_date.slice(0, 4);
  const allGenres = getGenres(genre_ids);
  return (
    <>
      <div className="card__container">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="card__img"
          width="100"
        />
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
