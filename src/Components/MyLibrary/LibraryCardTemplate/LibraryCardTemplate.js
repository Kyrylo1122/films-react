import { useState } from "react";

import CardTemplate from "../../CardTemplate/CardTemplate";
import LibraryBtn from "../LibraryBtn/LibraryBtn";

export default function LibraryCardTemplate({ film }) {
  const toggleWatchedFilm = () => setWatched((state) => !state);
  const [watched, setWatched] = useState(false);

  return (
    <>
      <CardTemplate film={film} watched={watched} />
      <LibraryBtn isWatched={watched} onClick={toggleWatchedFilm} film={film} />
    </>
  );
}
