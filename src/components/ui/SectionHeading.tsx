import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  light = false,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div className={cn("max-w-3xl mb-12 sm:mb-16", alignmentClasses[align], className)}>
      {eyebrow && (
        <p
          className={cn(
            "font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase mb-4",
            light ? "text-champagne-light" : "text-champagne-dark"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif font-semibold text-display-sm sm:text-display-md lg:text-display-lg",
          light ? "text-ivory" : "text-charcoal",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-ivory/80" : "text-warm-gray"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 w-16 h-px bg-champagne",
          align === "center" && "mx-auto",
          align === "right" && "ml-auto"
        )}
      />
    </div>
  );
}
