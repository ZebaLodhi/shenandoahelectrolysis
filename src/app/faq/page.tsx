import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "./FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Shenandoah Electrolysis by Gillian Vickers",
  description:
    "Find answers to common questions about electrolysis and permanent hair removal — from how it works and what it feels like to preparation tips and aftercare guidance.",
  openGraph: {
    title: "Electrolysis FAQ | Shenandoah Electrolysis",
    description:
      "Everything you need to know about electrolysis and permanent hair removal.",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is electrolysis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Electrolysis is a method of permanent hair removal that uses a fine, sterile probe inserted into the hair follicle to deliver a small amount of energy. It is the only method of hair removal recognized by the FDA as truly permanent.",
      },
    },
    {
      "@type": "Question",
      name: "Is electrolysis truly permanent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Electrolysis is the only hair removal method that the U.S. Food and Drug Administration (FDA) recognizes as permanent. Once a hair follicle has been effectively treated, it will not produce new hair.",
      },
    },
    {
      "@type": "Question",
      name: "Does electrolysis hurt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Comfort levels vary from person to person. Most clients describe the sensation as a brief, mild warmth or tingling. Experienced electrologists adjust settings to keep treatment as comfortable as possible.",
      },
    },
    {
      "@type": "Question",
      name: "Is electrolysis suitable for all skin tones?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unlike laser hair removal, electrolysis targets the hair follicle directly regardless of skin tone, making it safe and effective for all skin tones and ethnicities.",
      },
    },
    {
      "@type": "Question",
      name: "Can electrolysis treat blonde, red, gray, or white hair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Because electrolysis targets the follicle itself rather than the pigment in the hair, it is effective on all hair colors including blonde, red, gray, and white hair.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between electrolysis and laser hair removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Laser uses light energy targeting hair pigment and is classified as permanent hair reduction. Electrolysis targets each follicle individually with electrical energy, works on all hair colors and skin tones, and is the only FDA-recognized permanent hair removal method.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <main className="min-h-screen bg-ivory">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-beige/40 to-ivory px-4 pb-12 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-champagne">
              Your Questions Answered
            </p>
            <h1 className="mt-4 font-serif text-display-md text-charcoal sm:text-display-lg">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-4 max-w-2xl font-sans text-lg leading-relaxed text-warm-gray">
              We understand you may have questions before starting your
              electrolysis journey. Here are answers to the questions we hear
              most often.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-b from-ivory to-beige/30 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-display-sm text-charcoal">
              Still Have Questions?
            </h2>
            <p className="mt-4 font-sans text-lg leading-relaxed text-warm-gray">
              Every person&apos;s hair removal journey is unique. Book a
              consultation with Gillian to discuss your specific goals and get
              personalized answers.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#booking"
                className="inline-flex items-center rounded-full bg-charcoal px-8 py-3.5 font-sans text-sm font-medium text-white shadow-soft transition-all hover:bg-deep-brown hover:shadow-soft-lg"
              >
                Book a Consultation
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-charcoal/15 bg-white px-8 py-3.5 font-sans text-sm font-medium text-charcoal transition-all hover:border-charcoal/30 hover:shadow-soft"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
