"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // NOTE: This form currently handles submission on the client only.
    // To connect to a real backend, replace this with a fetch() call
    // to your form handling endpoint (e.g., Formspree, Netlify Forms,
    // or a custom API route at /api/contact).
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 800);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage-light/50 bg-sage-light/10 p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage-light/30">
          <svg
            className="h-7 w-7 text-sage-dark"
            viewBox="0 0 24 24"
            fill="none"
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
        </div>
        <h3 className="mt-4 font-serif text-xl text-charcoal">
          Message Sent
        </h3>
        <p className="mt-2 font-sans text-warm-gray">
          Thank you for reaching out. Gillian will get back to you as soon as
          possible.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 font-sans text-sm font-medium text-champagne underline underline-offset-4 transition-colors hover:text-charcoal"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-beige bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block font-sans text-sm font-medium text-charcoal"
          >
            Name <span className="text-champagne">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-beige bg-ivory px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe-light transition-colors focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block font-sans text-sm font-medium text-charcoal"
          >
            Email <span className="text-champagne">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-beige bg-ivory px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe-light transition-colors focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block font-sans text-sm font-medium text-charcoal"
          >
            Phone <span className="text-taupe-light text-xs">(optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full rounded-lg border border-beige bg-ivory px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe-light transition-colors focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="mb-1.5 block font-sans text-sm font-medium text-charcoal"
          >
            Subject <span className="text-champagne">*</span>
          </label>
          <select
            id="subject"
            name="subject"
            required
            className="w-full rounded-lg border border-beige bg-ivory px-4 py-3 font-sans text-sm text-charcoal transition-colors focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
            defaultValue=""
          >
            <option value="" disabled>
              Select a subject
            </option>
            <option value="general">General Inquiry</option>
            <option value="booking">Booking Question</option>
            <option value="treatment">Treatment Information</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block font-sans text-sm font-medium text-charcoal"
        >
          Message <span className="text-champagne">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-none rounded-lg border border-beige bg-ivory px-4 py-3 font-sans text-sm text-charcoal placeholder:text-taupe-light transition-colors focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-charcoal px-8 py-3.5 font-sans text-sm font-medium text-white shadow-soft transition-all hover:bg-deep-brown hover:shadow-soft-lg disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
