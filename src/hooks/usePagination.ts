import React, { useState } from "react";
import { slice as _slice } from "lodash";

interface IPageDetails {
  currentPage: number;
  startIdx: number;
  endIdx: number;
}

function usePagination<T>(offset: number, items: T[] ) {
  const [pageDetails, setPageDetails] = useState<IPageDetails>({
    currentPage: 0,
    startIdx: 0,
    endIdx: offset - 1,
  });

  const handleMovePrev = () => {
    const newStartIdx = Math.max(pageDetails.startIdx - offset, 0);
    const newEndIdx = newStartIdx + offset - 1;
    setPageDetails((prev) => ({
      currentPage: pageDetails.currentPage - 1,
      startIdx: newStartIdx,
      endIdx: Math.min(newEndIdx, items.length - 1),
    }));
  };

  const handleMoveNext = () => {
    let newStartIdx = pageDetails.startIdx + offset;
    if (newStartIdx >= items.length) return;

    let newEndIdx = Math.min(newStartIdx + offset - 1, items.length - 1);

    setPageDetails({
      currentPage: pageDetails.currentPage + 1,
      startIdx: newStartIdx,
      endIdx: newEndIdx,
    });
  };

  const currentItem = _slice(
    items,
    pageDetails.startIdx,
    pageDetails.endIdx + 1
  );


  const totalPages = Math.ceil(items.length / offset);


  return {
    handleMoveNext,
    handleMovePrev,
    pageDetails,
    currentItem,
    totalPages
  };
}

export default usePagination;
