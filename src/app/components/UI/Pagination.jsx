
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <nav>
            <ul className="flex">
                {pages.map(page => (
                    <li key={page}>
                        <button
                            onClick={() => onPageChange(page)}
                            className={`px-3 py-1 mx-1 rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;