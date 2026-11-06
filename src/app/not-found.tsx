import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
          Page Not Found
        </p>
        <h1 className="font-serif text-display-md text-charcoal mb-4">404</h1>
        <p className="font-sans text-warm-gray leading-relaxed mb-8">
          We couldn&apos;t find the page you&apos;re looking for. It may have
          been moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-champagne hover:bg-champagne/90 text-charcoal font-sans font-medium px-8 py-3.5 rounded-full transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="#booking"
            className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory font-sans font-medium px-8 py-3.5 rounded-full transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </main>
  );
}
