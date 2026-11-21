import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { QuoteForm } from "@/components/QuoteForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free savings quote",
  description:
    "Send one merchant statement and get a written savings quote within a business day. Free, no obligation, and no contract needed to receive your numbers.",
};

export default function SavingsQuotePage() {
  return (
    <>
      <PageHero
        eyebrow="Free savings quote"
        title="Send one statement. We'll do the reading."
        intro="The audit is free and carries no obligation. If your current pricing is already competitive, the quote will say so — that is a legitimate outcome and we will write it down."
      />

      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:py-20">
        <QuoteForm />

        <aside className="space-y-6">
          <div className="rounded-2xl border border-line bg-mist p-6">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              What to send
            </h2>
            <ul className="mt-4 space-y-3 text-[14px] text-slate-700">
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-teal">
                  1
                </span>
                One full month&apos;s merchant statement (PDF, PNG or JPG)
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-teal">
                  2
                </span>
                Roughly how many transactions a month
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true" className="text-teal">
                  3
                </span>
                What share of them are online
              </li>
            </ul>
            <p className="mt-4 text-[12px] leading-relaxed text-slate-500">
              No redaction needed. We use the statement for the audit only.
            </p>
          </div>

          <div className="rounded-2xl border border-line p-6">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Rather talk?
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
              Bring the statement to a call and we will walk through it with you.
            </p>
            <a
              href={site.phoneHref}
              className="mt-4 inline-block text-[15px] font-medium text-navy-900 hover:text-brand"
            >
              {site.phone}
            </a>
            <p className="mt-1 text-[12px] text-slate-500">{site.hours}</p>
          </div>

          <div className="rounded-2xl bg-navy-950 p-6 text-white">
            <p className="text-[13px] leading-relaxed text-white/70">
              {site.name} is an independent advisory firm. We are not a bank and
              do not hold customer deposits.
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-white/40">
              Quotes are produced on the figures you send; final pricing is
              subject to underwriting by the acquiring bank.
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
