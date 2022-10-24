import { useState, useEffect } from "react";
import { fetchFilms, searchedQuery } from "../../../API/fetchAPI";
import CardTemplate from "../CardTemplate/CardTemplate";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmGallery, addSelectedId } from "../../../Redux/GallerySlice";
import PaginatedItems from "../../Pagination/Pagination";
import "./FilmsGallery.css";
import Loader from "../../Loader/Loader";

import "../../Backdrop/Backdrop.css";

export default function PopularFilmsGallery({ openModal }) {
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const films = useSelector((state) => state.gallery.filmGallery);
  const activePage = useSelector((state) => state.gallery.page);
  const query = useSelector((state) => state.gallery.query);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    if (query !== "") {
      try {
        searchedQuery(query, activePage)
          .then((data) => {
            dispatch(fetchFilmGallery(data.results));
            setPages(data.total_pages);
          })
          .finally(() => setLoading(false));
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        fetchFilms(activePage)
          .then((data) => {
            dispatch(fetchFilmGallery(data.results));
            setPages(data.total_pages);
          })
          .finally(() => setLoading(false));
      } catch (error) {
        console.log(error);
      }
    }
  }, [activePage, dispatch, query]);
  if (loading) {
    return (
      <div className="backdrop">
        <Loader />
      </div>
    );
  }
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
      <PaginatedItems items={films} pages={pages} />
    </div>
  );
}
