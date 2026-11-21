import Link from "next/link";
import { site } from "@/lib/site";
import { Wordmark } from "./Brand";

const cols = [
  {
    title: "Services",
    links: [
      { href: "/services#audit", label: "Statement audit" },
      { href: "/services#pricing", label: "Interchange pricing" },
      { href: "/services#pos", label: "Point of sale" },
      { href: "/services#ecommerce", label: "E-commerce & ACH" },
      { href: "/services#funding", label: "Next-day funding" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/about#team", label: "Our team" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/partner", label: "Partner with us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/terms", label: "Terms & conditions" },
      { href: "/privacy", label: "Privacy policy" },
      { href: "/privacy#cookies", label: "Cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <Wordmark light markClass="h-10 w-auto" />
          <p className="mt-6 max-w-xs text-[13px] leading-relaxed text-white/60">
            Independent merchant advisory working with small business owners on
            card processing, point of sale and online payments.
          </p>

          <address className="mt-4 text-[12px] not-italic leading-relaxed text-white/50">
            <p>{site.address.line1}</p>
            <p>
              {site.address.city}, {site.address.region} {site.address.postal}
            </p>
            <p>
              <a
                href={site.phoneHref}
                className="flex min-h-11 items-center transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-11 items-center transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </p>
          </address>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-1">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="-mx-2 flex min-h-11 items-center rounded-md px-2 text-[13px] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-4 py-6 text-[11px] leading-relaxed text-white/45 md:flex-row md:items-start md:justify-between">
          <p>
            © 2026 {site.name}. {site.legal}, registered office{" "}
            {site.address.line1}, {site.address.city}, {site.address.region}{" "}
            {site.address.postal}.
          </p>
          <p className="max-w-md md:text-right">
            {site.name} is an independent advisory firm. We are not a bank, we
            do not hold customer deposits, and we do not endorse or represent any
            card network or acquiring bank. Card fees are set by the networks and
            your acquiring bank.
          </p>
        </div>
      </div>
    </footer>
  );
}
