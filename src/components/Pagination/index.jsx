import React from 'react';

import ReactPaginate from 'react-paginate';

import './index.css';

const Pagination = ({
    pageCount,
    handlePageClick
}) => {
    return (
        <ReactPaginate
            containerClassName="pagination"
            activeClassName="active"
            pageClassName="pagination__item"
            pageLinkClassName="pagination__link"
            breakLabel="..."
            nextLabel="»"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="«"
            renderOnZeroPageCount={null}
            previousLinkClassName="pagination__btn"
            nextLinkClassName="pagination__btn"
        />
    );
};

export default Pagination;