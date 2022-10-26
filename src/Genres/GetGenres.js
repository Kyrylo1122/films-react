import { genres } from "./listOFGenres.mjs";

export function getGenreName(id) {
  let searchedId;
  if (id.id) {
    searchedId = id.id;
  } else {
    searchedId = id;
  }
  const genre = genres.find((res) => res.id === searchedId);
  return genre.name;
}
export function getGenres(allIdGenres) {
  return allIdGenres
    .map((genre) => {
      return getGenreName(genre);
    })
    .splice(0, 2)
    .join(", ");
}
