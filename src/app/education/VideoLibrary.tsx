// =============================================================================
// HOW TO ADD A NEW VIDEO:
// 1. Upload your video to YouTube or Vimeo
// 2. Copy the video ID:
//    - YouTube: the part after "v=" in the URL (e.g., dQw4w9WgXcQ)
//    - Vimeo: the number in the URL (e.g., 123456789)
// 3. Add a new entry to the 'videos' array below
// 4. Fill in: id (unique string), title, description, category, duration
// 5. Set youtubeId, vimeoId, OR mp4Src (for self-hosted .mp4 in /public/images/)
// 6. Optionally add a custom thumbnailUrl (otherwise YouTube thumbnail is used)
//
// HOW TO CHANGE A VIDEO'S CATEGORY:
// - Update the 'category' field to match one of the CATEGORIES below
//
// HOW TO REORDER VIDEOS:
// - Move the video object up or down in the array — first item appears first
//
// HOW TO FEATURE A VIDEO:
// - Set featured: true on the video you want highlighted at the top
// =============================================================================

"use client";

import { useState } from "react";

interface Video {
  id: string;
  title: string;
  description: string;
  category: string;
  youtubeId?: string;
  vimeoId?: string;
  mp4Src?: string;
  thumbnailUrl?: string;
  duration?: string;
  featured?: boolean;
}

const CATEGORIES = [
  "All Videos",
  "Electrolysis Explained",
  "How It Works",
  "Your First Appointment",
  "Before & Aftercare",
  "FAQs & Myths",
  "Hair Growth Science",
  "Skin Care Tips",
];

// ─── VIDEO LIBRARY ──────────────────────────────────────────────────────────
// Add, remove, or reorder videos here. See instructions above.
const videos: Video[] = [
  {
    id: "video-1",
    title: "Welcome to Shenandoah Electrolysis",
    description:
      "Gillian introduces her practice and shares her passion for helping clients achieve permanent hair removal with personalized care.",
    category: "Electrolysis Explained",
    mp4Src: "/images/video-intro.mp4",
    duration: "0:43",
    featured: true,
  },
  {
    id: "video-2",
    title: "Inside the Treatment Room",
    description:
      "Take a look at Gillian's professional treatment environment and learn about the care and precision that goes into every electrolysis session.",
    category: "How It Works",
    mp4Src: "/images/video-vertical-1.mp4",
    duration: "1:21",
  },
  {
    id: "video-3",
    title: "Your Electrolysis Journey",
    description:
      "Gillian walks you through what to expect during your electrolysis journey — from the initial consultation to your permanent results.",
    category: "Your First Appointment",
    mp4Src: "/images/video-vertical-2.mp4",
    duration: "1:17",
  },
  {
    id: "video-4",
    title: "Before & After Your Treatment: Essential Care Tips",
    description:
      "Learn how to prepare your skin before electrolysis and the best aftercare practices for optimal healing and results.",
    category: "Before & Aftercare",
    // youtubeId: "YOUR_YOUTUBE_ID_HERE",
    duration: "7:30",
  },
  {
    id: "video-5",
    title: "Electrolysis Myths Debunked",
    description:
      "From pain levels to permanence, Gillian addresses the most common misconceptions about electrolysis with facts and first-hand experience.",
    category: "FAQs & Myths",
    // youtubeId: "YOUR_YOUTUBE_ID_HERE",
    duration: "9:18",
  },
  {
    id: "video-6",
    title: "Understanding Hair Growth Cycles",
    description:
      "Why does electrolysis require multiple sessions? Learn about the anagen, catagen, and telogen phases and how they affect your treatment plan.",
    category: "Hair Growth Science",
    // youtubeId: "YOUR_YOUTUBE_ID_HERE",
    duration: "5:45",
  },
];

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

function VideoThumbnail({
  video,
  large,
  onClick,
}: {
  video: Video;
  large?: boolean;
  onClick: () => void;
}) {
  const thumbnail = video.thumbnailUrl
    ? video.thumbnailUrl
    : video.youtubeId
      ? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`
      : null;

  return (
    <button
      onClick={onClick}
      className={`group relative block w-full overflow-hidden rounded-xl bg-beige ${
        large ? "aspect-video" : "aspect-video"
      } focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2`}
      aria-label={`Play video: ${video.title}`}
    >
      {thumbnail ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : video.mp4Src ? (
        <video
          src={video.mp4Src}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sage-light/40 to-beige">
          <div className="text-center">
            <PlayIcon className="mx-auto h-12 w-12 text-taupe/40" />
            <p className="mt-2 font-sans text-xs text-taupe/60">
              Video coming soon
            </p>
          </div>
        </div>
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-soft-lg transition-transform duration-300 group-hover:scale-110">
          <PlayIcon className="ml-1 h-6 w-6 text-charcoal" />
        </div>
      </div>
      {video.duration && (
        <span className="absolute bottom-3 right-3 rounded-md bg-charcoal/80 px-2 py-0.5 font-sans text-xs text-white">
          {video.duration}
        </span>
      )}
    </button>
  );
}

function VideoModal({
  video,
  onClose,
}: {
  video: Video;
  onClose: () => void;
}) {
  const hasEmbed = video.youtubeId || video.vimeoId;
  const hasMp4 = !!video.mp4Src;
  const embedUrl = video.youtubeId
    ? `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`
    : video.vimeoId
      ? `https://player.vimeo.com/video/${video.vimeoId}?autoplay=1`
      : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
          aria-label="Close video"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
        <div className="overflow-hidden rounded-xl bg-charcoal shadow-elegant">
          {hasMp4 ? (
            <div className="aspect-video bg-black flex items-center justify-center">
              <video
                src={video.mp4Src}
                className="max-h-full max-w-full"
                controls
                autoPlay
                playsInline
              />
            </div>
          ) : hasEmbed && embedUrl ? (
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={video.title}
              />
            </div>
          ) : (
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-charcoal to-deep-brown">
              <div className="text-center px-8">
                <PlayIcon className="mx-auto h-16 w-16 text-champagne/60" />
                <p className="mt-4 font-serif text-2xl text-white">
                  {video.title}
                </p>
                <p className="mt-2 font-sans text-sm text-white/60">
                  Video coming soon
                </p>
              </div>
            </div>
          )}
          <div className="p-6">
            <h3 className="font-serif text-xl text-white">{video.title}</h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">
              {video.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoLibrary() {
  const [activeCategory, setActiveCategory] = useState("All Videos");
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const featuredVideo = videos.find((v) => v.featured) || videos[0];
  const filteredVideos =
    activeCategory === "All Videos"
      ? videos.filter((v) => v.id !== featuredVideo?.id)
      : videos.filter(
          (v) => v.category === activeCategory && v.id !== featuredVideo?.id
        );

  return (
    <>
      {/* Featured Video */}
      {featuredVideo && activeCategory === "All Videos" && (
        <section className="mb-16">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-widest text-champagne">
            Featured Video
          </p>
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <VideoThumbnail
                video={featuredVideo}
                large
                onClick={() => setActiveVideo(featuredVideo)}
              />
            </div>
            <div className="flex flex-col justify-center lg:col-span-2">
              <span className="inline-block w-fit rounded-full bg-sage-light/30 px-3 py-1 font-sans text-xs text-sage-dark">
                {featuredVideo.category}
              </span>
              <h2 className="mt-3 font-serif text-display-sm text-charcoal">
                {featuredVideo.title}
              </h2>
              <p className="mt-3 font-sans text-base leading-relaxed text-warm-gray">
                {featuredVideo.description}
              </p>
              <button
                onClick={() => setActiveVideo(featuredVideo)}
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-charcoal px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-deep-brown"
              >
                <PlayIcon className="h-4 w-4" />
                Watch Now
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <div className="mb-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 font-sans text-sm transition-all ${
              activeCategory === cat
                ? "bg-charcoal text-white shadow-soft"
                : "bg-beige/60 text-warm-gray hover:bg-beige hover:text-charcoal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      {filteredVideos.length > 0 ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <article key={video.id} className="group">
              <VideoThumbnail
                video={video}
                onClick={() => setActiveVideo(video)}
              />
              <div className="mt-4">
                <span className="inline-block rounded-full bg-sage-light/30 px-3 py-0.5 font-sans text-xs text-sage-dark">
                  {video.category}
                </span>
                <h3 className="mt-2 font-serif text-lg text-charcoal transition-colors group-hover:text-deep-brown">
                  {video.title}
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-warm-gray line-clamp-2">
                  {video.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <p className="font-sans text-warm-gray">
            No videos in this category yet. Check back soon!
          </p>
        </div>
      )}

      {/* Modal */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}
