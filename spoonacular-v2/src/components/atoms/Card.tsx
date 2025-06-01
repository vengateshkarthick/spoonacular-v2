"use client";

import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "hover" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
}

const variants = {
  default: "bg-white",
  hover: "bg-white hover:shadow-md transition-shadow duration-200",
  interactive: "bg-white hover:shadow-md transition-all duration-200 cursor-pointer hover:-translate-y-0.5",
};

const paddings = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({ 
  variant = "default",
  padding = "md",
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 shadow-sm",
        variants[variant],
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
} 