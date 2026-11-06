import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import VideoPlayer from "@/components/ui/VideoPlayer";

export const metadata: Metadata = {
  title: "About Gillian Vickers | Shenandoah Electrolysis",
  description:
    "Meet Gillian Vickers, your professional electrolysis specialist at Shenandoah Electrolysis. Learn about her training, experience, and commitment to personalized permanent hair removal.",
};

/* ------------------------------------------------------------------ */
/*  BOOKING URL — replace with your GlossGenius link                  */
/* ------------------------------------------------------------------ */
const BOOKING_URL = "#booking";

/* ================================================================== */
/*  PAGE HERO                                                         */
/* ================================================================== */
function AboutHero() {
  return (
    <section className="relative bg-ivory pt-32 pb-section">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -right-1/4 w-[700px] h-[700px] rounded-full bg-sage/5" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden order-2 lg:order-1 shadow-elegant">
            <Image
              src="/images/gillian-vickers.webp"
              alt="Gillian Vickers, professional electrologist and owner of Shenandoah Electrolysis"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
              About
            </p>
            <h1 className="font-serif text-display-md md:text-display-lg text-charcoal mb-6">
              Gillian Vickers
            </h1>
            <p className="text-warm-gray font-sans text-lg leading-relaxed mb-5">
              Professional Electrologist &amp; Founder of Shenandoah Electrolysis
            </p>
            <div className="w-12 h-px bg-champagne mb-8" />
            <p className="text-warm-gray font-sans text-base leading-relaxed mb-5">
              I founded Shenandoah Electrolysis because I believe deeply that
              everyone deserves to feel confident in their own skin. Unwanted
              hair can affect so much more than appearance — it touches
              self-esteem, daily routines, and the way we move through the world.
              My mission is to provide a permanent solution with the care,
              precision, and warmth that every client deserves.
            </p>
            <p className="text-warm-gray font-sans text-base leading-relaxed">
              When you visit my practice, you are not just another appointment on
              the schedule. I take the time to listen, to understand your
              specific goals, and to create a treatment plan that is truly yours.
              This is personal care in the truest sense of the word.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  PROFESSIONAL JOURNEY                                              */
/* ================================================================== */
function ProfessionalJourney() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            My Story
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-charcoal">
            A Journey of Purpose
          </h2>
        </div>

        <div className="space-y-6 text-warm-gray font-sans text-base leading-relaxed">
          <p>
            My path to electrolysis was guided by a desire to make a genuine
            difference in people&apos;s lives. I saw how many individuals
            struggled with unwanted hair — spending time and money on temporary
            solutions that never truly resolved the problem. When I discovered
            electrolysis, I knew I had found a field where I could combine
            technical skill with compassionate care to help people achieve real,
            lasting results.
          </p>
          <p>
            I invested in rigorous training and education to master the art and
            science of electrolysis. Every hour of study and practice reinforced
            my commitment to providing the highest standard of treatment. I
            continue to pursue professional development so that my clients always
            benefit from the most current techniques and best practices in the
            field.
          </p>
          <p>
            Opening Shenandoah Electrolysis was the fulfillment of a dream — a
            space where clients can feel safe, respected, and cared for while
            working toward their hair removal goals. Every detail of my practice,
            from the calm environment to the personalized treatment approach, is
            designed with your comfort and confidence in mind.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  EDUCATION & CERTIFICATIONS                                        */
/* ================================================================== */
function CredentialsSection() {
  return (
    <section className="py-section bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Credentials
          </p>
          <h2 className="font-serif text-display-sm md:text-display-md text-charcoal">
            Education &amp; Training
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* PLACEHOLDER: Replace each item with Gillian's actual credentials */}
          {[
            {
              label: "Professional Certification",
              value: "[Certification name and issuing body — to be provided]",
            },
            {
              label: "Electrolysis Training Program",
              value: "[Training program name, institution, and completion date — to be provided]",
            },
            {
              label: "State Licensure",
              value: "[State license details — to be provided]",
            },
            {
              label: "Continuing Education",
              value: "[Continuing education courses or hours — to be provided]",
            },
            {
              label: "Professional Memberships",
              value: "[Professional association memberships — to be provided]",
            },
            {
              label: "Additional Training",
              value: "[Any additional relevant training or certifications — to be provided]",
            },
          ].map((cred) => (
            <div
              key={cred.label}
              className="bg-white rounded-xl p-6 border border-beige/30"
            >
              <p className="text-champagne font-sans text-xs tracking-[0.15em] uppercase mb-2">
                {cred.label}
              </p>
              <p className="text-warm-gray font-sans text-sm leading-relaxed">
                {cred.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  PHILOSOPHY                                                        */
/* ================================================================== */
function PhilosophySection() {
  return (
    <section className="py-section bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Philosophy */}
          <div>
            <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Philosophy
            </p>
            <h2 className="font-serif text-display-sm text-charcoal mb-6">
              My Approach to Permanent Hair Removal
            </h2>
            <div className="space-y-5 text-warm-gray font-sans text-base leading-relaxed">
              <p>
                I believe that permanent hair removal is more than a cosmetic
                procedure — it is an investment in your confidence, your comfort,
                and your quality of life. That belief shapes everything I do.
              </p>
              <p>
                My approach begins with listening. Before any treatment starts, I
                want to understand your goals, your concerns, and your
                experience. I never rush a consultation, because the foundation
                of effective treatment is a clear understanding of what you need
                and what you hope to achieve.
              </p>
              <p>
                I use only professional-grade equipment and evidence-based
                techniques. Electrolysis is a skill that rewards precision, and I
                bring that precision to every session — treating each follicle
                with care to maximize results and minimize discomfort.
              </p>
            </div>
          </div>

          {/* Client Care */}
          <div>
            <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
              Your Comfort
            </p>
            <h2 className="font-serif text-display-sm text-charcoal mb-6">
              Personalized Care, Always
            </h2>
            <div className="space-y-5 text-warm-gray font-sans text-base leading-relaxed">
              <p>
                Your comfort is my priority — both physical and emotional. I
                maintain a private, calming treatment environment where you can
                relax and feel at ease. I understand that choosing electrolysis
                can feel like a big step, and I want every visit to feel
                welcoming and reassuring.
              </p>
              <p>
                I develop a customized treatment plan for every client. No two
                people are alike, and your plan should reflect your unique skin
                type, hair growth patterns, and personal goals. We will work
                together to set realistic expectations and track your progress
                along the way.
              </p>
              <p>
                Above all, I want you to feel seen, heard, and supported
                throughout your treatment journey. My practice is a judgment-free
                zone where your well-being always comes first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  VIDEO INTRODUCTION                                                */
/* ================================================================== */
function VideoIntroSection() {
  return (
    <section className="py-section bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-champagne font-sans text-sm tracking-[0.2em] uppercase mb-4">
            Watch
          </p>
          <h2 className="font-serif text-display-sm text-charcoal mb-4">
            A Personal Welcome from Gillian
          </h2>
          <p className="text-warm-gray font-sans text-base max-w-xl mx-auto">
            Get a feel for who I am and how I approach electrolysis before your
            first visit.
          </p>
        </div>

        <VideoPlayer
          src="/images/video-intro.mp4"
          poster="/images/studio-collage.webp"
          posterAlt="Inside Shenandoah Electrolysis — treatment rooms, reception, and studio spaces"
          className="!rounded-2xl !shadow-elegant"
        />
      </div>
    </section>
  );
}

/* ================================================================== */
/*  BOOKING CTA                                                       */
/* ================================================================== */
function BookingCta() {
  return (
    <section className="relative py-section overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-deep-brown to-charcoal" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-sage" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-16 h-px bg-champagne/60 mx-auto mb-10" />
        <h2 className="font-serif text-display-sm md:text-display-md text-ivory mb-6">
          Ready to Begin?
        </h2>
        <p className="text-ivory/70 font-sans text-lg leading-relaxed mb-10">
          I would love to meet you and discuss how electrolysis can help you
          reach your hair removal goals. Book your appointment today, or reach
          out with any questions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-champagne text-charcoal font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-champagne-light transition-colors duration-300"
          >
            Book Your Appointment
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 border border-ivory/30 text-ivory font-sans text-sm tracking-wider uppercase rounded-sm hover:bg-ivory/10 transition-colors duration-300"
          >
            Contact Gillian
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/*  PAGE COMPONENT                                                    */
/* ================================================================== */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ProfessionalJourney />
      <CredentialsSection />
      <PhilosophySection />
      <VideoIntroSection />
      <BookingCta />
    </>
  );
}
