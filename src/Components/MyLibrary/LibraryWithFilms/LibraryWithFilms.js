import LibraryCardTemplate from "../LibraryCardTemplate/LibraryCardTemplate";
export default function LibraryWithFilms({ films }) {
  return (
    <>
      <h1 className="library__title">My Library:</h1>
      <ul className="films-gallery__list">
        {films.map((film) => {
          return (
            <li key={film.id} className="films-gallery__item library__item">
              <LibraryCardTemplate film={film} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
