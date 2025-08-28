"use client"
import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { Tooltip, PlacesType } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const tooltipVariants = cva("!px-3 z-10 !py-2 relative !rounded-lg text-sm shadow-md", {
  variants:{
    variant: {
      success: '!bg-green-200 [&>*]:text-emerald-700',
      danger: '!bg-red-100 [&>*]:text-red-600',
      info: "!bg-orange-400/30 [&>*]:text-yellow-800 border-orange-400/50",
    }
  },
  defaultVariants: {
    variant: 'success',
  }
})

interface TooltipWrapperProps extends VariantProps<typeof tooltipVariants> {
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
  variant,
  place = "top",
}: TooltipWrapperProps) {
  return (
    <>
      <span data-tooltip-id={id} data-tooltip-content={typeof content === "string" ? content : undefined}>
        {children}
      </span>

      <Tooltip id={id} place={place} className={cn(tooltipVariants({ variant }), className)}>
        {typeof content !== "string" ? content : null}
      </Tooltip>
    </>
  );
}
