import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-bg px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary-500/20 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Page Not Found
        </h2>
        <p className="text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-500 text-white font-medium transition-colors"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}
