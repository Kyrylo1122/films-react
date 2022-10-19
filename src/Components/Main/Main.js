import { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./Main.css";

export default function Main() {
  const [isOpenModal, setIsOpenModal] = useState(true);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <section className="main">
      <div className="container">
        <Outlet />
        {isOpenModal && <Modal closeModal={closeModal} />}
      </div>
    </section>
  );
}
