import type { Metadata } from "next";
import { PageHero, Prose, Section } from "@/components/ui";
import { site, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & conditions",
  description: `Terms governing use of the ${site.name} website and the advisory services it describes.`,
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & conditions"
        intro={`These terms govern your use of ${site.domain} and the advisory services described on it.`}
      />

      <Section>
        <p className="mb-10 text-[12px] uppercase tracking-[0.14em] text-slate-400">
          Last updated 21 November 2026
        </p>

        <Prose>
          <h2>1. Who we are</h2>
          <p>
            {site.name} is a {site.legal} having its registered office at{" "}
            {site.address.line1}, {site.address.city}, {site.address.region}{" "}
            {site.address.postal}, United States. You can contact us by phone on{" "}
            <a href={site.phoneHref} className="text-brand underline">
              {site.phone}
            </a>{" "}
            or by email at{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline">
              {site.email}
            </a>
            .
          </p>

          <h2>2. What we do — and what we do not do</h2>
          <p>
            {site.name} is an independent payments advisory practice. We review
            merchant statements, compare processing arrangements and advise on
            point-of-sale and e-commerce setups.
          </p>
          <p>
            <strong>We are not a bank.</strong> We do not accept deposits, hold
            customer funds, issue cards, or act as an acquiring bank or a payment
            processor. Merchant accounts, card processing and settlement are
            provided by third-party acquiring banks and processors under their own
            terms. Card network rules and interchange rates are set by the card
            networks and are outside our control.
          </p>

          <h2>3. Audits and quotes</h2>
          <p>
            Statement reviews and written quotes are provided free of charge and
            without obligation. Quotes are prepared on the figures and volumes you
            supply. Final pricing, approval and the terms of any merchant account
            are subject to underwriting and agreement by the relevant acquiring
            bank or processor, and may differ from an indicative quote.
          </p>
          <p>
            Any savings figure we give is an estimate based on your submitted
            statement, not a guarantee of future cost. Your actual cost depends on
            your card mix, transaction profile and the terms you agree with your
            provider.
          </p>

          <h2>4. Your responsibilities</h2>
          <p>
            You confirm that information and statements you send us are
            accurate, that you are authorised to share them on behalf of the
            business, and that you will not use this website unlawfully or attempt
            to interfere with its operation.
          </p>

          <h2>5. Intellectual property</h2>
          <p>
            The content, design and marks on this website belong to {site.name} or
            its licensors. You may view and print pages for your own business use.
            You may not reproduce them commercially without permission.
          </p>

          <h2>6. Third-party names</h2>
          <p>
            Provider and card network names mentioned on this site are the
            trademarks of their respective owners. We are not affiliated with,
            endorsed by, or acting as an agent of any of them unless we say so in
            writing.
          </p>

          <h2>7. Liability</h2>
          <p>
            The website is provided as is. To the extent permitted by law, we are
            not liable for indirect or consequential loss arising from use of the
            site or from reliance on general information published on it. Nothing
            in these terms limits liability that cannot lawfully be limited.
          </p>

          <h2>8. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of New York, and the
            courts of New York have exclusive jurisdiction over any dispute,
            without affecting any mandatory consumer protections that apply to
            you.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may update these terms. The version published on this page at the
            time you use the site is the one that applies, and the date at the top
            shows when it last changed.
          </p>

          <p className="pt-4 text-[13px] text-slate-500">
            Registered office: {fullAddress} · Phone {site.phone} · Fax{" "}
            {site.fax}
          </p>
        </Prose>
      </Section>
    </>
  );
}
