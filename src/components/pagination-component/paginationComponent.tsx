import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { PaginationProps } from "../../interfaces/userDataInterface";
import "./paginationComponent.css";

const PaginationComponent: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    pages.push(1);

    if (currentPage > 2) {
      pages.push("...");
    }

    if (currentPage !== 1 && currentPage !== totalPages) {
      pages.push(currentPage);
    }

    if (currentPage < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="pagination-container">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="pagination-btn">
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      {getPageNumbers().map((page, index) => (
        page === "..." ? (
          <span key={index} className="pagination-ellipsis">...</span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page as number)}
            className={`pagination-btn ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </button>
        )
      ))}

      <button onClick={handleNext} disabled={currentPage === totalPages} className="pagination-btn">
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
};

export default PaginationComponent;
