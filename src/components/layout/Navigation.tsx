"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS, GLOSSGENIUS_BOOKING_URL } from "@/lib/constants";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-soft"
            : "bg-white"
        )}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.webp"
                alt="Shenandoah Electrolysis"
                width={200}
                height={60}
                className="h-12 sm:h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 text-sm font-sans font-medium tracking-wide transition-colors duration-300 rounded-full",
                    pathname === link.href
                      ? "text-champagne-dark bg-champagne/10"
                      : "text-warm-gray hover:text-charcoal hover:bg-charcoal/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Book Button */}
            <div className="hidden lg:block">
              <Link
                href={GLOSSGENIUS_BOOKING_URL}
                className="inline-flex items-center px-6 py-2.5 text-sm font-sans font-medium tracking-wide uppercase rounded-full transition-all duration-300 bg-champagne text-charcoal hover:bg-champagne-dark hover:shadow-soft-lg"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors text-charcoal hover:bg-charcoal/5"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                {isMobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-ivory shadow-elegant",
            "transform transition-transform duration-500 ease-out",
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full pt-20 px-6 pb-8">
            <div className="flex flex-col gap-1 flex-grow">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-base font-sans font-medium tracking-wide rounded-xl transition-colors duration-200",
                    pathname === link.href
                      ? "text-champagne-dark bg-champagne/10"
                      : "text-warm-gray hover:text-charcoal hover:bg-charcoal/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-6 border-t border-beige/50">
              <Link
                href={GLOSSGENIUS_BOOKING_URL}
                className="flex items-center justify-center w-full px-8 py-3.5 bg-champagne text-charcoal text-sm font-sans font-medium tracking-wide uppercase rounded-full transition-all duration-300 hover:bg-champagne-dark"
              >
                Book Your Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
