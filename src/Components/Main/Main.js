import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Main.css";
import FilmsGallery from "./FilmsGallery/FilmsGallery";
import { useSelector } from "react-redux";
import { PopularFilmsTitle, SearchedFilmsTitle } from "./Titles/Titles";

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
        {isOpenModal && <Modal closeModal={closeModal} />}
      </div>
    </section>
  );
}
