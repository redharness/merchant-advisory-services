"use client";

import { useRef, useState } from "react";
import Image from "next/image";

/**
 * The 20-second trade-in film from the practice's own channel. Served from
 * /public/media rather than embedded: no player cookies, no third-party JS,
 * and nothing buffered until the poster is clicked.
 */
export function TradeInFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  function play() {
    setStarted(true);
    // The element mounts on this click, so play in the next frame.
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = muted;
      void v.play().catch(() => {
        /* Autoplay policy can still refuse; the controls are visible. */
      });
    });
  }

  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-navy-950">
      <div className="relative aspect-video">
        {started ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full"
            poster="/media/pos-trade-in-poster.webp"
            controls
            playsInline
            preload="auto"
            muted={muted}
            aria-label="Get a new POS, on us — a 20-second look at what a terminal change involves"
          >
            <source src="/media/pos-trade-in.mp4" type="video/mp4" />
            <source src="/media/pos-trade-in.webm" type="video/webm" />
            <track
              kind="captions"
              src="/media/pos-trade-in.en.vtt"
              srcLang="en"
              label="English"
              default
            />
          </video>
        ) : (
          <button
            type="button"
            onClick={play}
            className="group absolute inset-0 h-full w-full text-left"
            aria-label="Play the 20-second trade-in film, 0:20"
          >
            <Image
              src="/media/pos-trade-in-poster.webp"
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 55vw"
              className="object-cover opacity-85 transition-opacity group-hover:opacity-100"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 grid place-items-center"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="ml-1 h-6 w-6 text-navy-900"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/90 to-transparent p-5"
            >
              <span className="block text-[11px] uppercase tracking-[0.14em] text-teal">
                Film · 0:20
              </span>
              <span className="mt-1 block font-display text-[19px] text-white">
                Get a new POS, on us.
              </span>
            </span>
          </button>
        )}
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-3">
        <p className="text-[12px] text-white/50">
          Merchant Advisory Services · 0:20
        </p>
        {started && (
          <button
            type="button"
            onClick={() => {
              const v = videoRef.current;
              if (!v) return;
              v.muted = !v.muted;
              setMuted(v.muted);
            }}
            className="rounded-full border border-white/25 px-3 py-1.5 text-[12px] font-medium text-white/80 transition-colors hover:border-white/60 hover:text-white"
            aria-pressed={muted}
          >
            {muted ? "Sound on" : "Sound off"}
          </button>
        )}
      </figcaption>
    </figure>
  );
}
