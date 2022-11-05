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

// export default function PopularFilmsGallery({ openModal }) {
//   const [pages, setPages] = useState(0);
//   const [loading, setLoading] = useState(false);

//   const films = useSelector((state) => state.gallery.filmGallery);
//   const activePage = useSelector((state) => state.gallery.page);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     setLoading(true);

//     if (query !== "") {
//       try {
//         searchedQuery(query, activePage)
//           .then((data) => {
//             dispatch(fetchFilmGallery(data.results));
//             setPages(data.total_pages);
//           })
//           .finally(() => setLoading(false));
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       try {
//         fetchFilms(activePage)
//           .then((data) => {
//             dispatch(fetchFilmGallery(data.results));
//             setPages(data.total_pages);
//           })
//           .finally(() => setLoading(false));
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   }, [activePage, dispatch, query]);
//   if (loading) {
//     return (
//       <div className="backdrop">
//         <Loader />
//       </div>
//     );
//   }
//   if (films.length === 0) {
//     return <h1>Oops, there are no movies with that name :(</h1>;
//   }
//   return (
//     <div>
//       <ul className="films-gallery__list">
//         {films.map((film) => {
//           return (
//             <li
//               className="films-gallery__item"
//               key={film.id}
//               onClick={() => {
//                 dispatch(addSelectedId(film.id));
//                 openModal();
//               }}
//             >
//               <CardTemplate film={film} />
//             </li>
//           );
//         })}
//       </ul>
//       <PaginatedItems items={films} pages={pages} />
//     </div>
//   );
// }
