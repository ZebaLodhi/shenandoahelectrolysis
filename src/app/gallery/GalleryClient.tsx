"use client";

import { useState } from "react";
import Link from "next/link";

/*
 * HOW TO ADD BEFORE & AFTER IMAGES:
 *
 * 1. Take before and after photographs with client consent.
 * 2. Save the images to the /public/gallery/ folder
 *    (create the folder if it doesn't exist).
 * 3. Add a new entry to the galleryItems array below.
 * 4. Set beforeImage and afterImage to the path within /public,
 *    e.g., "/gallery/client1-before.jpg"
 * 5. Fill in the treatment area, sessions count, and description.
 * 6. Set isPlaceholder to false for real entries.
 *
 * IMPORTANT: Always obtain written consent before sharing client images.
 */

interface GalleryItem {
  id: string;
  treatmentArea: string;
  sessions: string;
  description: string;
  beforeImage?: string;
  afterImage?: string;
  isPlaceholder: boolean;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    treatmentArea: "Upper Lip",
    sessions: "Placeholder — sessions to be confirmed",
    description: "Permanent hair removal on the upper lip area.",
    isPlaceholder: true,
  },
  {
    id: "2",
    treatmentArea: "Chin",
    sessions: "Placeholder — sessions to be confirmed",
    description: "Complete chin hair removal with precision electrolysis.",
    isPlaceholder: true,
  },
  {
    id: "3",
    treatmentArea: "Eyebrows",
    sessions: "Placeholder — sessions to be confirmed",
    description: "Brow shaping and refinement for a permanently clean contour.",
    isPlaceholder: true,
  },
  {
    id: "4",
    treatmentArea: "Underarms",
    sessions: "Placeholder — sessions to be confirmed",
    description: "Permanent underarm hair removal for lasting smoothness.",
    isPlaceholder: true,
  },
  {
    id: "5",
    treatmentArea: "Jawline",
    sessions: "Placeholder — sessions to be confirmed",
    description: "Targeted treatment along the jawline and sideburn area.",
    isPlaceholder: true,
  },
  {
    id: "6",
    treatmentArea: "Bikini Area",
    sessions: "Placeholder — sessions to be confirmed",
    description: "Precision permanent hair removal for the bikini line.",
    isPlaceholder: true,
  },
];

const hasRealImages = galleryItems.some((item) => !item.isPlaceholder);

export default function GalleryClient() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  if (!hasRealImages) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-section text-center">
        <div className="bg-white rounded-2xl shadow-soft p-12 md:p-16">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/15 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-sage"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
          </div>
          <h2 className="font-serif text-display-sm text-charcoal mb-4">
            Our Gallery Is Being Curated
          </h2>
          <p className="font-sans text-warm-gray leading-relaxed mb-4 max-w-lg mx-auto">
            We&apos;re building a collection of real treatment results to share
            with you. Check back soon to see before and after photographs from
            satisfied clients.
          </p>
          <p className="font-sans text-sm text-taupe mb-8">
            All gallery images will be shared only with explicit client consent.
          </p>
          <Link
            href="#booking"
            className="inline-flex items-center gap-2 bg-champagne hover:bg-champagne/90 text-charcoal font-sans font-medium px-8 py-3.5 rounded-full transition-colors"
          >
            Book a Consultation to Learn More
          </Link>
        </div>
      </section>
    );
  }

  const realItems = galleryItems.filter((item) => !item.isPlaceholder);

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-2xl shadow-soft overflow-hidden text-left hover:shadow-soft-lg transition-shadow group"
            >
              <div className="grid grid-cols-2 gap-px bg-beige">
                <div className="aspect-square bg-beige-dark relative overflow-hidden">
                  {item.beforeImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.beforeImage}
                      alt={`Before treatment — ${item.treatmentArea}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-taupe font-sans text-sm">
                      Before
                    </div>
                  )}
                  <span className="absolute bottom-2 left-2 bg-charcoal/70 text-ivory text-xs px-2 py-1 rounded font-sans">
                    Before
                  </span>
                </div>
                <div className="aspect-square bg-sage/10 relative overflow-hidden">
                  {item.afterImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.afterImage}
                      alt={`After treatment — ${item.treatmentArea}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-taupe font-sans text-sm">
                      After
                    </div>
                  )}
                  <span className="absolute bottom-2 left-2 bg-sage-dark/70 text-ivory text-xs px-2 py-1 rounded font-sans">
                    After
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-charcoal mb-1 group-hover:text-champagne transition-colors">
                  {item.treatmentArea}
                </h3>
                <p className="font-sans text-sm text-taupe mb-2">
                  {item.sessions}
                </p>
                <p className="font-sans text-sm text-warm-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/80 flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-label={`${selectedItem.treatmentArea} before and after`}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-2 gap-px bg-beige">
              <div className="aspect-[4/3] bg-beige-dark flex items-center justify-center relative">
                {selectedItem.beforeImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={selectedItem.beforeImage}
                    alt={`Before treatment — ${selectedItem.treatmentArea}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-taupe font-sans">Before</span>
                )}
                <span className="absolute bottom-3 left-3 bg-charcoal/70 text-ivory text-sm px-3 py-1 rounded font-sans">
                  Before
                </span>
              </div>
              <div className="aspect-[4/3] bg-sage/10 flex items-center justify-center relative">
                {selectedItem.afterImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={selectedItem.afterImage}
                    alt={`After treatment — ${selectedItem.treatmentArea}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-taupe font-sans">After</span>
                )}
                <span className="absolute bottom-3 left-3 bg-sage-dark/70 text-ivory text-sm px-3 py-1 rounded font-sans">
                  After
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl text-charcoal mb-2">
                {selectedItem.treatmentArea}
              </h3>
              <p className="font-sans text-taupe text-sm mb-2">
                {selectedItem.sessions}
              </p>
              <p className="font-sans text-warm-gray leading-relaxed">
                {selectedItem.description}
              </p>
            </div>
            <div className="px-6 pb-6 flex justify-end">
              <button
                onClick={() => setSelectedItem(null)}
                className="font-sans text-sm text-taupe hover:text-charcoal transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
