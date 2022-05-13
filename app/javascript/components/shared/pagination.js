import React from 'react';
import {
  Pagination as RPagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

export default function Pagination({ numPages, currentPage, setCurrentPage }) {
  return (
    <RPagination
      className="pagination justify-content-end mb-0"
      listClassName="justify-content-end mb-0"
    >
      <PaginationItem className={currentPage === 1 ? 'disabled' : null}>
        <PaginationLink onClick={() => setCurrentPage((prev) => prev - 1)}>
          <i className="fas fa-angle-left" />
          <span className="sr-only">Previous</span>
        </PaginationLink>
      </PaginationItem>
      {[...Array(numPages).keys()].map((pageNumber) => (
        <PaginationItem
          key={pageNumber}
          className={pageNumber + 1 == currentPage ? 'active' : null}
        >
          <PaginationLink onClick={() => setCurrentPage(pageNumber + 1)}>
            {pageNumber + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem className={currentPage === numPages ? 'disabled' : null}>
        <PaginationLink onClick={() => setCurrentPage((prev) => prev + 1)}>
          <i className="fas fa-angle-right" />
          <span className="sr-only">Next</span>
        </PaginationLink>
      </PaginationItem>
    </RPagination>
  );
}






