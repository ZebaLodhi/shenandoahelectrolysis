"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  posterAlt?: string;
  aspectRatio?: string;
  className?: string;
}

export default function VideoPlayer({
  src,
  poster,
  posterAlt = "Video thumbnail",
  aspectRatio = "aspect-video",
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  return (
    <div className={`relative ${aspectRatio} rounded-xl overflow-hidden shadow-soft ${className}`}>
      {!isPlaying && (
        <>
          {poster ? (
            <Image
              src={poster}
              alt={posterAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <video
              src={src}
              className="absolute inset-0 w-full h-full object-cover"
              muted
              playsInline
              preload="metadata"
            />
          )}
          <div className="absolute inset-0 bg-charcoal/20" />
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play video"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-charcoal ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        </>
      )}
      {isPlaying && (
        <video
          ref={videoRef}
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
          controls
          playsInline
          autoPlay
        />
      )}
    </div>
  );
}
