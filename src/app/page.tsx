import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shenandoah Electrolysis by Gillian Vickers | Professional Permanent Hair Removal",
  description:
    "Experience the confidence of permanently smooth skin with professional electrolysis treatments by Gillian Vickers. FDA-recognized permanent hair removal for all skin tones and hair colors.",
};

/* ------------------------------------------------------------------ */
/*  BOOKING URL — replace with your GlossGenius link                  */
/* ------------------------------------------------------------------ */
const BOOKING_URL = "#booking";

/* ================================================================== */
/*  A. HERO SECTION                                                   */
/* ================================================================== */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ivory">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-sage/5" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-champagne/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="max-w-xl">
            <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-6">
              Shenandoah Electrolysis
            </p>
            <h1 className="font-serif text-display-lg md:text-display-xl text-charcoal mb-6">
              Confidence Begins with Permanence.
            </h1>
            <p className="text-warm-gray font-sans text-lg md:text-xl leading-relaxed mb-10">
              Discover the confidence of permanently smooth skin with
              professional electrolysis treatments at Shenandoah Electrolysis by
              Gillian Vickers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-ivory font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-deep-brown transition-colors duration-300"
              >
                Book Your Appointment
              </a>
              <Link
                href="/education"
                className="inline-flex items-center justify-center px-8 py-4 border border-charcoal/20 text-charcoal font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-charcoal/5 transition-colors duration-300"
              >
                Discover Electrolysis
              </Link>
            </div>
          </div>

          {/* PLACEHOLDER: Replace with professional hero photograph of Gillian or treatment-related image */}
          <div
            className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden"
            aria-label="Professional photograph of Gillian Vickers or treatment-related imagery"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sage/20 via-beige to-champagne/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-ivory/60 flex items-center justify-center">
                  <svg className="w-8 h-8 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                  </svg>
                </div>
                <p className="text-charcoal/40 font-sans text-sm">
                  Hero photograph
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  B. WELCOME / INTRODUCTION SECTION                                 */
/* ================================================================== */
function WelcomeSection() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-px bg-champagne mx-auto mb-10" />
        <h2 className="font-serif text-display-sm md:text-display-md text-charcoal mb-8">
          Welcome to Shenandoah Electrolysis
        </h2>
        <p className="text-warm-gray font-sans text-lg leading-relaxed mb-6">
          At Shenandoah Electrolysis, we believe that every person deserves to
          feel confident and comfortable in their own skin. Our practice is built
          on a simple philosophy: permanent results delivered with personalized
          care, precision, and genuine compassion.
        </p>
        <p className="text-warm-gray font-sans text-lg leading-relaxed">
          Electrolysis is the only FDA-recognized method of permanent hair
          removal, and we are proud to offer this trusted treatment in a warm,
          welcoming environment. Whether you are seeking relief from unwanted
          facial hair, exploring your options for the first time, or continuing
          your journey toward smoother skin, you will find a dedicated partner in
          your care here.
        </p>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  C. MEET GILLIAN VICKERS                                           */
/* ================================================================== */
function MeetGillianSection() {
  return (
    <section className="py-section bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo + Video */}
          <div className="space-y-6">
            {/* PLACEHOLDER: Replace with professional portrait of Gillian */}
            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              aria-label="Professional portrait of Gillian Vickers"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-beige/60 to-sage/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-ivory/60 flex items-center justify-center">
                    <svg className="w-7 h-7 text-charcoal/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-charcoal/40 font-sans text-sm">
                    Gillian&apos;s portrait
                  </p>
                </div>
              </div>
            </div>

            {/* PLACEHOLDER: Replace with Gillian's introductory video */}
            <div
              className="relative aspect-video rounded-xl overflow-hidden"
              aria-label="Introductory video from Gillian Vickers"
            >
              <div className="absolute inset-0 bg-charcoal/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-ivory/80 flex items-center justify-center shadow-soft cursor-pointer hover:scale-105 transition-transform">
                  <svg className="w-6 h-6 text-charcoal ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <p className="absolute bottom-4 left-4 text-charcoal/40 font-sans text-xs">
                Video introduction placeholder
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Your Electrologist
            </p>
            <h2 className="font-serif text-display-sm md:text-display-md text-charcoal mb-6">
              Meet Gillian Vickers
            </h2>
            <p className="text-warm-gray font-sans text-lg leading-relaxed mb-5">
              With a passion for helping people feel their best, Gillian Vickers
              brings professional expertise, a gentle approach, and genuine care
              to every electrolysis treatment. Her commitment to continuing
              education and personalized treatment plans ensures that each client
              receives the highest standard of care.
            </p>
            <p className="text-warm-gray font-sans text-lg leading-relaxed mb-5">
              Gillian chose the field of electrolysis because she understands
              the profound impact that unwanted hair can have on a
              person&apos;s confidence and daily life. She believes everyone
              deserves access to a permanent solution delivered with compassion
              and skill.
            </p>
            <p className="text-warm-gray font-sans text-lg leading-relaxed mb-8">
              When you visit Shenandoah Electrolysis, you can expect a private,
              comfortable environment where your needs and concerns are always
              heard. Gillian takes the time to understand your goals and develops
              a treatment plan tailored specifically to you.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-charcoal font-sans text-sm tracking-wider uppercase border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors duration-300"
            >
              Get to Know Gillian
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  D. WHY CHOOSE ELECTROLYSIS                                        */
/* ================================================================== */
const benefits = [
  {
    title: "Permanent Results",
    description:
      "Electrolysis is the only hair removal method recognized by the FDA as providing permanent results. Once a hair follicle is treated, it does not grow back.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Precision Treatment",
    description:
      "Each hair follicle is individually treated with exacting precision, making electrolysis ideal for delicate areas like eyebrows, upper lip, and chin.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.696.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
      </svg>
    ),
  },
  {
    title: "All Skin Tones & Hair Colors",
    description:
      "Unlike laser treatments, electrolysis is effective on every skin tone and every hair color, including blonde, red, gray, and white hair.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "FDA-Recognized",
    description:
      "Electrolysis is the only method of hair removal that the U.S. Food and Drug Administration (FDA) recognizes as permanent.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Personalized Care",
    description:
      "Every treatment plan is tailored to your unique needs, skin type, and hair removal goals. You will never receive a one-size-fits-all approach.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

function WhyElectrolysisSection() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            The Gold Standard
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-charcoal mb-6">
            Why Choose Electrolysis?
          </h2>
          <p className="text-warm-gray font-sans text-lg max-w-2xl mx-auto">
            Electrolysis stands apart as the only truly permanent method of hair
            removal, offering unmatched precision and inclusivity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group p-8 rounded-xl bg-ivory/60 hover:bg-ivory border border-transparent hover:border-beige/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-sage/10 flex items-center justify-center text-sage-dark mb-6 group-hover:bg-sage/20 transition-colors">
                {b.icon}
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-3">
                {b.title}
              </h3>
              <p className="text-warm-gray font-sans text-sm leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  E. SERVICES SECTION                                               */
/* ================================================================== */
const services = [
  {
    title: "Electrolysis Hair Removal",
    description:
      "Comprehensive permanent hair removal using professional-grade electrolysis equipment for lasting results on any area of the body.",
  },
  {
    title: "Facial Hair Removal",
    description:
      "Gentle, precise treatment for unwanted facial hair, restoring confidence with permanent results in a comfortable setting.",
  },
  {
    title: "Chin & Upper Lip Treatment",
    description:
      "Targeted electrolysis for the chin and upper lip areas, among the most common and rewarding treatment zones.",
  },
  {
    title: "Eyebrow Shaping & Precision Areas",
    description:
      "Achieve perfectly defined brows and treat other precision areas with the unmatched accuracy of electrolysis.",
  },
  {
    title: "Body Hair Removal",
    description:
      "Effective permanent hair removal for larger body areas including underarms, bikini line, legs, and more.",
  },
];

function ServicesSection() {
  return (
    <section className="py-section bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Our Treatments
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-charcoal mb-6">
            Services
          </h2>
          <p className="text-warm-gray font-sans text-lg max-w-2xl mx-auto">
            Each treatment is tailored to your individual needs, ensuring the
            most effective and comfortable experience possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white rounded-xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col"
            >
              <h3 className="font-serif text-xl text-charcoal mb-3">
                {service.title}
              </h3>
              <p className="text-warm-gray font-sans text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              {/* PLACEHOLDER: session duration and pricing — do not invent values */}
              <p className="text-taupe font-sans text-xs tracking-wider uppercase mb-4">
                Contact for details
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 border border-charcoal/15 text-charcoal font-sans text-xs tracking-wider uppercase rounded-sm hover:bg-charcoal hover:text-ivory transition-colors duration-300"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  F. EDUCATIONAL VIDEO PREVIEW                                      */
/* ================================================================== */
const videosPreviews = [
  {
    title: "What Is Electrolysis?",
    description:
      "A clear, approachable overview of how electrolysis works and why it is the gold standard for permanent hair removal.",
  },
  {
    title: "Your First Appointment",
    description:
      "Everything you need to know before your first visit, from preparation tips to what happens during treatment.",
  },
  {
    title: "Electrolysis vs. Laser",
    description:
      "Understand the key differences between electrolysis and laser hair removal so you can make the best choice for your goals.",
  },
];

function EducationPreviewSection() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Education
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-charcoal mb-6">
            Learn About Electrolysis
          </h2>
          <p className="text-warm-gray font-sans text-lg max-w-2xl mx-auto">
            Gillian is passionate about empowering clients through education.
            Explore our video library to learn everything about permanent hair
            removal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videosPreviews.map((v) => (
            <div key={v.title} className="group">
              {/* PLACEHOLDER: Replace with actual video thumbnail */}
              <div
                className="relative aspect-video rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-sage/10 to-beige/40"
                aria-label={`Video thumbnail: ${v.title}`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-ivory/90 flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-charcoal ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-lg text-charcoal mb-2">
                {v.title}
              </h3>
              <p className="text-warm-gray font-sans text-sm leading-relaxed">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-deep-brown transition-colors duration-300"
          >
            Explore All Videos
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  G. CLIENT TESTIMONIALS                                            */
/* ================================================================== */
const testimonials = [
  {
    quote:
      "[Placeholder testimonial — replace with a real client review once available.]",
    name: "[Client Name]",
    detail: "[Treatment type]",
  },
  {
    quote:
      "[Placeholder testimonial — replace with a real client review once available.]",
    name: "[Client Name]",
    detail: "[Treatment type]",
  },
  {
    quote:
      "[Placeholder testimonial — replace with a real client review once available.]",
    name: "[Client Name]",
    detail: "[Treatment type]",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-section bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Client Stories
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-charcoal">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 shadow-soft"
            >
              {/* Star rating placeholder */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-champagne"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-warm-gray font-sans text-sm leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-serif text-charcoal font-medium">
                  {t.name}
                </p>
                <p className="text-taupe font-sans text-xs">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  H. TREATMENT JOURNEY                                              */
/* ================================================================== */
const journeySteps = [
  {
    number: "01",
    title: "Book Your Appointment",
    description:
      "Schedule your visit online through our easy booking system. Choose a time that works best for you.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Initial Consultation",
    description:
      "Meet with Gillian for a personalized consultation where she will assess your needs and answer all of your questions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Personalized Treatment",
    description:
      "Receive your customized electrolysis treatment in a comfortable, private setting using the latest professional techniques.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Ongoing Progress & Aftercare",
    description:
      "Follow your personalized aftercare plan and watch your progress toward permanently smooth, hair-free skin.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

function TreatmentJourneySection() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Your Path
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-charcoal mb-6">
            Your Treatment Journey
          </h2>
          <p className="text-warm-gray font-sans text-lg max-w-2xl mx-auto">
            From your first appointment to lasting results, we guide you through
            every step with care and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-beige" />

          {journeySteps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-ivory border-2 border-beige flex items-center justify-center text-sage-dark">
                {step.icon}
              </div>
              <p className="text-champagne font-sans text-xs tracking-[0.2em] uppercase mb-2">
                Step {step.number}
              </p>
              <h3 className="font-serif text-lg text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-warm-gray font-sans text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  I. FINAL CTA                                                      */
/* ================================================================== */
function FinalCtaSection() {
  return (
    <section className="relative py-section overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-deep-brown to-charcoal" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-sage" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-champagne" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-px bg-champagne/60 mx-auto mb-10" />
        <h2 className="font-serif text-display-sm md:text-display-md text-ivory mb-6">
          Your Journey to Permanent Hair Removal Starts Here.
        </h2>
        <p className="text-ivory/70 font-sans text-lg leading-relaxed mb-10">
          Take the first step toward permanently smooth, confident skin.
          Schedule your appointment with Gillian today.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-10 py-4 bg-champagne text-charcoal font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-champagne-light transition-colors duration-300"
        >
          Book Your Appointment
        </a>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  PAGE COMPONENT                                                    */
/* ================================================================== */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <MeetGillianSection />
      <WhyElectrolysisSection />
      <ServicesSection />
      <EducationPreviewSection />
      <TestimonialsSection />
      <TreatmentJourneySection />
      <FinalCtaSection />
    </>
  );
}
