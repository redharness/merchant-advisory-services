"use client";

import { useState } from "react";
import Image from "next/image";
import { TradeInFilm } from "@/components/TradeInFilm";

type Video = {
  id: string;
  title: string;
  blurb: string;
  duration: string;
  poster: string;
};

/**
 * Pulled from the practice's own YouTube channel. Posters are real frames from
 * each film, served from this site; the embed is only mounted on click, so the
 * homepage ships no third-party JavaScript and sets no player cookies.
 */
const videos: Video[] = [
  {
    id: "k5EIR0s5WnM",
    title: "What makes Merchant Advisory Services different",
    blurb:
      "The case for an independent advisor: one reader for the statement, no processor side to protect.",
    duration: "1:42",
    poster: "/media/about-film-poster.webp",
  },
  {
    id: "-D2cj_lvJQA",
    title: "Cut costs to increase revenue",
    blurb:
      "Where the money actually leaks in a small business — and why processing is the easiest line to fix.",
    duration: "1:48",
    poster: "/media/cut-costs-poster.webp",
  },
];

export function VideoSection() {
  const [playing, setPlaying] = useState<string | null>(null);
  const active = videos.find((v) => v.id === playing);

  return (
    <section className="border-y border-line bg-mist">
      <div className="container-x py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
              Watch
            </p>
            <h2 className="mt-3 font-display text-[32px] leading-tight text-navy-900 sm:text-[38px]">
              Straight from the practice.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Two short films from our own channel. No sales script — the same
              points we make on the phone.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@merchantadvisoryservices"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-brand hover:underline"
          >
            All videos on YouTube →
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.25fr_0.75fr]">
          <div className="overflow-hidden rounded-2xl bg-navy-950">
            <div className="relative aspect-video">
              {active ? (
                <iframe
                  key={active.id}
                  src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(videos[0].id)}
                  className="group absolute inset-0 h-full w-full"
                  aria-label={`Play video: ${videos[0].title}`}
                >
                  <Image
                    src={videos[0].poster}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover opacity-80 transition-opacity group-hover:opacity-100"
                  />
                  <span className="absolute inset-0 grid place-items-center" aria-hidden="true">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-lg transition-transform group-hover:scale-105">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-1 h-6 w-6 text-navy-900"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/90 to-transparent p-5 text-left"
                  >
                    <span className="block text-[11px] uppercase tracking-[0.14em] text-teal">
                      Featured · {videos[0].duration}
                    </span>
                    <span className="mt-1 block font-display text-[19px] text-white">
                      {videos[0].title}
                    </span>
                  </span>
                </button>
              )}
            </div>
            {active && (
              <div className="border-t border-white/10 p-5">
                <p className="font-display text-[18px] text-white">{active.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-white/60">
                  {active.blurb}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {videos.slice(1).map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setPlaying(v.id)}
                className="group flex gap-4 rounded-2xl border border-line bg-white p-4 text-left transition-colors hover:border-navy-900"
              >
                <span className="relative aspect-video w-40 shrink-0 overflow-hidden rounded-lg bg-navy-900">
                  <Image
                    src={v.poster}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 160px"
                    className="object-cover"
                  />
                  <span className="absolute inset-0 grid place-items-center bg-navy-950/25">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white/90">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="ml-0.5 h-3.5 w-3.5 text-navy-900"
                        aria-hidden="true"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </span>
                </span>
                <span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-slate-400">
                    {v.duration}
                  </span>
                  <span className="mt-1 block font-display text-[17px] leading-snug text-navy-900">
                    {v.title}
                  </span>
                  <span className="mt-1.5 block text-[12.5px] leading-relaxed text-slate-500">
                    {v.blurb}
                  </span>
                </span>
              </button>
            ))}

          </div>
        </div>

        <div className="mt-6 grid gap-6 rounded-2xl border border-line bg-white p-5 md:grid-cols-[1.15fr_0.85fr] md:items-center md:p-6">
          <TradeInFilm />
          <div className="md:pl-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
              Short film · 0:20
            </p>
            <h3 className="mt-3 font-display text-[24px] leading-tight text-navy-900">
              What a terminal change actually involves.
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
              Filmed by the practice, not a stock agency. It is served from this
              site with no player cookies and nothing buffered until you press
              play.
            </p>
            <a
              href="https://youtu.be/xKDO1ZfWJgo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-medium text-brand hover:underline"
            >
              Also on YouTube
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <p className="mt-6 text-[11.5px] leading-relaxed text-slate-400">
          Posters are frames from the films themselves, served from this site. The
          YouTube player loads only when you press play.
        </p>
      </div>
    </section>
  );
}
