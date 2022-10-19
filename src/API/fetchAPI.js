import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/";
const API_KEY = "9b627b5c13f01f3f3d8206e8b910ae85";

export async function fetchFilms(page = 1) {
  try {
    const { data } = await axios.get(
      `/3/trending/movie/week?api_key=${API_KEY}&page=${page}`
    );

    return data;
  } catch (error) {
    throw new Error("Something gone wrong", error);
  }
}

export async function searchedQuery(query, page = 1) {
  try {
    const { data } = await axios.get(
      `/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`
    );
    return data;
  } catch (error) {
    throw new Error("Something gone wrong", error);
  }
}

export async function fullFilmInformation(movie_id) {
  try {
    const { data } = await axios.get(
      `/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`
    );
    return data;
  } catch (error) {
    throw new Error("Something gone wrong", error);
  }
}
