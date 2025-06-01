import { ShimmerLoader } from "@/components/atoms/ShimmerLoader";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <div className="space-y-4">
        <ShimmerLoader height="h-8" className="max-w-lg" />
        <ShimmerLoader height="h-4" className="max-w-2xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <ShimmerLoader height="h-48" />
            <ShimmerLoader height="h-6" className="w-3/4" />
            <ShimmerLoader height="h-4" className="w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
} 