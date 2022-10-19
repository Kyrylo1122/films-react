import { GiFilmStrip } from "react-icons/gi";
import "./Logo.css";
export default function Logo() {
  return (
    <div className="logo">
      <GiFilmStrip />
      <span className="logo__text"> Filmoteka</span>
    </div>
  );
}
