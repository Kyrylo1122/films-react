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
              to={text === "popular" ? "/" : `${text}`}
              end={text === "popular" ? true : false}
              className="nav__link"
              onClick={() => {
                text === HeaderNavNames.SEARCH
                  ? visibleForm()
                  : notVisibleForm();
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

//  <ul className="nav__list">
//    <li key={1} className="nav__item">
//      <NavLink
//        to={"/"}
//        className="nav__link"
//        onClick={() => notVisibleForm()}
//        end
//      >
//        {HeaderNavNames.POPULAR}
//      </NavLink>
//    </li>
//    <li key={1} className="nav__item">
//      <NavLink
//        to={`/${HeaderNavNames.SEARCH}`}
//        className="nav__link"
//        onClick={() => visibleForm()}
//      >
//        {HeaderNavNames.SEARCH}
//      </NavLink>
//    </li>
//    <li key={1} className="nav__item">
//      <NavLink
//        to={`/${HeaderNavNames.LIBRARY}`}
//        className="nav__link"
//        onClick={() => notVisibleForm()}
//      >
//        {HeaderNavNames.LIBRARY}
//      </NavLink>
//    </li>
//  </ul>;
