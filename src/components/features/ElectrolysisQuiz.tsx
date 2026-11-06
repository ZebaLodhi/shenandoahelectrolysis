"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

interface QuizStep {
  question: string;
  options: string[];
}

const steps: QuizStep[] = [
  {
    question: "What is your primary hair removal goal?",
    options: [
      "Permanent removal",
      "Long-term reduction",
      "I'm exploring options",
    ],
  },
  {
    question: "Which area(s) are you most interested in treating?",
    options: ["Face", "Body", "Both", "I'm not sure yet"],
  },
  {
    question: "Have you tried other hair removal methods?",
    options: [
      "Shaving",
      "Waxing",
      "Laser",
      "Depilatory creams",
      "Multiple methods",
      "None",
    ],
  },
  {
    question: "What is the hair color in the area you'd like to treat?",
    options: ["Dark (black/brown)", "Light (blonde/red)", "Gray/White", "Mixed"],
  },
  {
    question: "What is your skin tone?",
    options: ["Fair", "Medium", "Dark", "Very dark"],
  },
];

function getPersonalizedInsights(answers: string[]): string[] {
  const insights: string[] = [];

  insights.push(
    "Electrolysis is the only method of permanent hair removal recognized by the FDA, making it an excellent choice for achieving lasting results."
  );

  if (answers[0] === "Permanent removal") {
    insights.push(
      "Since permanent removal is your goal, electrolysis is uniquely suited to help you achieve it. Unlike other methods, electrolysis permanently disables treated hair follicles."
    );
  } else if (answers[0] === "Long-term reduction") {
    insights.push(
      "While your goal is long-term reduction, you may be pleased to know that electrolysis actually offers permanent results — treated follicles do not regrow hair."
    );
  } else {
    insights.push(
      "It's great that you're exploring your options. Electrolysis is worth serious consideration as the only truly permanent solution for hair removal."
    );
  }

  if (answers[1] === "Face") {
    insights.push(
      "Facial electrolysis is one of the most popular treatment areas. The precision of electrolysis makes it ideal for delicate facial areas like the upper lip, chin, and eyebrows."
    );
  } else if (answers[1] === "Body") {
    insights.push(
      "Electrolysis can effectively treat body areas including arms, legs, underarms, bikini line, chest, and back. Treatment plans are customized based on the size and characteristics of the area."
    );
  } else if (answers[1] === "Both") {
    insights.push(
      "Electrolysis works beautifully on both facial and body areas. Many clients address multiple treatment areas, and a personalized plan can be developed to prioritize based on your goals."
    );
  }

  if (answers[2] === "Laser") {
    insights.push(
      "Having tried laser, you may appreciate that electrolysis works on hair that laser cannot effectively treat — including light, gray, and white hair. It's also effective on all skin tones."
    );
  } else if (answers[2] === "Multiple methods") {
    insights.push(
      "Having tried multiple methods, you understand the limitations of temporary hair removal. Electrolysis offers a permanent solution that frees you from the cycle of repeated treatments."
    );
  }

  if (
    answers[3] === "Light (blonde/red)" ||
    answers[3] === "Gray/White" ||
    answers[3] === "Mixed"
  ) {
    insights.push(
      "This is especially relevant for you: electrolysis is effective on all hair colors, including blonde, red, gray, and white hair. Laser treatments typically require dark hair pigment to work, but electrolysis does not — it targets the follicle directly."
    );
  }

  if (answers[4] === "Dark" || answers[4] === "Very dark") {
    insights.push(
      "Electrolysis is safe and effective for all skin tones, including dark and very dark skin. Unlike some laser treatments that may carry higher risks for darker skin tones, electrolysis works independently of skin pigment."
    );
  }

  return insights;
}

export default function ElectrolysisQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = useCallback(
    (answer: string) => {
      const newAnswers = [...answers, answer];
      setAnswers(newAnswers);

      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResults(true);
      }
    },
    [answers, currentStep]
  );

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResults(false);
  };

  const progress = showResults
    ? 100
    : ((currentStep) / steps.length) * 100;

  if (showResults) {
    const insights = getPersonalizedInsights(answers);

    return (
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <div className="mb-10">
          <div className="h-1 bg-beige rounded-full overflow-hidden">
            <div
              className="h-full bg-champagne rounded-full transition-all duration-500"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage/15 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-sage"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="font-serif text-display-sm text-charcoal mb-3">
              Electrolysis May Be an Excellent Option for You
            </h2>
            <p className="font-sans text-warm-gray leading-relaxed">
              Based on your responses, here&apos;s what you should know:
            </p>
          </div>

          <div className="space-y-4 mb-10">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-ivory rounded-xl p-4"
              >
                <div className="w-6 h-6 rounded-full bg-sage/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3.5 h-3.5 text-sage-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-sans text-deep-brown leading-relaxed text-sm">
                  {insight}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-sage/10 rounded-xl p-6 mb-8 text-center">
            <p className="font-serif text-lg text-charcoal mb-2">
              The Best Next Step
            </p>
            <p className="font-sans text-warm-gray text-sm leading-relaxed">
              The best way to determine if electrolysis is right for you is to
              schedule a consultation with Gillian. She&apos;ll assess your
              individual needs and create a personalized treatment plan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 bg-champagne hover:bg-champagne/90 text-charcoal font-sans font-medium px-8 py-3.5 rounded-full transition-colors"
            >
              Book a Consultation
            </Link>
            <button
              onClick={handleRestart}
              className="font-sans text-sm text-taupe hover:text-charcoal transition-colors"
            >
              Take the Quiz Again
            </button>
          </div>

          <p className="font-sans text-xs text-taupe-light text-center mt-8 leading-relaxed">
            This tool is for educational purposes only and does not constitute
            medical advice. Individual results may vary. A professional
            consultation is the best way to understand your treatment options.
          </p>
        </div>
      </div>
    );
  }

  const step = steps[currentStep];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <span className="font-sans text-sm text-taupe">
            Question {currentStep + 1} of {steps.length}
          </span>
          <span className="font-sans text-sm text-taupe">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1 bg-beige rounded-full overflow-hidden">
          <div
            className="h-full bg-champagne rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-8 text-center">
          {step.question}
        </h2>
        <div className="space-y-3">
          {step.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="w-full text-left px-6 py-4 rounded-xl border-2 border-beige hover:border-champagne hover:bg-champagne/5 transition-all font-sans text-deep-brown group"
            >
              <span className="flex items-center justify-between">
                <span>{option}</span>
                <svg
                  className="w-5 h-5 text-beige group-hover:text-champagne transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {currentStep > 0 && (
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setCurrentStep(currentStep - 1);
                setAnswers(answers.slice(0, -1));
              }}
              className="font-sans text-sm text-taupe hover:text-charcoal transition-colors"
            >
              ← Back to previous question
            </button>
          </div>
        )}
      </div>

      <p className="font-sans text-xs text-taupe-light text-center mt-6">
        This educational tool does not constitute medical advice. Individual
        results may vary.
      </p>
    </div>
  );
}
