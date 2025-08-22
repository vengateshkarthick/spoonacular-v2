"use client";

import ErrorFallback from "@templates/ErrorFallback";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return <ErrorFallback error={error} resetErrorBoundary={reset} />;
} 