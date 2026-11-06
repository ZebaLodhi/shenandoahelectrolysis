import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  treatment?: string;
  rating?: number;
  className?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={cn(
            "w-4 h-4",
            star <= rating ? "text-champagne" : "text-beige"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({
  quote,
  name,
  treatment,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-8 sm:p-10 shadow-soft flex flex-col h-full",
        className
      )}
    >
      <svg
        className="w-8 h-8 text-champagne/40 mb-4 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
      </svg>
      <StarRating rating={rating} />
      <blockquote className="text-warm-gray text-base sm:text-lg leading-relaxed italic mb-6 flex-grow">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="border-t border-beige/50 pt-4">
        <p className="font-sans font-medium text-charcoal text-sm">{name}</p>
        {treatment && (
          <p className="text-taupe-light text-xs mt-1">{treatment}</p>
        )}
      </div>
    </div>
  );
}
