import type { Metadata } from "next";
import Link from "next/link";
import VideoLibrary from "./VideoLibrary";

export const metadata: Metadata = {
  title: "Education & Video Library | Shenandoah Electrolysis by Gillian Vickers",
  description:
    "Watch educational videos about electrolysis and permanent hair removal from licensed electrologist Gillian Vickers. Learn about the science, what to expect, aftercare, and more.",
  openGraph: {
    title: "Education & Video Library | Shenandoah Electrolysis",
    description:
      "Expert insights on electrolysis and permanent hair removal from Gillian Vickers.",
  },
};

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-ivory">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-beige/40 to-ivory px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-champagne">
            Learn from an Expert
          </p>
          <h1 className="mt-4 font-serif text-display-md text-charcoal sm:text-display-lg">
            Education &amp; Video Library
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-lg leading-relaxed text-warm-gray">
            Expert insights on electrolysis and permanent hair removal from
            Gillian Vickers. Explore our growing library of educational content
            designed to help you feel informed and confident.
          </p>
        </div>
      </section>

      {/* Video Library */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <VideoLibrary />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-ivory to-beige/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-display-sm text-charcoal">
            Have Questions?
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-warm-gray">
            If you have questions about electrolysis or would like personalized
            guidance, Gillian is here to help. Book a consultation to discuss
            your goals and create a treatment plan tailored to you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-3.5 font-sans text-sm font-medium text-white shadow-soft transition-all hover:bg-deep-brown hover:shadow-soft-lg"
            >
              Book a Free Consultation
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white px-8 py-3.5 font-sans text-sm font-medium text-charcoal transition-all hover:border-charcoal/30 hover:shadow-soft"
            >
              Browse FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
