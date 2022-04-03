import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classnames from 'classnames';
import { usePagination, DOTS } from './UsePagination';

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className='pagination'>
        { currentPage === 1 ? <ArrowBackIosIcon className='disabled'/> : <ArrowBackIosIcon onClick={onPrevious} /> }
        {paginationRange.map(pageNumber => {
            if (pageNumber === DOTS) {
                return <span>&#8230;</span>;
            }

            return (
                <button 
                key={pageNumber}
                className={classnames('pagination-button', {
                    selected: pageNumber === currentPage
                  })}
                onClick={() => onPageChange(pageNumber)}>
                    {pageNumber}
                </button>
            );
        })}
      { currentPage === lastPage ? <ArrowForwardIosIcon className='disabled' /> :<ArrowForwardIosIcon onClick={onNext} /> }
    </div>
  );
};

export default Pagination;