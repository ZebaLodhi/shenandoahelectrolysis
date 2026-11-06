"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => setLoaded(true);
    video.addEventListener("canplay", onCanPlay);

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      video.pause();
    }

    return () => video.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <>
      {/* Poster image shown while video loads */}
      {!loaded && (
        <Image
          src="/images/treatment-room.webp"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      )}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/treatment-room.webp"
      >
        <source src="/images/video-intro.mp4" type="video/mp4" />
      </video>
    </>
  );
}
