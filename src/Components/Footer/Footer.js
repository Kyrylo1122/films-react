import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <hr />
      <div className="container">
        <p>All rights are reserved © 2022</p>

        <p className="footer__span"> Developed by Kyrylo Bereznov</p>
        <ul className="social__list">
          <li className="social__item">
            <a href="https://github.com/Kyrylo1122" className="social__link">
              <BsGithub color="inherit" size="2rem" />
            </a>
          </li>
          <li className="social__item">
            <a
              href="https://www.linkedin.com/in/kyrylo-bereznov-40b39818a/"
              className="social__link"
            >
              <BsLinkedin color="inherit" size="2rem" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
