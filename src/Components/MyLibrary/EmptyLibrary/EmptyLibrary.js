import { Link } from "react-router-dom";

export default function EmptyLibrary() {
  return (
    <div>
      <h2 className="library__title">
        Your library is <span>empty.</span> Let's add something!
      </h2>
      <Link to="/" className="library__link">
        What is popular right now?
      </Link>
    </div>
  );
}
