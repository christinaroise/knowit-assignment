import React from 'react'
import '../style/pagination.css'

const PaginationHandler = ({ itemsPerPage, totalItems, paginate, goBack, goNext}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <nav>
            <ul className="paginationContainer">
                <a onClick={() => goBack()} href="!#" className="item-link">Prev</a>
                {pageNumbers.map(number => (
                    <li key={number} className="item">
                        <a onClick={() => paginate(number)} href="!#" className="item-link">
                            {number}
                        </a>
                    </li>
                ))}
                <a onClick={() => goNext()} href="!#" className="item-link">Next</a>
            </ul>
        </nav>
    )
}

export default PaginationHandler
 
