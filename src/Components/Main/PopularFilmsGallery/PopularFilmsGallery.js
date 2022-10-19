import { useState, useEffect } from "react";
import { fetchFilms } from "../../../API/fetchAPI";
import CardTemplate from "../CardTemplate/CardTemplate";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmGallery, addSelectedId } from "../../../Redux/GallerySlice";
import PaginatedItems from "../../Pagination/Pagination";
import "./PopularFilmsGallery.css";

export default function PopularFilmsGallery() {
  const [pages, setPages] = useState(0);

  const films = useSelector((state) => state.gallery.filmGallery);
  const activePage = useSelector((state) => state.gallery.page);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchFilms(activePage).then((data) => {
      dispatch(fetchFilmGallery(data.results));
      setPages(data.total_pages);
    });
  }, [activePage, dispatch]);
  return (
    <div>
      <ul className="films-gallery__list">
        {films.map((film) => {
          return (
            <li
              className="films-gallery__item"
              key={film.id}
              onClick={() => {
                console.log(film.id);
                dispatch(addSelectedId(film.id));
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
