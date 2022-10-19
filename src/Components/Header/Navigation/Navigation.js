import { Link, NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";
import "./Navigation.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/">
        <Logo />
      </Link>

      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/library" className="nav__link">
            My library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
