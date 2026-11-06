"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
  disabled?: never;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-champagne text-charcoal hover:bg-champagne-dark hover:shadow-soft-lg focus:ring-champagne",
  secondary:
    "bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal/40 hover:bg-charcoal/5 focus:ring-charcoal/20",
  ghost:
    "bg-transparent text-charcoal hover:bg-charcoal/5 focus:ring-charcoal/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-xs",
  md: "px-8 py-3.5 text-sm",
  lg: "px-10 py-4 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-sans font-medium tracking-wide uppercase",
    "rounded-full transition-all duration-300 ease-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ivory",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, external } = props as ButtonAsLink;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseStyles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button", disabled } = props as ButtonAsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseStyles, disabled && "opacity-50 cursor-not-allowed")}
    >
      {children}
    </button>
  );
}
