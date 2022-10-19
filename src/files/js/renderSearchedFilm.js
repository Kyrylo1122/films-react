import { filterOfGenres } from './genresSettings';
import cardTemplate from './cardTemplate';
import { searchedQuery } from './fetchAPI';
import { renderPaginationBtn } from './btnPagination';
import { fetchFilms } from './fetchAPI';
import { elementIsVisible, elementIsHidden } from './remove&Add-hidden';

const headerErrorText = document.querySelector('.header__error');
const containerEl = document.querySelector('.main-gallery__list');
const pageContainer = document.querySelector('.page');

export function renderSearchedFilm(searchedFilm, pageNumb) {
  searchedQuery(searchedFilm, pageNumb).then(data => {
    console.log('data', data.total_pages);
    renderPaginationBtn(data.total_pages, pageNumb, pageContainer);
    const results = data.results;
    if (results.length === 0) {
      elementIsVisible(headerErrorText);
      return;
    }
    elementIsHidden(headerErrorText);
    console.log(results);
    const render = results
      .map(({ id, poster_path, title, release_date, genre_ids }) => {
        if (poster_path == null || release_date == null) {
          return;
        }

        const releaseDate = release_date.slice(0, 4);
        const allGenres = filterOfGenres(genre_ids);
        return cardTemplate(id, poster_path, title, allGenres, releaseDate);
      })
      .join('');
    containerEl.innerHTML = render;
  });
}

export function renderPopularFilms(page) {
  fetchFilms(page).then(({ results }) => {
    const render = results
      .map(
        ({ id, poster_path, title, release_date, genre_ids, vote_average }) => {
          const releaseDate = release_date.slice(0, 4);
          const allGenres = filterOfGenres(genre_ids);
          return cardTemplate(
            id,
            poster_path,
            title,
            allGenres,
            releaseDate,
            vote_average
          );
        }
      )
      .join('');
    containerEl.innerHTML = render;
  });
}
