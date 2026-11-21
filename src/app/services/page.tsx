import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Prose, Section, ButtonLink } from "@/components/ui";
import { TerminalGallery } from "@/components/TerminalGallery";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — statement audit, pricing, POS and e-commerce",
  description:
    "Statement audits, interchange-plus pricing, point of sale, e-commerce and ACH for small businesses. See exactly what each service covers and what it costs you to start.",
};

const services = [
  {
    id: "audit",
    n: "01",
    title: "Statement audit",
    lede: "The starting point for almost every client: one statement, read properly.",
    body: [
      "A processor statement is laid out to be survivable rather than readable. Ours is a line-by-line classification of every charge into three buckets: interchange and network assessments (pass-through, set by the card networks and not negotiable), processor markup (what your provider charges on top), and avoidable fees (statement fees, PCI non-compliance fees, per-batch charges, minimums).",
      "You get the schedule back with the working visible — the same numbers you can trace to your own statement — plus the rate you are effectively paying as a percentage of card volume.",
    ],
    includes: [
      "Fee-by-fee classification of one statement",
      "Effective rate calculation against your own volume",
      "Written summary of what is recoverable and what is not",
      "A recommendation, including when the answer is stay put",
    ],
  },
  {
    id: "pricing",
    n: "02",
    title: "Interchange-plus pricing",
    lede: "The structural fix behind most of the savings we find.",
    body: [
      "Flat-rate pricing blends interchange and markup into one percentage. When your card mix changes — more rewards cards, more online orders, more commercial cards — that blended rate quietly stops matching your cost, and the difference goes to your provider.",
      "Interchange-plus separates the two. The card networks' published rates pass through at cost, and the provider's fee sits on top as a stated amount. Your cost tracks your actual transactions instead of a number set at signing.",
    ],
    includes: [
      "Card-mix analysis on your historical volume",
      "Side-by-side pricing at your real transaction profile",
      "Contract review before you sign anything",
      "Migration handled with your existing provider where possible",
    ],
  },
  {
    id: "pos",
    n: "03",
    title: "Point of sale",
    lede: "Hardware chosen for the counter you actually have.",
    body: [
      "Countertop terminals, mobile readers and virtual terminals all solve different problems. A restaurant with a patio has different needs from a salon with a single chair and a different one again from a contractor taking deposits in a van.",
      "We work across the major POS providers and payment gateways rather than a single one, so the recommendation follows your workflow. Devices arrive configured, and we handle the reprogramming of an existing terminal where that is possible.",
    ],
    includes: [
      "Terminal, mobile reader or virtual terminal selection",
      "Card-present and card-not-present setups",
      "Device configuration before shipping",
      "Reprogramming support for existing hardware",
    ],
  },
  {
    id: "ecommerce",
    n: "04",
    title: "E-commerce & ACH",
    lede: "For businesses that have outgrown card-only checkout.",
    body: [
      "Online checkout brings its own fee structure: gateway fees, per-transaction charges and a different risk profile to card-present. We review your e-commerce setup separately from your counter, because the economics are not the same.",
      "For invoices and recurring billing, ACH (bank-to-bank) is often materially cheaper than a card. We implement it alongside card payments rather than replacing them, so customers keep the option they expect.",
    ],
    includes: [
      "Gateway and e-commerce fee review",
      "Recurring billing setup",
      "ACH for invoices and subscriptions",
      "Chargeback process review",
    ],
  },
  {
    id: "funding",
    n: "05",
    title: "Next-day funding",
    lede: "Settlement speed matters when payroll and card receipts share a bank account.",
    body: [
      "Settlement timing decides how much working capital is sitting in transit at any moment. Faster funding means card receipts are usable sooner against supplier terms and payroll.",
      "We look at your batch timing and settlement schedule to see whether faster funding is available at your volume, and what it costs relative to the float it frees up.",
    ],
    includes: [
      "Settlement schedule and batch timing review",
      "Funding speed options at your volume",
      "Cost against float comparison",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Five things, each done properly."
        intro="Everything we do begins with your statement and ends with a number you can check. No service here requires a long-term contract to start."
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/savings-quote">Get a free savings quote</ButtonLink>
          <ButtonLink href="/how-it-works" variant="ghost">
            How the audit works
          </ButtonLink>
        </div>
      </PageHero>

      <nav aria-label="Services" className="border-b border-line bg-white">
        <div className="container-x flex gap-2 overflow-x-auto py-4">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap rounded-full border border-line px-4 py-2 text-[13px] text-slate-600 transition-colors hover:border-navy-900 hover:text-navy-900"
            >
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 border-b border-line ${
            i % 2 === 1 ? "bg-mist" : "bg-white"
          }`}
        >
          <div className="container-x grid gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-20">
            <div className="md:sticky md:top-28 md:self-start">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-400">
                {s.n}
              </p>
              <h2 className="mt-3 font-display text-[30px] leading-tight text-navy-900">
                {s.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-brand">{s.lede}</p>
            </div>

            <div>
              <Prose>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </Prose>

              {s.id === "audit" && (
                <figure className="mt-8 overflow-hidden rounded-2xl border border-line bg-mist">
                  <Image
                    src="/media/statement-example.webp"
                    alt="Example merchant processing statement showing total processed, fees charged and amount funded"
                    width={1400}
                    height={885}
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="h-auto w-full"
                  />
                  <figcaption className="border-t border-line bg-white px-4 py-2.5 text-[11.5px] text-slate-500">
                    The example statement we use to explain the four totals:
                    processed, third-party, fees charged, funded to bank.
                  </figcaption>
                </figure>
              )}

              {s.id === "ecommerce" && (
                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      src: "/media/retail-counter.webp",
                      alt: "A small retail shop with a point-of-sale counter and shelving",
                      label: "In store",
                    },
                    {
                      src: "/media/barista-pos.webp",
                      alt: "A barista taking an order on a point-of-sale screen",
                      label: "Quick service",
                    },
                    {
                      src: "/media/advisor-counter.webp",
                      alt: "A cashier serving a customer at a card terminal",
                      label: "Front desk",
                    },
                  ].map((img) => (
                    <figure key={img.src} className="overflow-hidden rounded-xl border border-line">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, 220px"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="bg-white px-3 py-2 text-[11.5px] text-slate-500">
                        {img.label}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}

              <div className="mt-8 rounded-2xl border border-line bg-white p-6">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  What you get
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {s.includes.map((inc) => (
                    <li key={inc} className="flex gap-3 text-[14px] text-slate-700">
                      <span aria-hidden="true" className="mt-[3px] text-teal">
                        ✓
                      </span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              {s.id === "pos" && (
                <div className="mt-10">
                  <h3 className="font-display text-[22px] text-navy-900">
                    Devices we supply
                  </h3>
                  <p className="mt-2 max-w-xl text-[14px] leading-relaxed text-slate-600">
                    Product photography from our own range — the same terminals
                    we configure and deliver.
                  </p>
                  <div className="mt-6">
                    <TerminalGallery />
                  </div>
                  <p className="mt-4 text-[11.5px] text-slate-400">
                    Product images courtesy of the respective manufacturers.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <Section>
        <div className="rounded-3xl bg-navy-950 px-8 py-14 text-center text-white md:px-16">
          <h2 className="font-display text-[28px] leading-tight sm:text-[34px]">
            Not sure which one you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70">
            Start with the audit. It tells us — and you — which of the rest is
            actually worth doing.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/savings-quote" variant="light">
              Get a free savings quote
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="outlineLight">
              Call {site.phone}
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
