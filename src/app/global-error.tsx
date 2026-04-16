"use client";

import { RotateCcw } from "lucide-react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#f8fafc] text-[#0f172a]">
        <h2 className="mb-2 text-xl font-bold">Something went wrong</h2>
        <p className="mb-6 max-w-md text-center text-gray-500">
          A critical error occurred. Please try refreshing.
        </p>
        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-xl bg-[#6366f1] px-6 py-3 font-semibold text-white"
        >
          <RotateCcw className="h-4 w-4" />
          Try Again
        </button>
      </body>
    </html>
  );
}
