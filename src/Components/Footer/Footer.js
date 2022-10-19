export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__list list">
          <li className="footer__item">© 2020</li>
          <li className="footer__item">All Rights Reserved</li>
          <li className="footer__item">
            Developed with
            <svg width="14" height="12" className="footer__svg">
              <use href="./symbol-defs.svg#icon-heart"></use>
            </svg>
            <span className="footer__span">by Kyrylo Bereznov</span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
