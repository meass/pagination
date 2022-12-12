import { useMemo } from 'react';
import { splitVendorChunk } from 'vite';

const range = (start, end) => {
  let length = end - start + 1;
  /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start); // [5,6,7,8]
};

export const DOTS = '...';

export const usePagination = ({
  totalCount, //1000
  pageSize, //10
  siblingCount = 1,
  currentPage, //1
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize); //100 pages

    //maximun page that we want to show
    const totalPageNumbers = siblingCount + 5;

    /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    ); //
    /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
    /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2(siblingCount);
      let leftRange = range(1, leftItemCount);
      return [...leftRange, DOTS, totalPageCount];
    }
    /*
    	Case 3: No right dots to show, but left dots to be shown
    */

    /*
    	Case 4: Both left and right dots to be shown
    */
  }, [totalCount, pageSize, siblingCount, currentPage]);
  return paginationRange; //[1,2,3,4]
};
