import ReactPaginate from "react-paginate";
import { useDispatch } from "react-redux";
import { addPage } from "../../Redux/GallerySlice";
import "./Pagination.css";
export default function PaginatedItems({ pages }) {
  const dispatch = useDispatch();

  const handlePageClick = (event) => {
    dispatch(addPage(event.selected + 1));
  };

  return (
    <div className="pagination__container">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pages}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="pagination__num"
        previousLinkClassName="pagination__num"
        nextLinkClassName="pagination__num"
        activeLinkClassName="pagination__active"
      />
    </div>
  );
}
