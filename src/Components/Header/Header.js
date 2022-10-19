import Navigation from "./Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";
import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <Navigation />
        <SearchForm />
      </div>
    </header>
  );
}
