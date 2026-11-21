import Image from "next/image";
import { Eyebrow, Section, ButtonLink } from "@/components/ui";

/**
 * Walks through the structure of a real merchant statement rather than an
 * invented screenshot: the fields below are exactly the ones that appear on
 * the example statement published on merchantadvisoryservices.com.
 */
const fields = [
  {
    n: "01",
    label: "Total amount you submitted",
    what: "Gross card volume for the period.",
    why: "This is the number a processor quotes a rate against — and the one that hides the cost.",
  },
  {
    n: "02",
    label: "Third party transactions",
    what: "Settled volume less refunds, chargebacks and adjustments.",
    why: "If refunds are high, your effective cost per kept dollar is worse than the blended rate suggests.",
  },
  {
    n: "03",
    label: "Fees charged",
    what: "Everything taken by the processor, split into many small lines.",
    why: "Interchange at cost, network fees, then the processor's markup. Only the last part is negotiable.",
  },
  {
    n: "04",
    label: "Total amount funded to your bank",
    what: "What actually arrives after fees.",
    why: "The gap between 01 and 04 is the only number that matters — most statements never show it.",
  },
];

export function StatementWalkthrough() {
  return (
    <Section className="border-t border-line">
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
        <div>
          <Eyebrow>What we read</Eyebrow>
          <h2 className="mt-3 font-display text-[32px] leading-tight text-navy-900 sm:text-[38px]">
            A statement, line by line.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-600">
            Every merchant statement carries the same four totals, buried under
            headings that differ by processor. Here is the example statement and
            what each figure tells us.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-mist">
            <Image
              src="/media/statement-example.webp"
              alt="Example merchant card processing statement, showing total processed, fees charged and the amount funded to the bank"
              width={1400}
              height={885}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full"
            />
            <p className="border-t border-line bg-white px-4 py-3 text-[11.5px] text-slate-500">
              Example statement, as published by {`Merchant Advisory Services`}.
              A redacted real one works just as well.
            </p>
          </div>
        </div>

        <ol className="divide-y divide-line border-y border-line">
          {fields.map((f) => (
            <li key={f.n} className="flex gap-5 py-6">
              <span className="font-display text-[13px] text-brand">{f.n}</span>
              <div>
                <h3 className="font-display text-[19px] leading-snug text-navy-900">
                  {f.label}
                </h3>
                <p className="mt-1 text-[13.5px] text-slate-600">{f.what}</p>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
                  {f.why}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

export function CounterBand() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0">
        <Image
          src="/media/advisor-counter.webp"
          alt=""
          width={1600}
          height={1068}
          sizes="100vw"
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
      </div>
      <div className="container-x relative py-20 md:py-28">
        <div className="max-w-xl">
          <Eyebrow light>In the field</Eyebrow>
          <h2 className="mt-3 font-display text-[30px] leading-tight text-white sm:text-[36px]">
            We have stood at the counter.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/65">
            Terminals get installed in cafés, salons, workshops and shops — by
            people who then have to train a team on them. Advice that ignores the
            counter is advice nobody follows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services#pos" variant="light">
              See the terminals
            </ButtonLink>
            <ButtonLink href="/how-it-works" variant="outlineLight">
              How we install
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
