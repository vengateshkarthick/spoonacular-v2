import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Typography, TypographyProps } from "@atoms/Typography";
import { cn } from "@/utils/cn";

const badgeVariants = cva("py-1 px-8 rounded-3xl border w-max", {
  variants: {
    variant: {
      success: "!text-emerald-800 bg-emerald-200 border-emerald-300",
      danger: "bg-red-200 text-red-800 border-red-200",
      warning: "bg-orange-400/30 !text-yellow-800 border-orange-400/50",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

interface IBadge extends VariantProps<typeof badgeVariants> {
  className?: string;
  textLevel?: TypographyProps["level"];
}

function Badge({
  variant,
  className,
  textLevel = 6,
  children,
}: React.PropsWithChildren<IBadge>) {
  return (
    <Typography
      level={textLevel}
      className={cn(badgeVariants({ variant }), className)}
    >
      {children}
    </Typography>
  );
}

export default Badge;
