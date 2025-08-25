"use client";
import React from "react";
import { Button } from "@atoms/Button";
import { Quicksand } from "next/font/google";
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
  const { pageDetails, handleMoveNext, handleMovePrev, currentItem, totalPages } =
    usePagination<T>(offset, items);

  return (
    <div className={cn("w-full h-full space-y-4", className)}>
      <div className={cn("min-h-72 h-full w-full", itemWrapperClassName)}>
        {currentItem.map(render)}
      </div>
      <div className="m-auto p-4 flex items-center gap-2 sm:gap-4 justify-between w-max text-black">
        <Button
          onClick={handleMovePrev}
          variant="outline"
          className="border-black/75 text-inherit hover:bg-black/75 hover:text-white"
          disabled={pageDetails.startIdx === 0}
        >
          <ArrowLongLeftIcon className="w-4 rounded h-4" strokeWidth="2" />
        </Button>
        <div className="flex justify-center h-4 items-center mx-4 --font-quicksand">
          <Typography level={4} className="text-blue-600 font-normal">
            {pageDetails.currentPage + 1} 
          </Typography>
          <Typography level={5} className=" text-inherit font-medium ">
          &nbsp; / &nbsp;{totalPages}
          </Typography>
        </div>
        <Button
          variant="outline"
          className="border-black/75 text-inherit hover:bg-black/75 hover:text-white"
          onClick={handleMoveNext}
          disabled={pageDetails.endIdx === items.length - 1}
        >
          <ArrowLongRightIcon className="w-4 rounded h-4" strokeWidth="2" />
        </Button>
      </div>
    </div>
  );
}

export default PaginatedView;
