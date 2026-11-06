import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import StickyBooking from "@/components/layout/StickyBooking";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shenandoahelectrolysis.com"),
  title: {
    default: "Shenandoah Electrolysis by Gillian Vickers | Professional Permanent Hair Removal",
    template: "%s | Shenandoah Electrolysis",
  },
  description:
    "Professional electrolysis and permanent hair removal by Gillian Vickers. FDA-recognized treatments for all skin tones and hair types. Book your appointment today.",
  keywords: [
    "electrolysis",
    "permanent hair removal",
    "electrolysis near me",
    "professional electrolysis",
    "facial electrolysis",
    "Gillian Vickers",
    "Shenandoah Electrolysis",
    "electrolysis hair removal",
    "permanent facial hair removal",
    "electrolysis for all skin tones",
  ],
  authors: [{ name: "Shenandoah Electrolysis by Gillian Vickers" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shenandoahelectrolysis.com",
    siteName: "Shenandoah Electrolysis by Gillian Vickers",
    title: "Shenandoah Electrolysis by Gillian Vickers | Professional Permanent Hair Removal",
    description:
      "Professional electrolysis and permanent hair removal by Gillian Vickers. FDA-recognized treatments for all skin tones and hair types.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shenandoah Electrolysis by Gillian Vickers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shenandoah Electrolysis by Gillian Vickers",
    description:
      "Professional electrolysis and permanent hair removal. FDA-recognized treatments for all skin tones and hair types.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GOOGLE_SITE_VERIFICATION_TOKEN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shenandoah Electrolysis by Gillian Vickers",
    description:
      "Professional electrolysis and permanent hair removal by Gillian Vickers. FDA-recognized treatments for all skin tones and hair types.",
    url: "https://shenandoahelectrolysis.com",
    telephone: "(555) 000-0000",
    email: "hello@shenandoahelectrolysis.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street, Suite 100",
      addressLocality: "Your City",
      addressRegion: "VA",
      postalCode: "00000",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
    image: "https://shenandoahelectrolysis.com/images/og-image.jpg",
    sameAs: [],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Electrolysis Hair Removal",
    provider: {
      "@type": "LocalBusiness",
      name: "Shenandoah Electrolysis by Gillian Vickers",
    },
    description:
      "Professional electrolysis and permanent hair removal. FDA-recognized as the only method of permanent hair removal for all skin tones and hair types.",
    areaServed: {
      "@type": "State",
      name: "Virginia",
    },
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-ivory text-charcoal">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyBooking />
      </body>
    </html>
  );
}
