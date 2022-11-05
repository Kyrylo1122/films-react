import ReactPaginate from "react-paginate";

import "./Pagination.css";

export default function Pagination({ pages, onPageClick, activePage }) {
  return (
    <div className="pagination__container">
      <ReactPaginate
        nextLabel="next >"
        onPageChange={(event) => {
          onPageClick(event.selected + 1);
        }}
        pageRangeDisplayed={5}
        marginPagesDisplayed={0}
        selectedPageRel={null}
        forcePage={activePage - 1}
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
