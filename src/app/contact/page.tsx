import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title:
    "Contact & Book Appointment | Shenandoah Electrolysis by Gillian Vickers",
  description:
    "Book your electrolysis appointment or contact Shenandoah Electrolysis by Gillian Vickers. Schedule a consultation, ask questions, or get directions.",
  openGraph: {
    title: "Contact & Book Appointment | Shenandoah Electrolysis",
    description:
      "Book your electrolysis appointment or get in touch with Gillian Vickers.",
  },
};

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

function EnvelopeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ivory">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-beige/40 to-ivory px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-champagne">
            Get in Touch
          </p>
          <h1 className="mt-4 font-serif text-display-md text-charcoal sm:text-display-lg">
            Contact &amp; Booking
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-lg leading-relaxed text-warm-gray">
            Ready to begin your journey to permanently smooth skin? Book an
            appointment online or reach out with any questions.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-br from-charcoal to-deep-brown p-8 text-center shadow-elegant sm:p-12">
            <h2 className="font-serif text-display-sm text-white sm:text-display-md">
              Book Your Appointment
            </h2>
            <p className="mx-auto mt-4 max-w-lg font-sans text-base leading-relaxed text-white/70">
              Schedule your electrolysis session or free consultation through
              our secure online booking system. Choose a time that works best
              for you.
            </p>
            {/* BOOKING LINK: Replace "#booking" with your GlossGenius booking URL */}
            <a
              href="#booking"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-champagne px-10 py-4 font-sans text-sm font-semibold text-charcoal shadow-soft transition-all hover:bg-champagne-light hover:shadow-soft-lg"
            >
              Book on GlossGenius
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
            <p className="mt-4 font-sans text-xs text-white/50">
              Secure scheduling powered by GlossGenius
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-display-sm text-charcoal">
                Get in Touch
              </h2>
              <p className="mt-3 font-sans text-base leading-relaxed text-warm-gray">
                Have a question before you book? Reach out and Gillian will
                be happy to help.
              </p>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-light/20">
                    <MapPinIcon className="h-5 w-5 text-sage-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal">
                      Location
                    </p>
                    <p className="mt-0.5 font-sans text-sm text-warm-gray">
                      201 N George St, Suite 101
                      <br />
                      Charles Town, WV 25414
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-light/20">
                    <PhoneIcon className="h-5 w-5 text-sage-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal">
                      Phone
                    </p>
                    <a
                      href="tel:+17038192037"
                      className="mt-0.5 font-sans text-sm text-warm-gray transition-colors hover:text-charcoal"
                    >
                      (703) 819-2037
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-light/20">
                    <EnvelopeIcon className="h-5 w-5 text-sage-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal">
                      Email
                    </p>
                    <a
                      href="mailto:gillian@shenandoahelectrolysis.com"
                      className="mt-0.5 font-sans text-sm text-warm-gray transition-colors hover:text-charcoal"
                    >
                      gillian@shenandoahelectrolysis.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-light/20">
                    <ClockIcon className="h-5 w-5 text-sage-dark" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-medium text-charcoal">
                      Business Hours
                    </p>
                    <div className="mt-1 space-y-0.5 font-sans text-sm text-warm-gray">
                      <p>Monday – Friday: 9:00 AM – 5:00 PM</p>
                      <p>Saturday: By Appointment</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8 border-t border-beige pt-6">
                <p className="font-sans text-sm font-medium text-charcoal">
                  Follow Us
                </p>
                <div className="mt-3 flex gap-3">
                  {/* PLACEHOLDER: Replace # with actual Instagram URL */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-beige/60 text-warm-gray transition-colors hover:bg-champagne/20 hover:text-charcoal"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  {/* PLACEHOLDER: Replace # with actual Facebook URL */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow on Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-beige/60 text-warm-gray transition-colors hover:bg-champagne/20 hover:text-charcoal"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://share.google/OObDm6xUfOOttvCqD"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Business Profile"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-beige/60 text-warm-gray transition-colors hover:bg-champagne/20 hover:text-charcoal"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="mb-6 font-serif text-display-sm text-charcoal">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-beige bg-beige/20">
            <iframe
              src="https://maps.google.com/maps?q=201+N+George+St+Suite+101,+Charles+Town,+WV+25414&output=embed"
              className="h-80 w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shenandoah Electrolysis location — 201 N George St Suite 101, Charles Town WV 25414"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
