import { genres } from "./listOFGenres.mjs";

export function getGenreName(id) {
  const genre = genres.find((res) => res.id === id);
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
