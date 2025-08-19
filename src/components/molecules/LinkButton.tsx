import Link from "next/link";
import { Typography, TypographyProps } from "@/components/atoms/Typography";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const anchorButtonVariants = cva(
  [
    // Base styles (mirrors Button)
    "cursor-pointer relative inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors",
    // Focus styles
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-blue-700 ",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-9 px-2 text-sm",
        md: "h-10 px-4",
        lg: "h-11 px-8 text-lg",
      },
      effect: {
        outline:
          "font-medium bg-white border-2 hover:bg-gray-50 shadow-sm border-[inherit]",
        ghost:
          " shadow-none bg-transparent hover:bg-transparent hover:underline hover:underline-offset-4 font-semibold underline-[inherit]",
      },
    },
    defaultVariants: {
      size: "md",
      effect: "ghost",
    },
  }
);

interface linkButtonVaraints extends VariantProps<typeof anchorButtonVariants> {
  href: string;
  children: React.ReactNode;
  className?: string;
  prefetch?: boolean;
  target?: string;
  rel?: string;
  textLevel?: TypographyProps["level"];
}

export function LinkButton({
  href,
  children,
  className,
  size,
  prefetch,
  rel,
  effect,
  textLevel = 6,
  target = "_self",
}: linkButtonVaraints) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      target={target}
      rel={rel}
      className={cn(anchorButtonVariants({ size, effect }), className)}
    >
      <Typography level={textLevel} className="text-inherit font-medium">
        {children}
      </Typography>
    </Link>
  );
}
