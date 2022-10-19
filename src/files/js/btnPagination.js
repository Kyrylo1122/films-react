import { elementIsVisible, elementIsHidden } from './remove&Add-hidden';
const pagFirstBtn = document.querySelector('.pagination__btn--firstPage');

export function renderPaginationBtn(totalPage, page, container) {
  let allBtn = '';
  let liElements = null;

  let beforePage = page - 2;
  let afterPage = null;

  if (page <= 3) {
    afterPage = page + 3;
    elementIsHidden(pagFirstBtn);
  } else {
    afterPage = page + 2;
    elementIsVisible(pagFirstBtn);
  }

  if (afterPage >= totalPage) {
    afterPage = totalPage;
  }
  for (let i = beforePage; i <= afterPage; i += 1) {
    if (i <= 0) {
      continue;
    }
    if (i === page) {
      liElements = `<li class='page__item'><button class='page__btn page__btn--numb page__btn--active' id='${i}'>${i}</button></li>`;
    } else
      liElements = `<li class='page__item'><button class='page__btn page__btn--numb' id='${i}'>${i}</button></li>`;

    allBtn += liElements;
  }

  container.innerHTML = allBtn;
}
