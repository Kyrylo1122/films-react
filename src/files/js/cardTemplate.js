export default function cardTemplate(id, poster, title, genres, dateRelease) {
  return `<li class="main-gallery__item card" id=${id}>
 
    <div class="card__container">
<img
          src="https://image.tmdb.org/t/p/w500/${poster}"
          alt="poster"
          class="card__img"
          
        />

    </div>
    <div class="card__meta meta">
      <p class="meta__title"> ${title}</p>
      <ul class="meta__list list">
        <li class="meta__item meta__item--genres"> ${genres}</li>
        <li class="meta__item"> ${dateRelease}</li>
      
      </ul>
    </div>
    
  </li>`;
}
