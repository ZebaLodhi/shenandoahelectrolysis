export const SITE_NAME = "Shenandoah Electrolysis";
export const SITE_NAME_FULL = "Shenandoah Electrolysis by Gillian Vickers";
export const SITE_DESCRIPTION =
  "Professional electrolysis and permanent hair removal by Gillian Vickers. FDA-recognized treatments for all skin tones and hair types.";
export const SITE_TAGLINE = "Confidence Begins with Permanence.";

export const GLOSSGENIUS_BOOKING_URL = "#booking";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Education", href: "/education" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const CONTACT_INFO = {
  phone: "(555) 000-0000",
  email: "hello@shenandoahelectrolysis.com",
  address: {
    street: "123 Main Street",
    suite: "Suite 100",
    city: "Your City",
    state: "VA",
    zip: "00000",
  },
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
    { days: "Saturday", time: "By Appointment" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export const SOCIAL_LINKS = {
  instagram: "#instagram",
  facebook: "#facebook",
  youtube: "#youtube",
  tiktok: "#tiktok",
} as const;

export const SERVICES = [
  {
    id: "electrolysis-hair-removal",
    title: "Electrolysis Hair Removal",
    description:
      "FDA-recognized permanent hair removal for any area of the body. Suitable for all skin tones and hair types.",
    icon: "sparkles",
  },
  {
    id: "facial-hair-removal",
    title: "Facial Hair Removal",
    description:
      "Gentle, precise permanent removal of unwanted facial hair for a smooth, confident complexion.",
    icon: "face",
  },
  {
    id: "chin-upper-lip",
    title: "Chin & Upper Lip",
    description:
      "Targeted treatment for the most common facial hair concerns with lasting, permanent results.",
    icon: "target",
  },
  {
    id: "eyebrow-shaping",
    title: "Eyebrow Shaping & Precision Areas",
    description:
      "Precise hair removal for perfectly shaped brows and other delicate areas requiring expert attention.",
    icon: "eye",
  },
  {
    id: "body-treatments",
    title: "Body Treatments",
    description:
      "Permanent hair removal for underarms, bikini area, legs, and other body areas with personalized care.",
    icon: "body",
  },
  {
    id: "consultation",
    title: "Complimentary Consultation",
    description:
      "Begin your journey with a personalized consultation to discuss your goals and create a treatment plan.",
    icon: "chat",
  },
] as const;

export const TREATMENT_STEPS = [
  {
    step: 1,
    title: "Book Your Appointment",
    description:
      "Schedule your initial consultation online or by phone. We will find a time that works for you.",
  },
  {
    step: 2,
    title: "Initial Consultation",
    description:
      "Meet with Gillian to discuss your goals, assess your treatment areas, and create a personalized plan.",
  },
  {
    step: 3,
    title: "Personalized Treatment",
    description:
      "Receive expert electrolysis treatment in a comfortable, private setting tailored to your needs.",
  },
  {
    step: 4,
    title: "Ongoing Progress & Aftercare",
    description:
      "Follow your customized aftercare plan and watch your results develop over your treatment series.",
  },
] as const;

export const VIDEO_CATEGORIES = [
  "All",
  "Electrolysis Explained",
  "How It Works",
  "First Appointment",
  "Before & Aftercare",
  "FAQs",
  "Myths & Facts",
  "Hair Growth Cycles",
  "Skin Care",
] as const;

export const PLACEHOLDER_TESTIMONIALS = [
  {
    id: "1",
    quote:
      "Placeholder: Add your client testimonial here. This space is reserved for a real review from a satisfied client.",
    name: "Client A.",
    treatment: "Facial Electrolysis",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Placeholder: Add your client testimonial here. This space is reserved for a real review from a satisfied client.",
    name: "Client B.",
    treatment: "Upper Lip & Chin",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Placeholder: Add your client testimonial here. This space is reserved for a real review from a satisfied client.",
    name: "Client C.",
    treatment: "Eyebrow Shaping",
    rating: 5,
  },
] as const;
