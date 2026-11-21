import Link from "next/link";
import Image from "next/image";
import { Badge, ButtonLink, Eyebrow, Section } from "@/components/ui";
import { StatementVisual } from "@/components/StatementVisual";
import { VideoSection } from "@/components/VideoSection";
import { TerminalGallery } from "@/components/TerminalGallery";
import { CounterBand } from "@/components/StatementWalkthrough";
import { site, fullAddress } from "@/lib/site";

const services = [
  {
    n: "01",
    href: "/services#audit",
    title: "Statement audit",
    body: "Send one recent statement. We classify every fee as pass-through, markup or avoidable, and total what is recoverable.",
  },
  {
    n: "02",
    href: "/services#pricing",
    title: "Interchange-plus pricing",
    body: "Stop paying a blended rate that changes with your card mix. Network rates pass through at cost, one stated fee on top.",
  },
  {
    n: "03",
    href: "/services#pos",
    title: "Point of sale",
    body: "Countertop terminals, mobile readers and virtual terminals — selected for your counter, configured before it ships.",
  },
  {
    n: "04",
    href: "/services#ecommerce",
    title: "E-commerce & ACH",
    body: "Online checkout, recurring billing and bank-to-bank payments for businesses that have outgrown card-only.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative border-b border-line bg-mist">
        <div className="container-x grid items-center gap-12 py-14 md:grid-cols-[1.02fr_1fr] md:py-24">
          <div className="rise">
            <Badge>
              {site.name} · Payments advisory since {site.founded}
            </Badge>
            <h1 className="mt-6 font-display text-[40px] leading-[1.04] tracking-tight text-navy-900 sm:text-[56px]">
              You are probably overpaying on card payments.
              <span className="block text-brand">
                We&apos;ll show you exactly where.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-slate-600">
              A blended rate hides the card networks&apos; real cost inside one
              number. Send us a statement and we&apos;ll break out what is
              pass-through, what is processor markup, and what is recoverable —
              in writing, within a business day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/savings-quote">Get a free savings quote</ButtonLink>
              <ButtonLink href="/how-it-works" variant="ghost">
                How the audit works
              </ButtonLink>
            </div>
            <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
              <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-navy-900">
                <Image
                  src="/media/tap-to-pay.webp"
                  alt="A customer tapping a card on a handheld terminal"
                  fill
                  sizes="(max-width: 640px) 112px, 112px"
                  className="object-cover"
                />
              </div>
              <p className="max-w-xs text-[12.5px] leading-relaxed text-slate-500">
                Terminals supplied, configured and delivered — most businesses
                switch without losing a day of trade.
              </p>
            </div>
            <p className="mt-5 max-w-md text-[12px] leading-relaxed text-slate-500">
              No obligation, and no contract needed to get your numbers.{" "}
              {site.name} is an independent advisory firm — we are not a bank.
            </p>
          </div>

          <div className="rise" style={{ animationDelay: "100ms" }}>
            <StatementVisual />
          </div>
        </div>
      </section>

      <div className="border-b border-line bg-white">
        <div className="container-x grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {[
            { k: String(site.founded), v: "Advisory practice founded" },
            { k: "1 day", v: "Typical quote turnaround" },
            { k: "Line by line", v: "How your statement is read" },
            { k: "4", v: "Payment providers we work across" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-display text-[26px] leading-none text-navy-900">
                {s.k}
              </p>
              <p className="mt-2 text-[12px] leading-snug text-slate-500">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Section>
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.4fr] md:gap-16">
          <div>
            <Eyebrow>Our principles</Eyebrow>
            <h2 className="mt-3 font-display text-[32px] leading-tight text-navy-900 sm:text-[38px]">
              Payments is the one line on your P&amp;L nobody explained.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              We read merchant statements for a living. These three principles
              are how we run the practice — they are on our about page because
              they are not marketing copy.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block text-[14px] font-medium text-brand hover:underline"
            >
              More about {site.name} →
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-1">
            {site.principles.map((p) => (
              <div key={p.n} className="flex gap-5 bg-white p-6">
                <Image
                  src={p.glyph}
                  alt=""
                  aria-hidden="true"
                  width={512}
                  height={512}
                  className="h-9 w-9 shrink-0 opacity-80"
                />
                <div>
                  <h3 className="font-display text-[19px] text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-slate-600">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-line">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-3 font-display text-[32px] leading-tight text-navy-900 sm:text-[38px]">
              Four services, done properly.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-[14px] font-medium text-brand hover:underline"
          >
            All services →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.n}
              href={s.href}
              className="group flex flex-col rounded-2xl border border-line p-7 transition-colors hover:border-navy-900 focus-visible:border-navy-900"
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400">
                {s.n}
              </p>
              <h3 className="mt-4 font-display text-[21px] text-navy-900">
                {s.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                {s.body}
              </p>
              <span className="mt-5 text-[13px] font-medium text-brand transition-transform group-hover:translate-x-0.5">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <VideoSection />

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Hardware</Eyebrow>
            <h2 className="mt-3 font-display text-[32px] leading-tight text-navy-900 sm:text-[38px]">
              Terminals we actually install.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Chosen for the counter they sit on, not for the commission they
              pay. Reprogrammed and tested before they reach you.
            </p>
          </div>
          <Link
            href="/services#pos"
            className="text-[14px] font-medium text-brand hover:underline"
          >
            All terminals →
          </Link>
        </div>
        <div className="mt-10">
          <TerminalGallery
            slugs={[
              "verifone-mx925",
              "clover-flex",
              "pax-a920",
              "clover-station",
            ]}
          />
        </div>
      </Section>

      <CounterBand />

      <section className="bg-navy-950 text-white">
        <div className="container-x py-20 md:py-24">
          <div className="max-w-2xl">
            <Eyebrow light>The process</Eyebrow>
            <h2 className="mt-3 font-display text-[32px] leading-tight sm:text-[38px]">
              Three steps to a number you can check.
            </h2>
          </div>

          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                t: "Send a statement",
                b: "One recent statement — PDF is fine. We ask how your customers pay so the card mix makes sense.",
              },
              {
                t: "We audit it line by line",
                b: "Every fee classified as pass-through, markup or avoidable. You get the schedule back with our working visible.",
              },
              {
                t: "Review the quote with us",
                b: "A short call on the savings and, if it makes sense, the switch — terminal included and pre-configured.",
              },
            ].map((step, i) => (
              <li key={step.t} className="border-t border-white/15 pt-6">
                <span className="font-display text-[15px] text-teal">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-[18px] font-medium">{step.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                  {step.b}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-wrap gap-3">
            <ButtonLink href="/savings-quote" variant="light">
              Start with your statement
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outlineLight">
              Call {site.phone}
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 rounded-3xl border border-line p-8 md:grid-cols-[1fr_auto] md:items-center md:p-12">
          <div>
            <h2 className="font-display text-[28px] leading-tight text-navy-900 sm:text-[34px]">
              Talk to an advisor, not a call centre.
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Our advisors work across {site.payments.join(", ")} — so you
              don&apos;t have to shop four providers to find out what your
              business should be paying.
            </p>
            <p className="mt-4 text-[13px] text-slate-500">
              {fullAddress} · {site.hours}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <ButtonLink href="/contact">Contact us</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghost">
              {site.phone}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
