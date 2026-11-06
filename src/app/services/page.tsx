import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electrolysis Services | Shenandoah Electrolysis by Gillian Vickers",
  description:
    "Professional electrolysis services including facial hair removal, body treatment, and precision areas. Personalized permanent hair removal treatments.",
  openGraph: {
    title: "Electrolysis Services | Shenandoah Electrolysis",
    description:
      "Professional electrolysis services including facial hair removal, body treatment, and precision areas.",
  },
};

const services = [
  {
    id: "electrolysis-hair-removal",
    title: "Electrolysis Hair Removal",
    description:
      "Electrolysis is the only method of permanent hair removal recognized by the FDA. Using a fine, sterile probe, a precise amount of energy is delivered to the hair follicle, disabling its ability to produce new hair. Over a series of treatments, unwanted hair is permanently removed — regardless of hair color, skin tone, or hair texture.",
    details: [
      "Treats all hair colors including blonde, red, gray, and white",
      "Safe and effective for all skin tones",
      "FDA-recognized as a permanent hair removal method",
      "Personalized treatment plan tailored to your goals",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 10v28M16 18l8-8 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "facial-hair-removal",
    title: "Facial Hair Removal",
    description:
      "Unwanted facial hair can affect confidence and daily routines. Our facial electrolysis treatments address hair on the chin, upper lip, cheeks, jawline, and sideburns with exceptional precision. The delicate skin of the face requires a careful, experienced approach — Gillian tailors every session to your skin's sensitivity and your aesthetic goals.",
    details: [
      "Precision treatment for chin, upper lip, cheeks, and sideburns",
      "Gentle approach designed for sensitive facial skin",
      "Gradual, natural-looking results over time",
      "Eliminates the need for daily shaving or waxing",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <ellipse cx="24" cy="20" rx="12" ry="16" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 24c2 4 10 4 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="18" r="1" fill="currentColor" />
        <circle cx="28" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "chin-upper-lip",
    title: "Chin & Upper Lip Treatment",
    description:
      "Among the most commonly requested electrolysis treatments, chin and upper lip hair removal offers life-changing results for those tired of tweezing, waxing, or bleaching. These small but highly visible areas benefit from electrolysis's unmatched precision, allowing for clean, smooth results that are truly permanent.",
    details: [
      "One of the most popular treatment areas",
      "Exceptional precision for small, detailed areas",
      "Comfort-focused techniques for sensitive areas",
      "Permanent freedom from daily maintenance",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M14 28c4 6 16 6 20 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 22v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 20c0-4 12-4 12 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "eyebrow-precision",
    title: "Eyebrow Shaping & Precision Areas",
    description:
      "Achieve a beautifully defined brow shape that lasts — permanently. Electrolysis is ideal for fine-tuning eyebrow contours, removing stray hairs between the brows, and refining the overall shape. It's also effective for other precision areas such as the hairline, ears, and around the nose.",
    details: [
      "Permanent brow shaping and refinement",
      "Precise removal of stray or unibrow hairs",
      "Also suitable for hairline, ears, and nose area",
      "Results that hold their shape without maintenance",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M10 22c6-6 14-6 14-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M38 22c-6-6-14-6-14-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="32" cy="28" r="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "body-hair-removal",
    title: "Body Hair Removal",
    description:
      "Electrolysis is effective for permanent hair removal across the body, including the arms, legs, underarms, bikini area, chest, back, and abdomen. Whether you're looking to treat a small area or a larger region, a personalized treatment plan will be designed to help you achieve your goals comfortably and effectively.",
    details: [
      "Arms, legs, underarms, and bikini area",
      "Chest, back, and abdomen treatments available",
      "Treatment plans designed for larger areas",
      "Works on all hair types and skin tones",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <path d="M24 8a6 6 0 100 12 6 6 0 000-12z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 22h16l2 18H14l2-18z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "consultation",
    title: "Initial Consultation",
    description:
      "Every successful treatment journey begins with understanding your unique needs. During your consultation, Gillian will assess the treatment area, discuss your goals and expectations, explain the electrolysis process in detail, and develop a personalized treatment plan designed just for you. This is your opportunity to ask questions and feel completely comfortable before beginning.",
    details: [
      "Complimentary consultation to discuss your goals",
      "Thorough assessment of your treatment area",
      "Personalized treatment plan development",
      "Opportunity to ask any questions about the process",
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 20h16M16 26h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="34" cy="34" r="8" fill="#EAE9EE" stroke="currentColor" strokeWidth="1.5" />
        <path d="M34 30v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-ivory">
      {/* Hero */}
      <section className="relative bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-sage/30 to-champagne/20" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-28 md:py-36 text-center">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Shenandoah Electrolysis
          </p>
          <h1 className="font-serif text-display-md md:text-display-lg text-ivory mb-6">
            Our Services
          </h1>
          <p className="font-sans text-lg md:text-xl text-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Professional electrolysis treatments tailored to your individual
            needs. Every session is personalized for your comfort, your skin,
            and your goals.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-5xl mx-auto px-6 py-section">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-10 md:gap-16 items-start`}
            >
              {/* Image Placeholder */}
              <div className="w-full md:w-2/5 flex-shrink-0">
                <div
                  className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-beige to-sage/20 flex items-center justify-center"
                  aria-label={`${service.title} — placeholder for treatment photograph`}
                >
                  <div className="text-taupe">{service.icon}</div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2 className="font-serif text-display-sm text-charcoal mb-4">
                  {service.title}
                </h2>
                <p className="font-sans text-warm-gray leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 font-sans text-deep-brown"
                    >
                      <svg
                        className="w-5 h-5 text-sage flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 text-sm font-sans text-taupe mb-6">
                  <span className="bg-beige/50 px-4 py-2 rounded-full">
                    Duration: Varies by area and individual needs
                  </span>
                  <span className="bg-beige/50 px-4 py-2 rounded-full">
                    Pricing: Contact for personalized quote
                  </span>
                </div>
                <Link
                  href="#booking"
                  className="inline-flex items-center gap-2 bg-champagne hover:bg-champagne/90 text-charcoal font-sans font-medium px-6 py-3 rounded-full transition-colors"
                >
                  Book This Service
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="bg-sage/10 py-section">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sage-dark font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Our Approach to Pricing
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-charcoal mb-6">
            Every Client&apos;s Needs Are Unique
          </h2>
          <p className="font-sans text-warm-gray leading-relaxed mb-4">
            Because each person&apos;s hair growth patterns, treatment areas,
            and goals are different, we believe in personalized pricing rather
            than a one-size-fits-all approach. During your consultation, Gillian
            will assess your individual needs and provide a transparent treatment
            plan with clear pricing.
          </p>
          <p className="font-sans text-warm-gray leading-relaxed mb-8">
            We want you to feel informed and comfortable with your investment in
            permanent hair removal. There are no hidden fees and no pressure —
            just honest guidance tailored to you.
          </p>
          <Link
            href="#booking"
            className="inline-flex items-center gap-2 bg-champagne hover:bg-champagne/90 text-charcoal font-sans font-medium px-8 py-3.5 rounded-full transition-colors text-lg"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>

      {/* Is Electrolysis Right for Me CTA */}
      <section className="max-w-4xl mx-auto px-6 py-section text-center">
        <h2 className="font-serif text-display-sm text-charcoal mb-4">
          Not Sure Where to Start?
        </h2>
        <p className="font-sans text-warm-gray leading-relaxed mb-8 max-w-2xl mx-auto">
          Take our quick educational quiz to learn more about how electrolysis
          might fit your hair removal goals. It only takes a minute.
        </p>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory font-sans font-medium px-8 py-3.5 rounded-full transition-colors"
        >
          Is Electrolysis Right for Me?
        </Link>
      </section>

      {/* Final CTA */}
      <section className="relative bg-charcoal text-ivory overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-champagne/30 to-sage/20" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="font-serif text-display-sm md:text-display-md text-ivory mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="font-sans text-lg text-ivory/80 mb-10 leading-relaxed">
            Book your appointment today and take the first step toward permanent
            hair removal. Gillian is here to guide you every step of the way.
          </p>
          <Link
            href="#booking"
            className="inline-flex items-center gap-2 bg-champagne hover:bg-champagne-light text-charcoal font-sans font-medium px-10 py-4 rounded-full transition-colors text-lg"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </main>
  );
}
