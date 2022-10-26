import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { addPage } from "../../Redux/GallerySlice";
import "./Pagination.css";

export default function PaginatedItems({ pages }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.gallery.page);

  const handlePageClick = (event) => {
    dispatch(addPage(event.selected + 1));
  };

  return (
    <div className="pagination__container">
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={0}
        selectedPageRel={null}
        forcePage={page - 1}
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
