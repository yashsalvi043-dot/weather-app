import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-dvh flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white px-4">
      <p className="text-6xl mb-4">🌧</p>
      <h2 className="text-xl font-bold mb-2">Page Not Found</h2>
      <p className="text-white/60 mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        href="/"
        className="rounded-xl bg-white/10 border border-white/20 px-6 py-2 font-medium hover:bg-white/20 transition-colors"
      >
        Back to SkyPulse
      </Link>
    </div>
  );
}
