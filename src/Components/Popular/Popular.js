import { Suspense, useEffect, useState, lazy } from "react";
import { fetchFilms } from "../../API/fetchAPI";
import Loader from "../Loader/Loader";
import Pagination from "../Pagination/Pagination";
import FilmsGallery from "../FilmsGallery/FilmsGallery";

const Modal = lazy(() => import("../Modal/Modal"));

export default function Popular() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState(0);
  const [films, setFilms] = useState([]);

  const onPageClick = (data) => {
    setActivePage(data);
  };
  useEffect(() => {
    try {
      setLoading(true);
      fetchFilms(activePage)
        .then((data) => {
          setFilms(data.results);
          setPages(data.total_pages);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
    return;
  }, [activePage]);
  if (loading) {
    return (
      <div className="backdrop">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <h1 className="title">What is popular right now:</h1>
      <FilmsGallery openModal={openModal} films={films} />
      <Pagination
        pages={pages}
        onPageClick={onPageClick}
        activePage={activePage}
      />
      {isOpenModal && (
        <Suspense fallback={<Loader />}>
          <Modal closeModal={closeModal} />
        </Suspense>
      )}
    </>
  );
}
