"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface VideoEmbedProps {
  videoId: string;
  platform?: "youtube" | "vimeo";
  title: string;
  thumbnail?: string;
  className?: string;
}

export default function VideoEmbed({
  videoId,
  platform = "youtube",
  title,
  thumbnail,
  className,
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl =
    platform === "youtube"
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
      : `https://player.vimeo.com/video/${videoId}?autoplay=1`;

  const thumbnailUrl =
    thumbnail ||
    (platform === "youtube"
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : undefined);

  return (
    <div
      className={cn(
        "relative w-full aspect-video rounded-2xl overflow-hidden bg-beige shadow-soft group",
        className
      )}
    >
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-champagne focus:ring-offset-2"
          aria-label={`Play video: ${title}`}
        >
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-beige to-ivory-dark" />
          )}
          <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/30 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-elegant transition-transform duration-300 group-hover:scale-110">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-charcoal ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-charcoal/60 to-transparent">
            <p className="text-white font-sans text-sm sm:text-base font-medium">
              {title}
            </p>
          </div>
        </button>
      ) : (
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}
