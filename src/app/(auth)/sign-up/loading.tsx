import { ShimmerLoader } from "@/components/atoms/ShimmerLoader";

export default function SignUpLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6">
        <ShimmerLoader height="h-8" className="max-w-xs mx-auto" />

        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-2">
              <ShimmerLoader width="w-24" height="h-4" />
              <ShimmerLoader height="h-10" />
            </div>
          ))}

          <ShimmerLoader height="h-10" className="mt-6" />
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <ShimmerLoader width="w-24" height="h-4" />
          <ShimmerLoader width="w-24" height="h-4" />
        </div>
      </div>
    </div>
  );
} 