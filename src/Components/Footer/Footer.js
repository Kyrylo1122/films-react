import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__list list">
          <li className="footer__item">© 2022</li>
          <li className="footer__item">All Rights Reserved</li>
          <li className="footer__item">
            Developed
            <span className="footer__span"> by Kyrylo Bereznov</span>
            <ul className="social__list">
              <li className="social__item">
                <a href="https://github.com/Kyrylo1122">
                  <BsGithub color="inherit" size="2rem" />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.linkedin.com/in/kyrylo-bereznov-40b39818a/">
                  {" "}
                  <BsLinkedin color="inherit" size="2rem" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
}
