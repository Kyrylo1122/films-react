import { useState, lazy, Suspense } from "react";
import "./Main.css";
import FilmsGallery from "./FilmsGallery/FilmsGallery";
import { useSelector } from "react-redux";
import { PopularFilmsTitle, SearchedFilmsTitle } from "./Titles/Titles";
import Loader from "../Loader/Loader";

const Modal = lazy(() => import("../Modal/Modal"));

export default function Main() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const query = useSelector((state) => state.gallery.query);
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <section className="main">
      <div className="container">
        {query === "" ? (
          <PopularFilmsTitle />
        ) : (
          <SearchedFilmsTitle query={query} />
        )}
        <FilmsGallery openModal={openModal} />
        {isOpenModal && (
          <Suspense fallback={<Loader />}>
            <Modal closeModal={closeModal} />
          </Suspense>
        )}
      </div>
    </section>
  );
}
