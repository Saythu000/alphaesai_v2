import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B171C] text-white">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-extrabold text-[#FF3621]">404</h1>
        <p className="mb-4 text-xl text-white/70">Oops! Page not found</p>
        <Link href="/" className="text-[#FF5F46] underline hover:text-[#FF3621]">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
