"use client"
import { cn } from "@/utils/cn";
import { ReactNode } from "react";
import { Tooltip, PlacesType } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

interface TooltipWrapperProps {
  id: string;
  content: string | ReactNode;
  children: ReactNode;
  place?: PlacesType;
  className?: string;
}

export default function TooltipWrapper({
  id,
  content,
  children,
  className,
  place = "top",
}: TooltipWrapperProps) {
  return (
    <>
      <span data-tooltip-id={id} data-tooltip-content={typeof content === "string" ? content : undefined}>
        {children}
      </span>

      <Tooltip id={id} place={place} className={cn("!bg-green-200 !px-3 !py-2 !rounded-lg text-sm shadow-md", className)}>
        {typeof content !== "string" ? content : null}
      </Tooltip>
    </>
  );
}
