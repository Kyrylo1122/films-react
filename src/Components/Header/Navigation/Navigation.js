// import { useDispatch } from "react-redux";
// import { addPage, addQuery } from "../../../Redux/GallerySlice";
import Logo from "../../Logo/Logo";
import "./Navigation.css";

import { HeaderNavNames } from "../HeaderNavNames";
import { NavLink } from "react-router-dom";
const NavigationContent = [
  { id: 1, text: HeaderNavNames.POPULAR },
  { id: 2, text: HeaderNavNames.SEARCH },
  { id: 3, text: HeaderNavNames.LIBRARY },
];

export default function Navigation({ visibleForm, notVisibleForm }) {
  return (
    <nav className="nav">
      <Logo />
      <ul className="nav__list">
        {NavigationContent.map(({ id, text }) => (
          <li key={id} className="nav__item">
            <NavLink
              to={text === HeaderNavNames.POPULAR ? "/" : `${text}`}
              end={text === HeaderNavNames.POPULAR ? true : false}
              className="nav__link"
              onClick={() => {
                if (text === HeaderNavNames.SEARCH) {
                  visibleForm();
                  return;
                }
                notVisibleForm();
              }}
            >
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
