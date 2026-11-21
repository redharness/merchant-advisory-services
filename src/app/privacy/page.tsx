import type { Metadata } from "next";
import { PageHero, Prose, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${site.name} collects, uses, stores and deletes personal information, including merchant statements submitted for a savings quote.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        intro="What we collect, why, how long we keep it, and how to have it deleted. Written in plain language on purpose."
      />

      <Section>
        <p className="mb-10 text-[12px] uppercase tracking-[0.14em] text-slate-400">
          Last updated 21 November 2026
        </p>

        <Prose>
          <h2>Who is responsible</h2>
          <p>
            {site.name}, {site.address.line1}, {site.address.city},{" "}
            {site.address.region} {site.address.postal}, is responsible for the
            personal information described here. Contact us at{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline">
              {site.email}
            </a>{" "}
            or on{" "}
            <a href={site.phoneHref} className="text-brand underline">
              {site.phone}
            </a>
            .
          </p>

          <h2>What we collect</h2>
          <ul>
            <li>
              <strong>Contact details</strong> you give us — name, business name,
              email, phone number.
            </li>
            <li>
              <strong>Merchant statements and volume information</strong> you
              submit for a savings quote or audit.
            </li>
            <li>
              <strong>Messages</strong> you send through the contact form or by
              email.
            </li>
            <li>
              <strong>Technical data</strong> such as IP address, browser type and
              pages visited, collected through server logs and — only if you
              accept them — cookies used for analytics.
            </li>
          </ul>

          <h2>Why we use it</h2>
          <ul>
            <li>To prepare your audit and quote, and to reply to you.</li>
            <li>To provide advisory services you have asked for.</li>
            <li>To keep records required for accounting and legal purposes.</li>
            <li>To improve the site and understand which pages are used.</li>
          </ul>
          <p>
            We do not sell personal information, and we do not use statement data
            to advertise to you.
          </p>

          <h2>Statement data</h2>
          <p>
            A merchant statement can contain sensitive commercial information.
            We use it only to prepare your audit and quote. It is shared with a
            prospective acquiring bank or processor only when you ask us to obtain
            a quote or open an account, and only to the extent needed for
            underwriting. You do not need to redact the statement to send it.
          </p>

          <h2>Who we share information with</h2>
          <ul>
            <li>Acquiring banks and processors, when you ask for a quote or account.</li>
            <li>Service providers who host the site and handle email, under contract.</li>
            <li>Authorities, where we are legally required to disclose.</li>
          </ul>

          <h2>How long we keep it</h2>
          <p>
            Statements and quote records are kept for the duration of the advisory
            relationship and for up to 24 months afterwards for record-keeping,
            after which they are deleted. Contact enquiries that do not become
            clients are deleted after 12 months. You can ask for earlier deletion
            at any time.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask for a copy of the personal information we hold about you,
            ask us to correct it, or ask us to delete it. Email{" "}
            <a href={`mailto:${site.email}`} className="text-brand underline">
              {site.email}
            </a>{" "}
            and we will respond within 30 days. Where local law gives you
            additional rights — including rights to object to processing or to
            complain to a regulator — those apply.
          </p>

          <h2 id="cookies">Cookies</h2>
          <p>
            The site works without non-essential cookies. Where analytics cookies
            are used, they are set only after you accept them in the cookie banner,
            and you can withdraw consent at any time by clearing cookies for this
            site. Essential cookies are limited to what the site needs to function.
          </p>

          <h2>Security</h2>
          <p>
            The site is served over HTTPS, and files are transferred encrypted.
            Access to submitted statements is limited to advisors working on your
            enquiry.
          </p>

          <h2>Changes</h2>
          <p>
            If this policy changes materially we will update the date at the top of
            the page. Continued use of the site after a change means the updated
            policy applies.
          </p>
        </Prose>
      </Section>
    </>
  );
}
