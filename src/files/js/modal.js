import { fullFilmInformation } from './fetchAPI';
import { modalTemplate } from './modal-template';

const containerEl = document.querySelector('.main-gallery__list');
const backdrop = document.querySelector('.backdrop');
const modalList = document.querySelector('.modal__list');

const closeModal = document.querySelector('.closeModal');

closeModal.addEventListener('click', () => {
  backdrop.classList.add('isHidden');
});

containerEl.addEventListener('click', fullFilmDescription);

function fullFilmDescription(e) {
  const idMovie = e.target.closest('.card').id;
  fullFilmInformation(idMovie).then(
    ({
      poster_path,
      title,
      vote_average,
      vote_count,
      popularity,
      original_title,
      genres,
      overview,
    }) => {
      const genre = genres.map(genresList => genresList.name).join(', ');
      const allLiEl = modalTemplate(
        poster_path,
        title,
        vote_average,
        vote_count,
        popularity,
        original_title,
        genre,
        overview
      );
      modalList.innerHTML = allLiEl;
    }
  );
  backdrop.classList.remove('isHidden');
}
// res => {
//   const allLi = res.map(
//     ({ poster, title, vote, popularity, original_title, genres, overview }) => {
//       console.log(genres);
//     }
//   );
// };
