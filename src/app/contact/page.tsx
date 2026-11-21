import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — ${site.phone}, ${site.email}, ${fullAddress}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to an advisor."
        intro="Questions about a statement, a terminal, or a quote you have already received. We answer during business hours and usually within the same day."
      />

      <div className="container-x grid gap-12 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-20">
        <div>
          <dl className="space-y-8">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href={site.phoneHref}
                  className="font-display text-[24px] text-navy-900 hover:text-brand"
                >
                  {site.phone}
                </a>
                <p className="mt-1 text-[12px] text-slate-500">{site.hours}</p>
                {site.fax && (
                  <p className="mt-1 text-[12px] text-slate-500">Fax {site.fax}</p>
                )}
              </dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Email
              </dt>
              <dd className="mt-2 space-y-1 text-[15px]">
                <a
                  href={`mailto:${site.email}`}
                  className="block break-all text-navy-900 hover:text-brand"
                >
                  {site.email}
                </a>
                <a
                  href={`mailto:${site.helpEmail}`}
                  className="block break-all text-navy-900 hover:text-brand"
                >
                  {site.helpEmail}
                </a>
              </dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Office
              </dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-navy-900">
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.region} {site.address.postal}
              </dd>
            </div>

            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                For a quote
              </dt>
              <dd className="mt-2 text-[14px] leading-relaxed text-slate-600">
                Statement uploads go through the{" "}
                <a href="/savings-quote" className="text-brand hover:underline">
                  savings quote
                </a>{" "}
                form so the file reaches the right queue.
              </dd>
            </div>
          </dl>
        </div>

        <div id="partner" className="scroll-mt-24">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
