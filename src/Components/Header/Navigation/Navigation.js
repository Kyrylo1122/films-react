import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { addPage, addQuery } from "../../../Redux/GallerySlice";
import Logo from "../../Logo/Logo";
import "./Navigation.css";

export default function Navigation() {
  const dispatch = useDispatch();
  return (
    <nav className="nav">
      <Link
        to="/"
        onClick={() => {
          dispatch(addPage(1));
          dispatch(addQuery(""));
        }}
      >
        <Logo />
      </Link>

      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/main" className="nav__link">
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
