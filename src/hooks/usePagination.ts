import React, { useState } from "react";

interface IPageDetails {
  currentPage: number;
  startIdx: number;
  endIdx: number;
}

function usePagination(offset: number, length: number) {
  const [pageDetails, setPageDetails] = useState<IPageDetails>({
    currentPage: 0,
    startIdx: 0,
    endIdx: offset - 1,
  });

  const handleMovePrev = () => {
    const newStartIdx = Math.max(pageDetails.startIdx - offset, 0);
    const newEndIdx = newStartIdx + offset - 1;
    setPageDetails({
      currentPage: pageDetails.currentPage - 1,
      startIdx: newStartIdx,
      endIdx: Math.min(newEndIdx, length - 1),
    });
  };

  const handleMoveNext = () => {
    let newStartIdx = pageDetails.startIdx + offset;
    if (newStartIdx >= length) return;

    let newEndIdx = Math.min(newStartIdx + offset - 1, length - 1);

    setPageDetails({
      currentPage: pageDetails.currentPage + 1,
      startIdx: newStartIdx,
      endIdx: newEndIdx,
    });
  };

  return {
    handleMoveNext,
    handleMovePrev,
    pageDetails,
  };
}

export default usePagination;
