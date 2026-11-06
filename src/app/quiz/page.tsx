import type { Metadata } from "next";
import ElectrolysisQuiz from "@/components/features/ElectrolysisQuiz";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Is Electrolysis Right for Me? | Shenandoah Electrolysis",
  description:
    "Take our quick educational quiz to learn whether electrolysis may be a good fit for your hair removal goals. Takes about one minute.",
  openGraph: {
    title: "Is Electrolysis Right for Me? | Shenandoah Electrolysis",
    description:
      "Take our quick educational quiz to learn whether electrolysis may be a good fit for your hair removal goals.",
  },
};

export default function QuizPage() {
  return (
    <main className="bg-ivory min-h-screen">
      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-12 text-center">
        <Link
          href="/"
          className="inline-block font-sans text-sm text-taupe hover:text-charcoal transition-colors mb-8"
        >
          ← Back to Home
        </Link>
        <p className="text-sage-dark font-sans text-sm tracking-[0.2em] uppercase mb-4">
          Educational Tool
        </p>
        <h1 className="font-serif text-display-sm md:text-display-md text-charcoal mb-4">
          Is Electrolysis Right for Me?
        </h1>
        <p className="font-sans text-warm-gray leading-relaxed max-w-xl mx-auto">
          Answer a few quick questions to learn how electrolysis may help you
          achieve your hair removal goals. This takes about one minute.
        </p>
      </section>

      {/* Quiz */}
      <section className="px-6 pb-section">
        <ElectrolysisQuiz />
      </section>
    </main>
  );
}
