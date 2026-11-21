import type { Metadata } from "next";
import { PageHero, Prose, Section, ButtonLink, Eyebrow } from "@/components/ui";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner with us",
  description:
    "Referral and partnership options for accountants, bookkeepers, POS resellers and business associations working with small merchants.",
};

const partners = [
  {
    title: "Accountants & bookkeepers",
    body: "You see the merchant fees on your clients' P&Ls before anyone else does. We audit the statement, you keep the client relationship, and we stay out of the bookkeeping.",
    points: ["Client-consented statement reviews", "Written audit you can attach to a review meeting", "No approach to your client without your say-so"],
  },
  {
    title: "POS resellers & installers",
    body: "If you install terminals and software, processing is the part you are usually asked about and least want to sell. We price it, you keep the installation.",
    points: ["Processing quotes at the point of install", "Hardware sourced or reprogrammed", "Referral handled in writing"],
  },
  {
    title: "Associations & chambers",
    body: "A member benefit that costs the association nothing: an independent audit and a written quote, with the savings visible to the member.",
    points: ["Member-only audit offer", "No cost to the association", "Reporting back to you on uptake"],
  },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="We work with the people merchants already trust."
        intro="Accountants, bookkeepers, POS installers and business associations all end up answering payment questions. We handle the pricing side, in writing, without touching the relationship you have."
      >
        <ButtonLink href="/contact#partner">Start a conversation</ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {partners.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl border border-line p-7"
            >
              <h2 className="font-display text-[21px] leading-snug text-navy-900">
                {p.title}
              </h2>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                {p.body}
              </p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-[13px] text-slate-600">
                    <span aria-hidden="true" className="text-teal">
                      ✓
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-line bg-mist">
        <div className="container-x grid gap-12 py-20 md:grid-cols-2 md:gap-16">
          <div>
            <Eyebrow>How referrals work</Eyebrow>
            <h2 className="mt-3 font-display text-[30px] leading-tight text-navy-900 sm:text-[36px]">
              In writing, before anything else.
            </h2>
            <Prose>
              <p>
                Any referral arrangement is agreed in writing and disclosed to
                the merchant. If a client is being introduced to us, they should
                know why — and know that the audit is free and the recommendation
                is theirs to reject.
              </p>
              <p>
                We will never approach a referred client directly without the
                introducer&apos;s consent, and we do not ask partners to
                recommend a switch they do not believe in.
              </p>
            </Prose>
          </div>

          <div className="rounded-2xl border border-line bg-white p-7">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Get in touch
            </h3>
            <dl className="mt-5 space-y-4 text-[14px]">
              <div>
                <dt className="text-[12px] text-slate-500">Phone</dt>
                <dd>
                  <a href={site.phoneHref} className="text-navy-900 hover:text-brand">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] text-slate-500">Email</dt>
                <dd>
                  <a
                    href={`mailto:${site.email}?subject=Partnership%20enquiry`}
                    className="break-all text-navy-900 hover:text-brand"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] text-slate-500">Office</dt>
                <dd className="text-navy-900">{fullAddress}</dd>
              </div>
            </dl>
            <div className="mt-6">
              <ButtonLink href="/contact#partner">Contact the partnership desk</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
