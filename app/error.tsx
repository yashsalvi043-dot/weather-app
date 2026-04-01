'use client';

import { useEffect } from 'react';
import Button from '@mui/material/Button';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white px-4">
      <p className="text-6xl mb-4">⚠️</p>
      <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
      <p className="text-white/60 mb-6 text-center max-w-sm">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>
      <Button variant="contained" onClick={reset}>
        Try Again
      </Button>
    </div>
  );
}
