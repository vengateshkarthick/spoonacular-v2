import { ShimmerLoader } from "@/components/atoms/ShimmerLoader";

export default function AccountLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <ShimmerLoader height="h-8" className="max-w-xs mx-auto" />

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <ShimmerLoader variant="round" width="w-16" height="h-16" />
            <div className="space-y-2">
              <ShimmerLoader width="w-32" height="h-4" />
              <ShimmerLoader width="w-24" height="h-3" />
            </div>
          </div>

          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <ShimmerLoader width="w-24" height="h-4" />
              <ShimmerLoader height="h-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 