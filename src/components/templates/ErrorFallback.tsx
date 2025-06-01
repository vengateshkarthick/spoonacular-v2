import { FallbackProps } from "react-error-boundary";
import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";
import Image from "next/image";

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl text-center space-y-8">
        <div className="relative w-full h-64">
          <Image
            src="/illustrations/fixing-bugs.svg"
            alt="Error illustration"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="space-y-4">
          <Typography level={1} variant="primary" className="text-2xl font-semibold text-gray-900">
            Something went wrong
          </Typography>
          
          <p className="text-gray-600">
            {error.message || "An unexpected error occurred. Our team has been notified."}
          </p>

          <div className="flex justify-center">
            <Button
              variant="primary"
              onClick={resetErrorBoundary}
              className="px-8 font-medium"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 