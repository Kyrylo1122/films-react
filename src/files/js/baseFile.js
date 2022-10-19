import { renderSearchedFilm } from './renderSearchedFilm';
import { renderPopularFilms } from './renderSearchedFilm';
import { elementIsVisible, elementIsHidden } from './remove&Add-hidden';

const pagFirstBtn = document.querySelector('.pagination__btn--firstPage');
const form = document.querySelector('.form');
const headerInput = document.querySelector('.form__input');
const pageContainer = document.querySelector('.page');
const headerErrorText = document.querySelector('.header__error');

let page = 1;
let searchedFilm = '';
renderPopularFilms(1);

pageContainer.addEventListener('click', fetchNewPage);
form.addEventListener('submit', searchFilmFunc);

function searchFilmFunc(e) {
  e.preventDefault();
  page = 1;
  const regExpr = /[\W]/;
  searchedFilm = headerInput.value;

  if (searchedFilm === '' || regExpr.test(searchedFilm)) {
    elementIsVisible(headerErrorText);
    form.reset();
    return;
  }
  elementIsHidden(headerErrorText);
  renderSearchedFilm(searchedFilm, page);

  form.reset();
}

function fetchNewPage(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  page = Number(e.target.id);
  renderSearchedFilm(searchedFilm, page);
  scroll(0, 0);
}

pagFirstBtn.addEventListener('click', () => {
  renderSearchedFilm(searchedFilm, 1);
  scroll(0, 0);
});
