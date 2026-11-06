"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { GLOSSGENIUS_BOOKING_URL } from "@/lib/constants";

export default function StickyBooking() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "sticky-booking-bar",
        isVisible ? "visible-bar" : "hidden-bar"
      )}
    >
      <div className="container-custom py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <p className="hidden sm:block text-sm text-warm-gray">
            <span className="font-serif text-charcoal font-medium">
              Ready to begin?
            </span>{" "}
            Book your appointment today.
          </p>
          <p className="sm:hidden text-sm text-warm-gray font-serif font-medium">
            Ready to book?
          </p>
          <Link
            href={GLOSSGENIUS_BOOKING_URL}
            className="inline-flex items-center px-6 py-2.5 bg-champagne text-charcoal text-xs sm:text-sm font-sans font-medium tracking-wide uppercase rounded-full transition-all duration-300 hover:bg-champagne-dark hover:shadow-soft-lg flex-shrink-0"
          >
            Book Your Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
