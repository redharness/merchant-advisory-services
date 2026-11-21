import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Prose, Section, ButtonLink, Eyebrow } from "@/components/ui";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — an independent payments advisory since 2016",
  description:
    "Merchant Advisory Services has been advising small business owners on card processing, point of sale and online payments since 2016. Our principles, our team, and where we are based.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Creating value for small business owners since 2016."
        intro="Merchant Advisory Services is an independent advisory practice. We are not a bank, we are not a processor, and we do not hold customer funds — which is exactly why we can tell you when your current setup is already fine."
      />

      <section className="relative border-b border-line">
        <div className="relative aspect-[16/7] w-full max-h-[420px] overflow-hidden">
          <Image
            src="/media/team-working.webp"
            alt="An advisor reviewing a merchant statement with a shop owner at the counter"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
          <p className="absolute bottom-5 left-0 right-0">
            <span className="container-x block text-[11px] uppercase tracking-[0.16em] text-white/70">
              From the practice&apos;s own film · New York
            </span>
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <Prose>
            <h2>What a merchant advisor is</h2>
            <p>
              A merchant advisor is an account executive who helps you make sense
              of your point-of-sale and e-commerce checkout, and of the fees that
              sit behind them. Having one matters for any business that accepts
              payments online or in person — not because the technology is hard,
              but because the pricing is deliberately opaque.
            </p>
            <p>
              Our advisors work across a number of payment service providers
              rather than for one, so you do not have to shop around to find out
              what the best rates for your type of business actually look like.
            </p>

            <h2>How we work</h2>
            <p>
              The practice runs on one rule: the customer is always right. In
              practice that means the audit comes first, the recommendation
              follows the numbers, and we write down the cases where switching is
              not worth it.
            </p>
            <p>
              We are a {site.legal}, with our registered office at{" "}
              {fullAddress}. Established in {site.founded}.
            </p>
          </Prose>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-line bg-white p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                The firm
              </p>
              <dl className="mt-4 space-y-3 text-[13px]">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Founded</dt>
                  <dd className="text-navy-900">{site.founded}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Entity</dt>
                  <dd className="text-navy-900">{site.legal}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Registered office</dt>
                  <dd className="text-right text-navy-900">
                    {site.address.line1}, {site.address.city},{" "}
                    {site.address.region} {site.address.postal}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Phone</dt>
                  <dd>
                    <a href={site.phoneHref} className="text-brand hover:underline">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Hours</dt>
                  <dd className="text-right text-navy-900">{site.hours}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-line bg-mist p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Providers we work across
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {site.payments.map((p) => (
                  <li
                    key={p}
                    className="rounded-full border border-line bg-white px-3 py-1 text-[12px] text-slate-600"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <section className="border-y border-line bg-mist">
        <div className="container-x py-20">
          <Eyebrow>Our principles</Eyebrow>
          <h2 className="mt-3 max-w-2xl font-display text-[30px] leading-tight text-navy-900 sm:text-[36px]">
            Three principles, printed rather than promised.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {site.principles.map((p) => (
              <div key={p.n} className="bg-white p-7">
                <p className="font-display text-[13px] text-brand">{p.n}</p>
                <h3 className="mt-3 font-display text-[21px] text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-line bg-white p-8">
            <p className="font-display text-[22px] leading-snug text-navy-900">
              &ldquo;The customer is always right.&rdquo;
            </p>
            <p className="mt-2 text-[13px] text-slate-500">
              Our stated rule, in our own words since {site.founded}.
            </p>
          </div>
        </div>
      </section>

      <Section id="team">
        <Eyebrow>Our team</Eyebrow>
        <h2 className="mt-3 font-display text-[30px] leading-tight text-navy-900 sm:text-[36px]">
          The people behind the advisory.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {site.leadership.map((person) => (
            <article
              key={person.name}
              className="flex gap-5 rounded-2xl border border-line p-6"
            >
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-navy-900 text-white">
                <span className="font-display text-[20px]">
                  {person.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-[20px] text-navy-900">
                  {person.name}
                </h3>
                <p className="text-[12px] uppercase tracking-[0.12em] text-brand">
                  {person.role}
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                  {person.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-[13px] text-slate-500">
          Want a named contact for your account? Ask, and you will get one
          person rather than a queue.
        </p>
      </Section>

      <Section className="border-t border-line">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-navy-950 px-8 py-12 text-white md:px-12">
          <div className="max-w-xl">
            <p className="flex items-center gap-4">
              <Image
                src="/brand/mas-mark-white.png"
                alt=""
                aria-hidden="true"
                width={506}
                height={274}
                className="h-8 w-auto"
              />
            </p>
            <h2 className="mt-4 font-display text-[26px] leading-tight sm:text-[32px]">
              Let&apos;s look at what you&apos;re paying.
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-white/60">
              One statement, one business day, one number.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/savings-quote" variant="light">
              Free savings quote
            </ButtonLink>
            <ButtonLink href="/contact" variant="outlineLight">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
