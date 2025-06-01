interface ShimmerLoaderProps {
  variant?: "rectangle" | "round";
  width?: string;
  height?: string;
  className?: string;
}

export function ShimmerLoader({
  variant = "rectangle",
  width = "w-full",
  height = "h-4",
  className = "",
}: ShimmerLoaderProps) {
  const baseClasses = "relative overflow-hidden bg-gray-200 animate-pulse";
  const shimmerClasses = "absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200";
  
  const variantClasses = {
    rectangle: "rounded",
    round: "rounded-full",
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${width} ${height} ${className}`}>
      <div className={shimmerClasses} />
    </div>
  );
} 