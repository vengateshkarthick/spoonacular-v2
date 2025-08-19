import { HTMLAttributes } from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/utils/cn";

export interface TypographyProps extends HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: keyof typeof variants;
}
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const tags = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;

const variants = {
  primary: "text-gray-800 font-semibold tracking-tight",
  secondary: "text-gray-500 font-normal tracking-tight",
  tertiary: "text-gray-400 font-normal tracking-tight",
}

export function Typography({ level, variant = "primary", className, ...props }: TypographyProps) {
  const Tag = tags[level];
  

  return (
    <Tag
      className={cn(
        variants[variant],
        {
          "text-4xl": level === 1,
          "text-3xl": level === 2,
          "text-2xl font-normal": level === 3,
          "text-xl font-normal": level === 4,
          "text-lg font-normal": level === 5,
          "text-base font-normal": level === 6,
        },
        className,
        poppins.className
      )}
      {...props}
    />
  );
} 