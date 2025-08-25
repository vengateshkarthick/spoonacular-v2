"use client";

import React  from "react";
import { ArrowLongLeftIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { Button } from "@atoms/Button";
import { Typography } from "@atoms/Typography";
import { cn } from "@utils/cn";
import { useCarouselScroll } from "@hooks/useCarouselScroll";
import { listEffect, listItemEffect } from "@/utils/variants";

interface CarouselProps<T = unknown> {
  title: string;
  items: T[];
  render: (item: T, index: number) => React.ReactNode;
  className?: string;
  itemWrapperClassName?: string;
}

export function Carousel<T = unknown>({
  title,
  items,
  render,
  className,
  itemWrapperClassName,
}: CarouselProps<T & { id: string }>) {
  
    const {
        scrollRef,
        handleScrollLeft,
        handleScrollRight,
        onScroll,
        canScrollLeft,
        canScrollRight,
        firstItemRef,
    } = useCarouselScroll()

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-3">
        <Typography level={5}>
          {title}
        </Typography>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            aria-label="Scroll left"
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
            // className="rounded-full p-4 text-zinc-600"
          >
            <ArrowLongLeftIcon className="w-4 rounded h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            aria-label="Scroll right"
            onClick={handleScrollRight}
            disabled={!canScrollRight}
          >
            <ArrowLongRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <motion.div
        ref={scrollRef}
        onScroll={onScroll}
        initial="hidden"
        animate="visible"
        variants={listEffect}
        className={cn(
          "overflow-x-auto scroll-smooth",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          "-mx-2 px-2 w-full flex gap-4 items-center"
        )}
      >
         {items.map((item, index) => (
            <motion.div
              key={item?.id ?? index}
              custom={{ itemIdx: index }}
              initial="hidden"
              animate="visible"
              variants={listItemEffect}
              ref={index === 0 ? firstItemRef : undefined}
              className={cn("flex-none", itemWrapperClassName)}
            >
              {render(item, index)}
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}

export default Carousel;