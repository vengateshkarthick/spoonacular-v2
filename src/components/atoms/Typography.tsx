import { HTMLAttributes } from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    Omit<VariantProps<typeof typographyVariants>, "level"> {
  level: Level;
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
  6: "p",
  7: "span",
} as const;

const typographyVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-800 font-semibold tracking-tight",
      secondary: "text-gray-500 font-normal tracking-tight",
      tertiary: "text-gray-400 font-normal tracking-tight",
    },
    level: {
      "1": "text-4xl",
      "2": "text-3xl",
      "3": "text-2xl font-normal",
      "4": "text-xl font-normal",
      "5": "text-lg font-normal",
      "6": "text-base font-normal",
      "7": "text-sm font-normal",
    },
  },
  defaultVariants: {
    variant: "primary",
    level: "3",
  },
});

export function Typography({
  level,
  variant = "primary",
  className,
  ...props
}: TypographyProps) {
  const Tag = tags[level];

  return (
    <Tag
      className={cn(
        typographyVariants({
          variant,
          level: String(level) as "1" | "2" | "3" | "4" | "5" | "6" | "7",
        }),
        className,
        poppins.className
      )}
      {...props}
    />
  );
}
