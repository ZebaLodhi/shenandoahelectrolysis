"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_SECTIONS: { title: string; items: FAQItem[] }[] = [
  {
    title: "About Electrolysis",
    items: [
      {
        question: "What exactly is electrolysis?",
        answer:
          "Electrolysis is a method of permanent hair removal that uses a fine, sterile probe inserted into the hair follicle to deliver a small amount of energy — either chemical (galvanic), heat (thermolysis), or a combination of both (blend). This energy destroys the cells responsible for hair growth at the root. Electrolysis is the only method of hair removal recognized by the FDA as truly permanent.",
      },
      {
        question: "Is electrolysis truly permanent?",
        answer:
          "Yes. Electrolysis is the only hair removal method that the U.S. Food and Drug Administration (FDA) recognizes as permanent. Once a hair follicle has been effectively treated, it will not produce new hair. Because hair grows in cycles, multiple sessions are needed to treat each follicle during its active growth phase, but once treated, the results are lasting.",
      },
      {
        question:
          "What is the difference between electrolysis and laser hair removal?",
        answer:
          "While both methods target unwanted hair, they work very differently. Laser hair removal uses light energy to damage the pigment in hair follicles — which means it works best on dark hair against lighter skin and is classified by the FDA as \"permanent hair reduction,\" not removal. Electrolysis treats each follicle individually with electrical energy, making it effective on all hair colors (including blonde, red, gray, and white) and all skin tones. Electrolysis is the only method the FDA recognizes as truly permanent hair removal.",
      },
      {
        question: "Is electrolysis safe?",
        answer:
          "Yes, electrolysis has a well-established safety record spanning over 140 years. When performed by a trained, licensed electrologist using sterile, single-use probes, the procedure is very safe. Temporary effects like slight redness or minor swelling in the treated area are normal and typically resolve within a few hours. At Shenandoah Electrolysis, we follow strict hygiene and sterilization protocols to ensure your safety and comfort.",
      },
    ],
  },
  {
    title: "Treatment Details",
    items: [
      {
        question: "Does electrolysis hurt?",
        answer:
          "Comfort levels vary from person to person and depend on the treatment area, your individual sensitivity, and the modality used. Most clients describe the sensation as a brief, mild warmth or tingling at each follicle. At Shenandoah Electrolysis, Gillian takes a personalized approach to comfort management, adjusting settings and techniques to keep your experience as comfortable as possible. Many clients find the sensation very manageable, especially as treatments progress.",
      },
      {
        question: "How long does each appointment take?",
        answer:
          "Appointment length varies depending on the size of the treatment area and your individual needs. Sessions can range from as short as 15 minutes for small areas like the upper lip to 60 minutes or more for larger areas. During your initial consultation, Gillian will discuss a treatment schedule tailored to your goals.",
      },
      {
        question: "How many sessions will I need?",
        answer:
          "The number of sessions varies for each individual and depends on factors such as the treatment area, hair density, hair growth cycles, and hormonal influences. Because hair grows in cycles and electrolysis can only treat follicles during the active growth phase (anagen), multiple sessions spaced over time are necessary for complete results. Gillian will provide a realistic treatment outlook during your consultation based on your specific situation.",
      },
      {
        question: "What areas of the body can be treated?",
        answer:
          "Electrolysis can be used on almost any area of the body where unwanted hair grows, including the face (upper lip, chin, cheeks, eyebrows), neck, underarms, arms, legs, bikini line, chest, back, and more. It is particularly valued for precision work on the face and for treating areas where laser hair removal may not be effective.",
      },
    ],
  },
  {
    title: "Suitability & Inclusivity",
    items: [
      {
        question: "Is electrolysis suitable for all skin tones?",
        answer:
          "Absolutely. Unlike laser hair removal, which relies on the contrast between hair pigment and skin color, electrolysis targets the hair follicle directly regardless of skin tone. This makes it safe and effective for people of all skin tones and ethnicities, including those with darker skin who may not be ideal candidates for laser treatments.",
      },
      {
        question:
          "Can electrolysis treat blonde, red, gray, or white hair?",
        answer:
          "Yes — this is one of the key advantages of electrolysis over other hair removal methods. Because electrolysis targets the follicle itself rather than the pigment in the hair, it is effective on all hair colors, including blonde, red, gray, white, and light-colored hair that laser treatments cannot address.",
      },
    ],
  },
  {
    title: "Preparation & Aftercare",
    items: [
      {
        question: "How should I prepare for my first appointment?",
        answer:
          "For the best results, allow your hair to grow to a visible length so the electrologist can identify and treat active follicles — avoid tweezing, waxing, or threading for at least two to three weeks before your appointment. Shaving is fine, but stop a few days before so hair is visible. Arrive with clean skin, free of makeup or lotions on the treatment area. Stay well hydrated, and avoid excessive caffeine or alcohol beforehand, as these can increase skin sensitivity.",
      },
      {
        question: "What should I do after treatment?",
        answer:
          "After your electrolysis session, keep the treated area clean and avoid touching it with unwashed hands. For the first 24 to 48 hours, avoid direct sun exposure, tanning beds, heavy exercise or excessive sweating, hot baths or saunas, and applying makeup or fragranced products to the treated area. A gentle, fragrance-free moisturizer or aloe vera gel can help soothe the skin. Gillian will provide detailed aftercare instructions specific to your treatment.",
      },
    ],
  },
  {
    title: "Booking & Cost",
    items: [
      {
        question: "Can I book a consultation before starting treatment?",
        answer:
          "Absolutely, and we encourage it. A consultation allows Gillian to assess your hair removal goals, explain the electrolysis process in detail, answer all your questions, and develop a personalized treatment plan. It is a great opportunity to see the treatment environment and feel comfortable before beginning. You can book a consultation through our online booking system.",
      },
      {
        question: "How much does electrolysis cost?",
        answer:
          "Treatment costs depend on the area being treated, session length, and the number of sessions required to achieve your goals. Because every client's needs are different, we recommend booking a consultation with Gillian to receive personalized pricing based on your specific treatment plan. You can book a consultation or view available appointment options through our online booking page.",
      },
    ],
  },
];

function ChevronIcon({
  open,
  className,
}: {
  open: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`${className} transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  function toggle(key: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  return (
    <div className="space-y-12">
      {FAQ_SECTIONS.map((section) => (
        <div key={section.title}>
          <h2 className="mb-6 font-serif text-display-sm text-charcoal">
            {section.title}
          </h2>
          <div className="divide-y divide-beige rounded-2xl border border-beige bg-white shadow-soft">
            {section.items.map((item) => {
              const key = `${section.title}-${item.question}`;
              const isOpen = openItems.has(key);
              return (
                <div key={key}>
                  <button
                    onClick={() => toggle(key)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-ivory/50 sm:px-8"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans text-base font-medium text-charcoal sm:text-lg">
                      {item.question}
                    </span>
                    <ChevronIcon open={isOpen} className="h-5 w-5 shrink-0 text-taupe" />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 sm:px-8">
                        <p className="font-sans text-base leading-relaxed text-warm-gray">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
