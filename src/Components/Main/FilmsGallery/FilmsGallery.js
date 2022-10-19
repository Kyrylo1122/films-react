import { useState, useEffect } from "react";
import { fetchFilms } from "../../../API/fetchAPI";
import CardTemplate from "../CardTemplate/CardTemplate";

import "./FilmsGallery.css";

export default function FilmsGallery() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchFilms(page).then(({ results }) => setFilms(results));
  }, [page]);

  return (
    <ul className="films-gallery__list">
      {films.map((film) => {
        return (
          <li className="films-gallery__item" key={film.id}>
            <CardTemplate film={film} />
          </li>
        );
      })}
    </ul>
  );
}
