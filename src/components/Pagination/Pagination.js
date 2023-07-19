import React from 'react';
import './Pagination.css'


const Pagination = ({objPerPage, totalObjects, paginate}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalObjects / objPerPage); i++) {
        pageNumbers.push(i)
    }
    if (pageNumbers.length > 1) {
        return (
            <div className="pagination">
                {pageNumbers.map((number, index) => (
                    <div className="page-link" key={index} object={number} onClick={() => paginate(number)}>
                        {number}
                    </div>
                ))}
            </div>
        );
    }

};

export default Pagination;