import { useDispatch, useSelector } from "react-redux";
import "../Main/Main.css";

import { useState, useEffect, lazy, Suspense } from "react";
import Loader from "../Loader/Loader";
import { searchedQuery } from "../../API/fetchAPI";
import FilmsGallery from "../FilmsGallery/FilmsGallery";
import Pagination from "../Pagination/Pagination";

const Modal = lazy(() => import("../Modal/Modal"));

export default function Search() {
  const query = useSelector((state) => state.gallery.query);
  const [films, setFilms] = useState([]);
  const dispatch = useDispatch();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const onPageClick = (data) => setActivePage(data);
  useEffect(() => {
    if (!query.length) {
      return;
    }
    try {
      setLoading(true);

      searchedQuery(query, activePage)
        .then((data) => {
          setFilms(data.results);
          setPages(data.total_pages);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, [activePage, dispatch, query]);
  if (loading) {
    return (
      <div className="backdrop">
        <Loader />
      </div>
    );
  }
  return (
    <>
      {query ? (
        <h1 className="title">
          You are searching: <span>{query}</span>
        </h1>
      ) : (
        <p className="text">Let's search something...</p>
      )}

      <FilmsGallery
        openModal={openModal}
        films={films}
        pages={pages}
        onPageClick={onPageClick}
        activePage={activePage}
      />
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
