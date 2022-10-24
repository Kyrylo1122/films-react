import { useState } from "react";
import CardTemplate from "../../Main/CardTemplate/CardTemplate";
import LibraryBtn from "../LibraryBtn/LibraryBtn";

export default function LibraryCard({ film }) {
  const [watched, setWatched] = useState(false);

  const toggleWatchedFilm = () => setWatched((state) => !state);

  return (
    <div>
      <CardTemplate film={film} watched={watched} />
      <LibraryBtn isWatched={watched} onClick={toggleWatchedFilm} film={film} />
    </div>
  );
}
