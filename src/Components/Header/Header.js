import Navigation from "./Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";
import "./Header.css";
import { useState } from "react";
export default function Header() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const visibleForm = () => setIsFormVisible(true);
  const notVisibleForm = () => setIsFormVisible(false);

  return (
    <header className="header">
      <div className="container header__container">
        <Navigation visibleForm={visibleForm} notVisibleForm={notVisibleForm} />
        {isFormVisible && <SearchForm />}
      </div>
    </header>
  );
}
