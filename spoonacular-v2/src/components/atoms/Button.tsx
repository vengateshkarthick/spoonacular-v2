"use client";

import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary: "bg-blue-700 hover:bg-blue-800 text-white shadow-sm",
  outline: "border-2 font-medium border-blue-700 text-blue-700 bg-white hover:bg-gray-50 shadow-sm",
  ghost: "font-medium hover:bg-blue-50 text-blue-700",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4",
  lg: "h-11 px-8 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors",
        // Focus styles
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        // Disabled styles
        "disabled:pointer-events-none disabled:opacity-50",
        // Variant and size
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
} 