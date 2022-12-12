import classnames from 'classnames';
import './pagination.scss';
import { usePagination } from './usePagination';

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  console.log(
    'totalCount, currentPage, pageSize',
    totalCount,
    currentPage,
    pageSize
  );
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  console.log('paginationRange', paginationRange);
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
      <li className={classnames('pagination-item')}>
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber) => {
        return <li className={classnames('pagination-item')}>{pageNumber}</li>;
      })}
      <li className={classnames('pagination-item')}>
        <div className="arrow right" />
      </li>
    </ul>
  );
};
