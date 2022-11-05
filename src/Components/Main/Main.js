import "./Main.css";

import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <section className="main">
      <div className="container">
        <Outlet />
      </div>
    </section>
  );
}
