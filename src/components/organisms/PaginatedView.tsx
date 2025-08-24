"use client";
import React, { useState } from "react";
import { slice as _slice } from "lodash";
import { Button } from "@atoms/Button";
import { Typography } from "@atoms/Typography";
import { cn } from "@utils/cn";
import usePagination from "@hooks/usePagination";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

interface IPaginatedView<T> {
  offset: number;
  items: T[];
  render: (item: T, index: number) => React.ReactNode;
  className?: string;
  itemWrapperClassName?: string;
}

function PaginatedView<T = unknown>({
  items,
  render,
  offset,
  className,
  itemWrapperClassName,
}: IPaginatedView<T>) {
  const { pageDetails, handleMoveNext, handleMovePrev } = usePagination(
    offset,
    items.length
  );

  const currentItem = _slice(
    items,
    pageDetails.startIdx,
    pageDetails.endIdx + 1
  );

  return (
    <div className={cn("w-full h-full space-y-4", className)}>
      <div className={cn("min-h-72 h-full w-full", itemWrapperClassName)}>
        {currentItem.map(render)}
      </div>
      <div className="ml-auto p-4 flex items-center gap-2 sm:gap-4 justify-between w-max text-black">
        <Button
          onClick={handleMovePrev}
          variant="outline"
          className="border-black text-inherit"
          disabled={pageDetails.startIdx === 0}
        >
          <ArrowLongLeftIcon className="w-4 rounded h-4" />
        </Button>
        <Typography level={7} className=" text-inherit">
          {pageDetails.currentPage + 1}
        </Typography>
        <Button
          variant="outline"
          className="border-black text-inherit"
          onClick={handleMoveNext}
          disabled={pageDetails.endIdx === items.length - 1}
        >
          <ArrowLongRightIcon className="w-4 rounded h-4" />
        </Button>
      </div>
    </div>
  );
}

export default PaginatedView;
