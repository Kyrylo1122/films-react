export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <ul class="footer__list list">
          <li class="footer__item">© 2020</li>
          <li class="footer__item">All Rights Reserved</li>
          <li class="footer__item">
            Developed with
            <svg width="14" height="12" class="footer__svg">
              <use href="./symbol-defs.svg#icon-heart"></use>
            </svg>
            <span class="footer__span">by Kyrylo Bereznov</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
