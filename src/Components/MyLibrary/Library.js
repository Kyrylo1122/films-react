import { useSelector } from "react-redux";
import "../FilmsGallery/FilmsGallery.css";
import EmptyLibrary from "./EmptyLibrary/EmptyLibrary";
import "./Library.css";
import LibraryWithFilms from "./LibraryWithFilms/LibraryWithFilms";

export default function Library() {
  const films = useSelector((state) => state.gallery.myLibrary);
  return (
    <>
      {films.length === 0 ? (
        <EmptyLibrary />
      ) : (
        <LibraryWithFilms films={films} />
      )}
    </>
  );
}
