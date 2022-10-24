import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addQuery } from "../../../Redux/GallerySlice";

export default function EmptyLibrary() {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="library__title">
        Your library is <span>empty.</span> Let's add something!
      </h2>
      <Link
        to="/main"
        onClick={() => {
          dispatch(addQuery(""));
        }}
        className="library__link"
      >
        What is popular right now?
      </Link>
    </div>
  );
}
