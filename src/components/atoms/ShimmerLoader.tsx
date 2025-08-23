import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";


const shimmerVariants = cva("relative border-2 border-zinc-200 overflow-hidden bg-gray-200 animate-pulse", {
  variants: {
    variant: {
      rectangle: "rounded-2xl",
      round: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "rectangle",
  }

});


interface ShimmerLoaderProps extends VariantProps<typeof shimmerVariants> {
  width?: string;
  height?: string;
  className?: string;
}

export function ShimmerLoader({
  variant,
  width = "w-full",
  height = "h-4",
  className = "",
}: ShimmerLoaderProps) {

  return (
    <div className={cn(shimmerVariants({ variant }), width, height, className)}>
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
    </div>
  );
} 