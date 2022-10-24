import { CirclesWithBar } from "react-loader-spinner";
import "./Loader.css";
export default function Loader() {
  return (
    <div className="loader__container">
      {" "}
      <CirclesWithBar
        height="300"
        width="300"
        color="red"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        outerCircleColor="orange"
        innerCircleColor="orange"
        barColor="orange"
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
}
