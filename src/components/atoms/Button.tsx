"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@utils/cn";
import { tapEffect } from "@utils/variants";


const buttonVariants = cva(
  [
    "cursor-pointer relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    "disabled:!pointer-events-none disabled:!border-transparent disabled:!opacity-50 disabled:!bg-zinc-500 disabled:!text-zinc-900",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-blue-700 hover:bg-blue-800 text-white shadow-sm",
        outline:
          "border-2 font-medium border-blue-700 text-blue-700 bg-white hover:bg-gray-50 shadow-sm",
        ghost: "font-medium hover:bg-blue-50 text-blue-700",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-11 px-8 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {}

export function Button({
  variant,
  size,
  className,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={cn(buttonVariants({ variant, size }), className)}
      whileTap="onTap"
      variants={tapEffect}
      onClick={onClick}
      {...props}
    />
  );
} 