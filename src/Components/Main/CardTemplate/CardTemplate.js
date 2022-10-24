// import { getGenres } from "../../../Genres/GetGenres";
import NoFoundPoster from "../../../images/poster_not_found.png";
import Watched from "../../MyLibrary/Watched/Watched";
import "./CardTemplate.css";
export default function CardTemplate({ film, genres = null, watched }) {
  const { poster_path, title, release_date } = film;
  const releaseDate = release_date?.slice(0, 4);
  // let allGenres;
  // if (!genres) {
  //   allGenres = genres(genre_ids);
  // } else {
  //   allGenres = getGenres(genre_ids);
  // }

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
          {/* <li className="meta__item meta__item--genres"> {allGenres}</li> */}
          <li className="meta__item"> {releaseDate}</li>
        </ul>
      </div>
    </>
  );
}
