import { useState } from "react";
import LibraryBtn from "../LibraryBtn/LibraryBtn";
import LibraryCardTemplate from "../LibraryCardTemplate/LibraryCardTemplate";

export default function LibraryCard({ film }) {
  const [watched, setWatched] = useState(false);

  const toggleWatchedFilm = () => setWatched((state) => !state);

  return (
    <div>
      <LibraryCardTemplate film={film} watched={watched} />
      <LibraryBtn isWatched={watched} onClick={toggleWatchedFilm} film={film} />
    </div>
  );
}
