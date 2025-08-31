"use client";
import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDownIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import { Typography } from "@atoms/Typography";
import { cn } from "@utils/cn";
import { Button } from "@atoms/Button";
import { accordionEffect } from "@utils/variants";

interface IAccordionItem {
  id?: string;
  title: string;
  content: React.ReactNode;
}
interface IAccordion {
  items: IAccordionItem[];
  accordionItemClassName?: string;
  accordionContainerClassName?: string;
  accordionContentClassName?: string;
  accordionTitleClassName?: string;
}

function Accordion({
  items,
  accordionContainerClassName,
  accordionContentClassName,
  accordionTitleClassName,
  accordionItemClassName,
}: IAccordion) {
  const [activeIdx, setActiveIndex] = useState<number | null>(null);

  const id = useId();

  const handleAccordionOpen = (idx: number) => () => {
    if (idx !== activeIdx) {
      setActiveIndex(idx);
    } else {
      setActiveIndex(null);
    }
  };

  return (
    <div
      className={cn("h-full w-full space-y-4 ", accordionContainerClassName)}
    >
      {items.map((accordionItem, idx) => {
        const isOpen = idx === activeIdx;
        return (
          <motion.div
            className={cn(
              "flex flex-col  p-2 md:p-4 rounded-xl bg-white border",
              accordionContainerClassName
            )}
            key={`accordion-${id}-${idx}`}
          >
            <Button
              variant="ghost"
              onClick={handleAccordionOpen(idx)}
              className={cn(
                "flex justify-between items-center  cursor-pointer",
                accordionItemClassName
              )}
            >
              <div
                className={cn(
                  "flex justify-between items-center w-max gap-2",
                  "text-gray-800 font-medium",
                  accordionTitleClassName
                )}
              >
                <LifebuoyIcon
                  className={cn(
                    "h-5 w-5",
                    isOpen ? "font-semibold" : "font-medium"
                  )}
                />
                <Typography
                  level={4}
                  className={isOpen ? "font-semibold" : "font-medium"}
                >
                  {accordionItem.title}
                </Typography>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDownIcon className="h-4 w-4" />
              </motion.span>
            </Button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={accordionEffect}
                  className="h-full px-4"
                >
                  <div className={cn("py-3 ", accordionContentClassName)}>
                    {accordionItem.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

export default Accordion;
