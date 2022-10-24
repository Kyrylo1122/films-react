import { useSelector } from "react-redux";
import "../Main/FilmsGallery/./FilmsGallery.css";
import EmptyLibrary from "./EmptyLibrary/EmptyLibrary";
import "./Library.css";
import LibraryWithFilms from "./LibraryWithFilms/LibraryWithFilms";

export default function Library() {
  const myLibraryArray = useSelector((state) => state.gallery.myLibrary);
  return (
    <section className="main">
      <div className="container">
        {myLibraryArray.length === 0 ? (
          <EmptyLibrary />
        ) : (
          <LibraryWithFilms films={myLibraryArray} />
        )}
      </div>
    </section>
  );
}
