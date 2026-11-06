import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Before & After Gallery | Shenandoah Electrolysis",
  description:
    "View real electrolysis treatment results at Shenandoah Electrolysis. Before and after photographs shared with client consent.",
  openGraph: {
    title: "Treatment Gallery | Shenandoah Electrolysis",
    description:
      "View real electrolysis treatment results. Before and after photographs shared with client consent.",
  },
};

export default function GalleryPage() {
  return (
    <main className="bg-ivory">
      {/* Hero */}
      <section className="relative bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sage/30 to-champagne/20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Real Results
          </p>
          <h1 className="font-serif text-display-md md:text-display-lg text-ivory mb-6">
            Treatment Gallery
          </h1>
          <p className="font-sans text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Real results from real clients. All images shared with explicit
            client consent.
          </p>
        </div>
      </section>

      <GalleryClient />

      {/* Privacy Note */}
      <section className="max-w-3xl mx-auto px-6 pb-section">
        <div className="border-t border-beige pt-8 text-center">
          <p className="font-sans text-sm text-taupe leading-relaxed">
            All before and after photographs are shared with explicit client
            consent. Individual results may vary. Treatment outcomes depend on
            factors including hair type, treatment area, and adherence to the
            recommended treatment schedule.
          </p>
        </div>
      </section>
    </main>
  );
}
