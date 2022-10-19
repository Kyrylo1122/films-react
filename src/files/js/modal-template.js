export function modalTemplate(
  poster,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genre,
  overview
) {
  return ` <li class="modal__item modal__item--top">
        <div class="modal-card--top">
          
            <img
              src="https://image.tmdb.org/t/p/w500/${poster}"
              alt="poster"
              class="film__img"
          />
        </div>
      </li>
      <li class="modal__item ">
        <div class="modal-card--bottom">
          <h2 class="film__title">${title}</h2>
          <ul class="film__list list">
            <li class="film__items">
              <p class="film__items-text">Vote / Votes:</p>
              <div><span class="film__span--vote">${vote_average}</span>
              <span class="film__span"> / ${vote_count}</span></div>
              
            </li>
            <li class="film__items">
              <p class="film__items-text">Popularity:</p>
              <span class="film__span">${popularity}</span>
            </li>
            <li class="film__items">
              <p class="film__items-text">Original Title:</p>
              <span class="film__span">${original_title}</span>
            </li>
            <li class="film__items">
              <p class="film__items-text">Genre:</p>
              <span class="film__span">${genre} </span>
            </li>
          </ul>
          <h3 class="film__about">About</h3>
          <p class="film__description">
      ${overview}
          </p>
          <ul class="film__btn-list list">
            <li class="film__btn-item">
              <button type="button" class="btn btn--active">
                ADD TO WATCHED
              </button>
            </li>
            <li class="film__btn-item">
              <button type="button" class="btn btn--regular">
                ADD TO QUEUE
              </button>
            </li>
          </ul>
        </div>
      </li>`;
}
